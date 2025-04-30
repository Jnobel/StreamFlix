<<<<<<< HEAD
=======
// src/components/StreamingProviders.tsx

>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
<<<<<<< HEAD
} from "react-native";
import { TMDB_API_KEY, BASE_URL } from "../constants";
import { useTheme } from "@react-navigation/native";
=======
  useColorScheme,
} from "react-native";
import { TMDB_API_KEY, BASE_URL } from "../constants";
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033

interface Provider {
  logo_path: string;
  provider_name: string;
}

interface Props {
  id: number;
  mediaType: "movie" | "tv";
}

function StreamingProviders({ id, mediaType }: Props) {
  const [providers, setProviders] = useState<{
    flatrate?: Provider[];
    buy?: Provider[];
    rent?: Provider[];
    free?: Provider[];
  }>({});

  const [collapsed, setCollapsed] = useState({
    stream: false,
    buy: false,
    rent: false,
    free: false,
  });

<<<<<<< HEAD
  const { colors } = useTheme(); // ✅ Theme hook

=======
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
  const toggleCollapsed = (key: keyof typeof collapsed) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  };

<<<<<<< HEAD
=======
  // Check if user prefers Light over Dark Theme
  const isLightTheme = useColorScheme() === "light";

>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `${BASE_URL}/${mediaType}/${id}/watch/providers?api_key=${TMDB_API_KEY}`,
      {
        method: "GET",
        signal: controller.signal,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const usProviders = data.results?.US;
        if (usProviders) {
          setProviders({
            flatrate: usProviders.flatrate,
            buy: usProviders.buy,
            rent: usProviders.rent,
            free: usProviders.free,
          });
        }
      })
      .catch(console.error);

    return () => controller.abort();
  }, [id, mediaType]);

  const renderProviderRow = (
    label: string,
    data?: Provider[],
    collapsedKey?: keyof typeof collapsed
  ) => {
    if (!data || data.length === 0) return null;
    const isCollapsed = collapsedKey ? collapsed[collapsedKey] : false;

    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => toggleCollapsed(collapsedKey!)}>
<<<<<<< HEAD
          <Text style={[styles.label, { color: colors.text }]}>
=======
          <Text style={isLightTheme ? styles.lightLabel : styles.darkLabel}>
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
            {label} {isCollapsed ? "▲" : "▼"}
          </Text>
        </TouchableOpacity>
        {!isCollapsed && (
          <View style={styles.icons}>
            {data.map((provider, index) => (
              <Image
                key={`${label}-${index}`}
                source={{
                  uri: `https://image.tmdb.org/t/p/w92${provider.logo_path}`,
                }}
                style={styles.logo}
                resizeMode="contain"
              />
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderProviderRow("Stream", providers.flatrate, "stream")}
      {renderProviderRow("Buy", providers.buy, "buy")}
      {renderProviderRow("Rent", providers.rent, "rent")}
      {renderProviderRow("Free", providers.free, "free")}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingVertical: 4,
  },
  row: {
    marginBottom: 10,
  },
<<<<<<< HEAD
  label: {
=======
  lightLabel: {
    color: "#000",
    fontWeight: "600",
    marginBottom: 4,
    fontSize: 16,
  },
  darkLabel: {
    color: "#FFF",
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
    fontWeight: "600",
    marginBottom: 4,
    fontSize: 16,
  },
  icons: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 8,
  },
  logo: {
    height: 42,
    width: 42,
    marginRight: 8,
    borderRadius: 6,
  },
});

export default StreamingProviders;


<<<<<<< HEAD

=======
>>>>>>> 88731896620bdf31ecae74031d8f5c1a4deac033
