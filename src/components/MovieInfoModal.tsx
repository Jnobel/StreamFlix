import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
<<<<<<< HEAD
} from "react-native";
import { useState } from "react";
import { AntDesign as AntDesignIcon } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
=======
  useColorScheme,
} from "react-native";
import { useState } from "react";
import { AntDesign as AntDesignIcon } from "@expo/vector-icons";
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033

import Movie from "../types/Movie";
import MovieCredits from "./MovieCredits";
import StreamingProviders from "./StreamingProviders";

function MovieInfoModal({ movie }: { movie: Movie }) {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const imageSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const releaseYear = movie?.release_date
    ? new Date(movie.release_date).getFullYear()
    : "No release date";

<<<<<<< HEAD
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
=======
  // Check if user prefers Light over Dark Theme
  const isLightTheme = useColorScheme() === "light";

  return (
    <View style={isLightTheme ? styles.lightContainer : styles.darkContainer}>
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
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
<<<<<<< HEAD
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
=======
            <View style={isLightTheme ? styles.lightViewAlt : styles.darkViewAlt}>
              <Text style={isLightTheme ? styles.lightTextAlt : styles.darkTextAlt}>{movie.title}</Text>
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
            </View>
          )}

          <View style={styles.infosContainer}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={2}
              ellipsizeMode="clip"
<<<<<<< HEAD
              style={[styles.title, { color: colors.text }]}
=======
              style={isLightTheme ? styles.lightTitle : styles.darkTitle}
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
            >
              {movie.title}
            </Text>

            <View style={styles.subtitlesRow}>
<<<<<<< HEAD
              <Text style={[styles.subtitle, { color: colors.text }]}>
                {releaseYear}
              </Text>
=======
              <Text style={isLightTheme ? styles.lightSubtitle : styles.darkSubtitle}>{releaseYear}</Text>
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
              <AntDesignIcon
                name="like1"
                size={12}
                color="#C1C1C1"
                style={{ marginRight: 2 }}
              />
<<<<<<< HEAD
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
=======
              <Text style={isLightTheme ? styles.lightSubtitle : styles.darkSubtitle}>{movie.vote_average}/10</Text>
              <Text style={isLightTheme ? styles.lightSubtitle : styles.darkSubtitle}>{movie.adult ? "+18" : ""}</Text>
            </View>

            <Text style={isLightTheme ? styles.lightOverview : styles.darkOverview} numberOfLines={4}>
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
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
<<<<<<< HEAD
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: "90%",
=======
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
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
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
<<<<<<< HEAD
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
  subtitle: {
    marginRight: 12,
    fontSize: 14,
    fontWeight: "800",
=======
  lightTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000",
  },
  darkTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FFF",
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
  },
  subtitlesRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 6,
  },
<<<<<<< HEAD
  overview: {
=======
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
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
    fontSize: 14,
    fontWeight: "500",
    maxHeight: 80,
  },
  image: {
    height: 182,
    width: 122,
    borderRadius: 5,
  },
<<<<<<< HEAD
  textAlt: {
=======
  lightTextAlt: {
    color: "#000",
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
<<<<<<< HEAD
  viewAlt: {
    height: 182,
    width: 122,
    padding: 2,
    borderWidth: 3,
    borderRadius: 10,
=======
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
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
    justifyContent: "center",
  },
});

export default MovieInfoModal;





<<<<<<< HEAD
=======

>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
