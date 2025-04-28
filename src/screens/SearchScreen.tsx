import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TMDB_API_KEY, BASE_URL } from "../constants";
import MovieCard from "../components/MovieCard";
import Movie from "../types/Movie";

const tmdbLogo = require("../assets/StreamFlix+.png");

function SearchScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Check if user prefers Light over Dark Theme
  const isLightTheme = useColorScheme() === "light";

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    if (!search) {
      setLoading(false);
      setMovies([]);
      return;
    }

    const timeoutSearch = setTimeout(() => {
      const url = `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
        search
      )}`;
      console.log("Searching:", url);

      fetch(url, {
        method: "GET",
        signal: controller.signal,
      })
        .then((response) => {
          console.log("Response:", response.status);
          return response.json();
        })
        .then((data) => {
          console.log("Data:", data);
          setMovies(data.results || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Search error:", error);
          setLoading(false);
        });
    }, 400);

    return () => {
      clearTimeout(timeoutSearch);
      controller.abort();
    };
  }, [search]);

  const mainContent = () => {
    if (loading) {
      return (
        <View style={styles.mainContentView}>
          <Text style={isLightTheme ? styles.lightMainContentText : styles.darkMainContentText}>Loading...</Text>
        </View>
      );
    }

    if (!search) {
      return (
        <View style={styles.mainContentView}>
          <Text style={isLightTheme ? styles.lightMainContentText : styles.darkMainContentText}>
            Search for a movie, or Tv show...
          </Text>
        </View>
      );
    }

    if (movies.length > 0) {
      return (
        <ScrollView contentContainerStyle={styles.mainContentView}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              height={350}
              width={245}
            />
          ))}
        </ScrollView>
      );
    }

    return (
      <View style={styles.mainContentView}>
        <Text style={isLightTheme ? styles.lightMainContentText : styles.darkMainContentText}>Sorry, nothing was found for</Text>
        <Text style={isLightTheme ? styles.lightMainContentText : styles.darkMainContentText}>"{search}"</Text>
      </View>
    );
  };

  return (
    <View style={isLightTheme ? styles.lightContainer : styles.darkContainer}>
      <View style={styles.header}>
        <Image
          source={tmdbLogo}
          resizeMode="contain"
          style={styles.logo}
        />

        <View style={isLightTheme ? styles.lightSearchBox : styles.darkSearchBox}>
          <Ionicons
            name="ios-search-sharp"
            size={34}
            color={isLightTheme ? '#404040' : '#c1c1c1'}
            style={{ marginRight: 15 }}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={isLightTheme ? '#404040' : '#c1c1c1'}
            value={search}
            onChangeText={setSearch}
            style={isLightTheme ? styles.lightSearchField : styles.darkSearchField}
          />
        </View>
      </View>

      {mainContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  header: {
    marginTop: 60,
    alignItems: "center",
  },
  logo: {
    height: 80,
    width: 280,
    marginBottom: 10,
  },
  lightSearchBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    backgroundColor: "#e6e6e6",
    borderRadius: 20,
    width: "85%",
    height: 60,
    marginBottom: 20,
  },
  darkSearchBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    backgroundColor: "#424242",
    borderRadius: 20,
    width: "85%",
    height: 60,
    marginBottom: 20,
  },
  lightSearchField: {
    height: "100%",
    flex: 1,
    color: "#000",
    fontSize: 18,
  },
  darkSearchField: {
    height: "100%",
    flex: 1,
    color: "#FFF",
    fontSize: 18,
  },
  mainContentView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingBottom: 20,
  },
  lightMainContentText: {
    fontSize: 25,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  darkMainContentText: {
    fontSize: 25,
    fontWeight: "500",
    color: "#FFF",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default SearchScreen;


