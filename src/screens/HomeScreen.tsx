import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, Image, View, useColorScheme } from "react-native"
import { Foundation as FoundationIcon } from "@expo/vector-icons"
import { TMDB_API_KEY, BASE_URL } from "../constants"; // Adjust path if needed
import Movie from "../types/Movie"
import TVShow from "../types/TVShow";
import TVSection from "../components/TVSection";
import MovieSection from "../components/MovieSection"

function HomeScreen() {
    const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([])
    const [popularMovies, setPopularMovies] = useState<Movie[]>([])
    const [popularTV, setPopularTV] = useState<TVShow[]>([]);
    const [topRatedTV, setTopRatedTV] = useState<TVShow[]>([]);
    const controller = new AbortController()

    // Check if user prefers Light over Dark Theme
    const isLightTheme = useColorScheme() === "light";

    useEffect(() => {
        searchMovies()
    }, [])

    const searchMovies = () => {
  const controller = new AbortController();

  fetch(`${BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}`, {
    method: "GET",
    signal: controller.signal,
  })
    .then((response) => response.json())
    .then((data) => setNowPlayingMovies(data.results))
    .catch(console.error);

  fetch(`${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`, {
    method: "GET",
    signal: controller.signal,
  })
    .then((response) => response.json())
    .then((data) => setPopularMovies(data.results))
    .catch(console.error);

  fetch(`${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`, {
    method: "GET",
    signal: controller.signal,
  })
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
        <View style={isLightTheme ? styles.lightContainer : styles.darkContainer}>
            <View style={styles.mainContent}>
                <View style={styles.image}>
                    <Image
                        resizeMode="contain"
                        source={require("../assets/StreamFlix+.png")}
                        style={{ width: "80%", height: 50 }}
                    />
                </View>

                <ScrollView style={styles.scrollView}>
                  <MovieSection
                    movies={nowPlayingMovies}
                    sectionTitle="Now playing in theaters..."
                  />

                  <MovieSection
                    movies={popularMovies}
                    sectionTitle="Popular movies right now..."
                  />

                  <MovieSection
                    movies={topRatedMovies}
                    sectionTitle="Our all time top rated movies..."
                  />

                   {/* 📺 TV Sections */}
                  <TVSection
                    shows={popularTV}
                    sectionTitle="Popular TV Shows"
                  />
                  <TVSection
                    shows={topRatedTV}
                    sectionTitle="Top Rated TV Shows"
                  />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    darkContainer: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
    },
    lightContainer: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
  },
    scrollView: {
        marginLeft: 20,
        bottom: "20%",
        marginTop: 170
    },
    mainContent: {
        width: "100%",
        top: 50,
    },
    image: {
        alignItems: "center",
        marginBottom: 20,
    }
})

export default HomeScreen 
