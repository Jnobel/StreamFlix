import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import Movie from "../types/Movie";
import MovieCard from "../components/MovieCard";
import { TMDB_API_KEY, BASE_URL } from "../constants";

function SearchScreen() {
  const { colors } = useTheme(); // ✅ grab theme colors
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    if (query.length >= 3) {
      fetch(`${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}`, {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) => setResults(data.results || []))
        .catch(console.error);
    } else {
      setResults([]);
    }

    return () => controller.abort();
  }, [query]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        placeholder="Search for a movie..."
        placeholderTextColor={colors.border}
        style={[
          styles.input,
          {
            backgroundColor: colors.card,
            color: colors.text,
            borderColor: colors.border,
          },
        ]}
        value={query}
        onChangeText={setQuery}
      />

      {results.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <MovieCard movie={item} height={200} width={140} />
            </View>
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={[styles.placeholderText, { color: colors.text }]}>
          No results found.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  input: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1.5,
    fontSize: 16,
    marginBottom: 20,
  },
  placeholderText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 50,
  },
  list: {
    paddingBottom: 100,
  },
  cardWrapper: {
    marginBottom: 16,
    alignItems: "center",
  },
});

export default SearchScreen;



