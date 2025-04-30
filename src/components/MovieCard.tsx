import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
<<<<<<< HEAD
} from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "@react-navigation/native";
=======
  useColorScheme
} from "react-native";
import Modal from "react-native-modal"; // ✅ Gesture-safe modal
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033

import Movie from "../types/Movie";
import MovieInfoModal from "./MovieInfoModal";

<<<<<<< HEAD
interface MovieCardProps {
  movie: Movie;
  height: number;
  width: number;
}

function MovieCard({ movie, height, width }: MovieCardProps) {
  const imageSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const [visible, setVisible] = useState(false);
  const { colors } = useTheme(); // ✅ Theme colors
=======
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
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033

  return (
    <>
      <Modal
        isVisible={visible}
        onSwipeComplete={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
        swipeDirection="down"
        style={styles.modal}
        backdropOpacity={0.5}
<<<<<<< HEAD
        propagateSwipe={true}
=======
        propagateSwipe={true} // ✅ allows inner scroll/touch
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
      >
        <MovieInfoModal movie={movie} />
      </Modal>

      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={styles.movieCard}>
          {movie.poster_path ? (
            <Image
<<<<<<< HEAD
              style={[
                { height, width },
                {
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: colors.border, // ✅ Themed border
                },
              ]}
              source={{ uri: imageSrc }}
            />
          ) : (
            <View
              style={[
                {
                  height,
                  width,
                  borderRadius: 10,
                  borderWidth: 4,
                  borderColor: colors.border,
                  backgroundColor: colors.card,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                },
              ]}
            >
              <Text style={{ color: colors.text, textAlign: "center", fontSize: 20 }}>
                {movie.title}
              </Text>
=======
              style={[{ height, width }, isLightTheme ? styles.lightImage : styles.darkImage]}
              source={{ uri: imageSrc }}
            />
          ) : (
            <View style={[{ height, width }, isLightTheme ? styles.lightViewAlt : styles.darkViewAlt]}>
              <Text style={isLightTheme ? styles.lightTextAlt : styles.darkTextAlt}>{movie.title}</Text>
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
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
<<<<<<< HEAD
    margin: 0,
=======
    margin: 0, // full-width bottom modal
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
  },
  movieCard: {
    marginVertical: 14,
  },
<<<<<<< HEAD
=======
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
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
});

export default MovieCard;


<<<<<<< HEAD

=======
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
