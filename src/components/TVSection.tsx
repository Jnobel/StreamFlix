import { View, Text, StyleSheet, FlatList } from "react-native";
import TVShow from "../types/TVShow";
import TVCard from "./TVCard";

function TVSection({ shows, sectionTitle }: { shows: TVShow[], sectionTitle: string }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
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
  sectionTitle: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 12,
    marginBottom: 6,
  },
});

export default TVSection;
