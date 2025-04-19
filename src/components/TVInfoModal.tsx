// src/components/TVInfoModal.tsx

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { AntDesign as AntDesignIcon } from "@expo/vector-icons";

import TVShow from "../types/TVShow";
import Credits from "./Credits";
import StreamingProviders from "./StreamingProviders";

function TVInfoModal({ show }: { show: TVShow }) {
  const imageSrc = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
  const releaseYear = show?.first_air_date
    ? new Date(show.first_air_date).getFullYear()
    : "TBA";

  const rating = show?.vote_average
    ? `${show.vote_average.toFixed(1)}/10`
    : "Unrated";

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          {show.poster_path ? (
            <Image style={styles.image} source={{ uri: imageSrc }} />
          ) : (
            <View style={styles.viewAlt}>
              <Text style={styles.textAlt}>{show.name}</Text>
            </View>
          )}

          <View style={styles.infosContainer}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={2}
              ellipsizeMode="clip"
              style={styles.title}
            >
              {show.name}
            </Text>

            <View style={styles.subtitlesRow}>
              <Text style={styles.subtitle}>{releaseYear}</Text>
              <AntDesignIcon
                name="like1"
                size={12}
                color="#C1C1C1"
                style={{ marginRight: 2 }}
              />
              <Text style={styles.subtitle}>{rating}</Text>
            </View>

            <Text style={styles.overview} numberOfLines={4}>
              {show.overview || "No description available."}
            </Text>
          </View>
        </View>

        {/* ✅ Passing mediaType="tv" to load cast correctly */}
        <Credits id={show.id} mediaType="tv" />
        <StreamingProviders id={show.id} mediaType="tv" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#252525",
    bottom: 0,
    width: "100%",
    maxHeight: "90%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 15,
  },
  infosContainer: {
    marginLeft: 10,
    marginBottom: 5,
    width: "65%",
  },
  topRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FFF",
  },
  subtitlesRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 6,
  },
  subtitle: {
    color: "#C1C1C1",
    marginRight: 12,
    fontSize: 14,
    fontWeight: "800",
  },
  overview: {
    color: "#C1C1C1",
    fontSize: 14,
    fontWeight: "500",
    maxHeight: 80,
  },
  image: {
    height: 182,
    width: 122,
    borderRadius: 5,
  },
  textAlt: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  viewAlt: {
    height: 182,
    width: 122,
    padding: 2,
    borderColor: "#FFF",
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "#313131",
    justifyContent: "center",
  },
});

export default TVInfoModal;

