import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  LayoutChangeEvent,
<<<<<<< HEAD
} from "react-native";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { TMDB_API_KEY } from "../constants";
import CastMemberCard from "./CastMemberCard";
import CastMember from "../types/CastMember";
=======
  useColorScheme
} from "react-native";
import { useEffect, useState, useRef } from "react";
import { TMDB_API_KEY } from "../constants";
import CastMemberCard from "./CastMemberCard";
import CastMember from "../types/CastMember";
import { Ionicons } from "@expo/vector-icons";
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033

function MovieCredits({ movieId }: { movieId: number }) {
  const [cast, setCast] = useState<CastMember[]>([]);
  const scrollRef = useRef<ScrollView>(null);
  const scrollPosition = useRef(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
<<<<<<< HEAD
  const { colors } = useTheme(); // ✅ Theme-aware colors
=======

  // Check if user prefers Light over Dark Theme
  const isLightTheme = useColorScheme() === "light";
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${TMDB_API_KEY}`,
      { method: "GET", signal: controller.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        const sorted = (data?.cast || []).sort((a, b) => a.order - b.order);
        setCast(sorted.slice(0, 12));
      })
      .catch(console.error);

    return () => controller.abort();
  }, [movieId]);

  const scrollBy = (direction: "left" | "right") => {
    const offset = 150;

    scrollPosition.current += direction === "left" ? -offset : offset;

    // Clamp scroll to within bounds
    if (scrollPosition.current < 0) scrollPosition.current = 0;

    const maxScroll = contentWidth - scrollViewWidth;
    if (scrollPosition.current > maxScroll) {
      scrollPosition.current = maxScroll;
    }

    scrollRef.current?.scrollTo({
      x: scrollPosition.current,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={[styles.title, { color: colors.text }]}>Starring:</Text>

      <View style={styles.scrollWrapper}>
        {/* ⬅️ Left Arrow */}
        <TouchableOpacity onPress={() => scrollBy("left")} style={styles.arrow}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
=======
      <Text style={isLightTheme ? styles.lightTitle : styles.darkTitle}>Starring:</Text>
      <View style={styles.scrollWrapper}>
        {/* ⬅️ Left Arrow */}
        <TouchableOpacity onPress={() => scrollBy("left")} style={styles.arrow}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
        </TouchableOpacity>

        {/* Cast Scroll Row */}
        <ScrollView
          horizontal
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.castList}
          style={styles.scroll}
          onContentSizeChange={(w) => setContentWidth(w)}
          onLayout={(e: LayoutChangeEvent) =>
            setScrollViewWidth(e.nativeEvent.layout.width)
          }
        >
          {cast.map((member) => (
            <CastMemberCard key={member.id} castMember={member} />
          ))}
        </ScrollView>

        {/* ➡️ Right Arrow */}
        <TouchableOpacity onPress={() => scrollBy("right")} style={styles.arrow}>
<<<<<<< HEAD
          <Ionicons name="chevron-forward" size={24} color={colors.text} />
=======
          <Ionicons name="chevron-forward" size={24} color="#FFF" />
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
<<<<<<< HEAD
  title: {
=======
  lightTitle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 12,
    marginBottom: 6,
  },
  darkTitle: {
    color: "#FFF",
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 12,
    marginBottom: 6,
  },
  scrollWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    padding: 6,
    zIndex: 1,
  },
  castList: {
    paddingHorizontal: 8,
    alignItems: "center",
  },
  scroll: {
    flex: 1,
    height: 150,
  },
});

export default MovieCredits;







<<<<<<< HEAD
=======

>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
