import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme
} from "react-native";
import Modal from "react-native-modal"; // ✅ Gesture-safe modal

import Movie from "../types/Movie";
import MovieInfoModal from "./MovieInfoModal";

function MovieCard({
  movie,
  height,
  width,
}: {
  movie: Movie;
  height: number;
  width: number;
}) {
  const imageSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const [visible, setVisible] = useState(false);

  // Check if user prefers Light over Dark Theme
  const isLightTheme = useColorScheme() === "light";

  return (
    <>
      <Modal
        isVisible={visible}
        onSwipeComplete={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
        swipeDirection="down"
        style={styles.modal}
        backdropOpacity={0.5}
        propagateSwipe={true} // ✅ allows inner scroll/touch
      >
        <MovieInfoModal movie={movie} />
      </Modal>

      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={styles.movieCard}>
          {movie.poster_path ? (
            <Image
              style={[{ height, width }, isLightTheme ? styles.lightImage : styles.darkImage]}
              source={{ uri: imageSrc }}
            />
          ) : (
            <View style={[{ height, width }, isLightTheme ? styles.lightViewAlt : styles.darkViewAlt]}>
              <Text style={isLightTheme ? styles.lightTextAlt : styles.darkTextAlt}>{movie.title}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0, // full-width bottom modal
  },
  movieCard: {
    marginVertical: 14,
  },
  lightImage: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#e6e6e6",
  },
  darkImage: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#252525",
  },
  lightTextAlt: {
    color: "#000",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "400",
  },
  darkTextAlt: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "400",
  },
  lightViewAlt: {
    padding: 2,
    borderColor: "#000",
    borderWidth: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  darkViewAlt: {
    padding: 2,
    borderColor: "#FFF",
    borderWidth: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MovieCard;


