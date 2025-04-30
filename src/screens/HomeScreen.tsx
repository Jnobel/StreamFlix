import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import MovieSection from "../components/MovieSection";
import TVSection from "../components/TVSection";
import { TMDB_API_KEY, BASE_URL } from "../constants";

function HomeScreen() {
  const { colors } = useTheme();  // 🔥 Pull colors from active theme
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);

  useEffect(() => {
    searchMedia();
  }, []);

  const searchMedia = () => {
    fetch(`${BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}`)
      .then((response) => response.json())
      .then((data) => setNowPlayingMovies(data.results))
      .catch(console.error);

    fetch(`${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`)
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results))
      .catch(console.error);

    fetch(`${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`)
      .then((response) => response.json())
      .then((data) => setTopRatedMovies(data.results))
      .catch(console.error);

    fetch(`${BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setPopularTV(data.results || []))
      .catch(console.error);

    fetch(`${BASE_URL}/tv/top_rated?api_key=${TMDB_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setTopRatedTV(data.results || []))
      .catch(console.error);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.mainContent}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            source={require("../assets/StreamFlix+.png")}
            style={styles.logo}
          />
        </View>

        <ScrollView style={styles.scrollView}>
          <MovieSection movies={nowPlayingMovies} sectionTitle="Now playing in theaters..." />
          <MovieSection movies={popularMovies} sectionTitle="Popular movies right now..." />
          <MovieSection movies={topRatedMovies} sectionTitle="Our all time top rated movies..." />
          <TVSection shows={popularTV} sectionTitle="Popular TV Shows" />
          <TVSection shows={topRatedTV} sectionTitle="Top Rated TV Shows" />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  mainContent: {
    width: "100%",
    top: 50,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: "80%",
    height: 50,
  },
  scrollView: {
    marginLeft: 20,
    bottom: "20%",
    marginTop: 170,
  },
});

export default HomeScreen;


