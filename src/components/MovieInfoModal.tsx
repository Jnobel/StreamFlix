import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { AntDesign as AntDesignIcon } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

import Movie from "../types/Movie";
import MovieCredits from "./MovieCredits";
import StreamingProviders from "./StreamingProviders";

function MovieInfoModal({ movie }: { movie: Movie }) {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const imageSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const releaseYear = movie?.release_date
    ? new Date(movie.release_date).getFullYear()
    : "No release date";

  const { colors, dark } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        scrollEnabled={scrollEnabled}
        nestedScrollEnabled
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.topRow}>
          {movie.backdrop_path ? (
            <Image style={styles.image} source={{ uri: imageSrc }} />
          ) : (
            <View
              style={[
                styles.viewAlt,
                {
                  backgroundColor: dark ? "#313131" : "#EEE",
                  borderColor: colors.border,
                },
              ]}
            >
              <Text style={[styles.textAlt, { color: colors.text }]}>
                {movie.title}
              </Text>
            </View>
          )}

          <View style={styles.infosContainer}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={2}
              ellipsizeMode="clip"
              style={[styles.title, { color: colors.text }]}
            >
              {movie.title}
            </Text>

            <View style={styles.subtitlesRow}>
              <Text style={[styles.subtitle, { color: colors.text }]}>
                {releaseYear}
              </Text>
              <AntDesignIcon
                name="like1"
                size={12}
                color="#C1C1C1"
                style={{ marginRight: 2 }}
              />
              <Text style={[styles.subtitle, { color: colors.text }]}>
                {movie.vote_average}/10
              </Text>
              <Text style={[styles.subtitle, { color: colors.text }]}>
                {movie.adult ? "+18" : ""}
              </Text>
            </View>

            <Text
              style={[styles.overview, { color: colors.text }]}
              numberOfLines={4}
            >
              {movie.overview}
            </Text>
          </View>
        </View>

        <MovieCredits
          movieId={movie.id}
          onScrollStart={() => setScrollEnabled(false)}
          onScrollEnd={() => setScrollEnabled(true)}
        />

        <StreamingProviders id={movie.id} mediaType="movie" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: "90%",
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
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
  subtitle: {
    marginRight: 12,
    fontSize: 14,
    fontWeight: "800",
  },
  subtitlesRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 6,
  },
  overview: {
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
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  viewAlt: {
    height: 182,
    width: 122,
    padding: 2,
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: "center",
  },
});

export default MovieInfoModal;





