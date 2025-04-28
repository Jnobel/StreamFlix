import { StyleSheet, Text, View, FlatList, useColorScheme } from "react-native"
import Movie from "../types/Movie"
import MovieCard from "./MovieCard"

function MovieSection({ movies, sectionTitle }: { movies: Movie[], sectionTitle: string }) {
    // Check if user prefers Light over Dark Theme
    const isLightTheme = useColorScheme() === "light";

    return (
        <View style={styles.section}>
            <Text style={isLightTheme ? styles.lightSectionTitle : styles.darkSectionTitle}>
                {sectionTitle}
            </Text>

            <FlatList
                data={movies}
                renderItem={
                    ({ item }) =>
                    <View style={styles.cardWraper}>
                        <MovieCard
                            key={item.id}
                            movie={item}
                            height={200}
                            width={140}
                        />
                    </View>
                }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        height: 260,
    },
    lightSectionTitle: {
        fontSize: 22,
        fontWeight: "500",
        color: "#000"
    },
    darkSectionTitle: {
        fontSize: 22,
        fontWeight: "500",
        color: "#FFF"
    },
    cardWraper: {
        marginRight: 10,
    }
})

export default MovieSection
