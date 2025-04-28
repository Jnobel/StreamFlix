// src/components/TVInfoModal.tsx

import { View, Text, StyleSheet, Image, ScrollView, useColorScheme } from "react-native";
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

    // Check if user prefers Light over Dark Theme
    const isLightTheme = useColorScheme() === "light";

  return (
    <View style={isLightTheme ? styles.lightContainer : styles.darkContainer}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          {show.poster_path ? (
            <Image style={styles.image} source={{ uri: imageSrc }} />
          ) : (
            <View style={isLightTheme ? styles.lightViewAlt : styles.darkViewAlt}>
              <Text style={isLightTheme ? styles.lightTextAlt : styles.darkTextAlt}>{show.name}</Text>
            </View>
          )}

          <View style={styles.infosContainer}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={2}
              ellipsizeMode="clip"
              style={isLightTheme ? styles.lightTitle : styles.darkTitle}
            >
              {show.name}
            </Text>

            <View style={styles.subtitlesRow}>
              <Text style={isLightTheme ? styles.lightSubtitle : styles.darkSubtitle}>{releaseYear}</Text>
              <AntDesignIcon
                name="like1"
                size={12}
                color="#C1C1C1"
                style={{ marginRight: 2 }}
              />
              <Text style={isLightTheme ? styles.lightSubtitle : styles.darkSubtitle}>{rating}</Text>
            </View>

            <Text style={isLightTheme ? styles.lightOverview : styles.darkOverview} numberOfLines={4}>
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
  lightContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    width: "100%",
    maxHeight: "90%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 15,
  },
  darkContainer: {
    position: "absolute",
    backgroundColor: "#252525",
    bottom: 0,
    width: "100%",
    maxHeight: "90%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 15,
  },
  topRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  infosContainer: {
    marginLeft: 10,
    marginBottom: 5,
    width: "65%",
  },
  lightTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000",
  },
  darkTitle: {
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
  lightSubtitle: {
    color: "#454545",
    marginRight: 12,
    fontSize: 14,
    fontWeight: "800",
  },
  darkSubtitle: {
    color: "#C1C1C1",
    marginRight: 12,
    fontSize: 14,
    fontWeight: "800",
  },
  lightOverview: {
    color: "#5e5e5e",
    fontSize: 14,
    fontWeight: "500",
    maxHeight: 80,
  },
  darkOverview: {
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
  lightTextAlt: {
    color: "#000",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  darkTextAlt: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  lightViewAlt: {
    height: 182,
    width: 122,
    padding: 2,
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "#313131",
    justifyContent: "center",
  },
  darkViewAlt: {
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

