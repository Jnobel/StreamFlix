import { StyleSheet, Text, View, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import Movie from "../types/Movie";
import MovieCard from "./MovieCard";

function MovieSection({ movies, sectionTitle }: { movies: Movie[]; sectionTitle: string }) {
  const { colors } = useTheme(); // 🔥 pull theme-aware colors

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        {sectionTitle}
      </Text>

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <MovieCard movie={item} height={200} width={140} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    height: 260,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 10,
  },
  cardWrapper: {
    marginRight: 10,
  },
});

export default MovieSection;


