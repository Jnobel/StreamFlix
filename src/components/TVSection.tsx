import { View, Text, StyleSheet, FlatList, useColorScheme } from "react-native";
import TVShow from "../types/TVShow";
import TVCard from "./TVCard";

function TVSection({ shows, sectionTitle }: { shows: TVShow[], sectionTitle: string }) {
  // Check if user prefers Light over Dark Theme
  const isLightTheme = useColorScheme() === "light";

  return (
    <View>
      <Text style={isLightTheme ? styles.lightSectionTitle : styles.darkSectionTitle}>{sectionTitle}</Text>
      <FlatList
        data={shows}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TVCard show={item} height={300} width={200} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lightSectionTitle: {
    color: "#000",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 12,
    marginBottom: 6,
  },
  darkSectionTitle: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 12,
    marginBottom: 6,
  },
});

export default TVSection;
