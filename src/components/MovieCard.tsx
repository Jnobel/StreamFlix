import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "@react-navigation/native";

import Movie from "../types/Movie";
import MovieInfoModal from "./MovieInfoModal";

interface MovieCardProps {
  movie: Movie;
  height: number;
  width: number;
}

function MovieCard({ movie, height, width }: MovieCardProps) {
  const imageSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const [visible, setVisible] = useState(false);
  const { colors } = useTheme(); // ✅ Theme colors

  return (
    <>
      <Modal
        isVisible={visible}
        onSwipeComplete={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
        swipeDirection="down"
        style={styles.modal}
        backdropOpacity={0.5}
        propagateSwipe={true}
      >
        <MovieInfoModal movie={movie} />
      </Modal>

      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={styles.movieCard}>
          {movie.poster_path ? (
            <Image
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
    margin: 0,
  },
  movieCard: {
    marginVertical: 14,
  },
});

export default MovieCard;



