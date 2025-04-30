import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  useColorScheme
} from "react-native";
import CastMember from "../types/CastMember";

function CastMemberCard({ castMember }: { castMember: CastMember }) {
  const [visible, setVisible] = useState(false);

  // Check if user prefers Light over Dark Theme
  const isLightTheme = useColorScheme() === "light";

  const imageUrl = castMember?.profile_path
    ? `https://image.tmdb.org/t/p/w185${castMember.profile_path}`
    : "https://via.placeholder.com/80x100?text=No+Image";

  return (
    <>
      {/* Card */}
      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={isLightTheme ? styles.lightCard : styles.darkCard}>
          <Image
            source={{ uri: imageUrl }}
            style={isLightTheme ? styles.lightImage : styles.darkImage}
            resizeMode="cover"
          />
          <Text style={isLightTheme ? styles.lightName : styles.darkName} numberOfLines={1}>
            {castMember.name}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={isLightTheme ? styles.lightModalContent : styles.darkModalContent}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.modalImage}
              resizeMode="cover"
            />
            <Text style={isLightTheme ? styles.lightModalName : styles.darkModalName}>{castMember.name}</Text>
            <Text style={isLightTheme ? styles.lightModalCharacter : styles.darkModalCharacter}>
              Character: {castMember.character || "N/A"}
            </Text>
            <Text style={isLightTheme ? styles.lightModalMeta : styles.darkModalMeta}>
              Popularity: {castMember.popularity?.toFixed(1) || "N/A"}
            </Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  lightCard: {
    width: 100,
    height: 140,
    alignItems: "center",
    marginRight: 10,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#e6e6e6",
  },
  darkCard: {
    width: 100,
    height: 140,
    alignItems: "center",
    marginRight: 10,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#2a2a2a",
  },
  lightImage: {
    width: 80,
    height: 100,
    borderRadius: 6,
    backgroundColor: "#ccc",
    marginBottom: 6,
  },
  darkImage: {
    width: 80,
    height: 100,
    borderRadius: 6,
    backgroundColor: "#444",
    marginBottom: 6,
  },
  lightName: {
    color: "#000",
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 4,
  },
  darkName: {
    color: "#FFF",
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 4,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  lightModalContent: {
    backgroundColor: "#ddd",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 250,
  },
  darkModalContent: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 250,
  },
  modalImage: {
    width: 100,
    height: 140,
    borderRadius: 8,
    marginBottom: 10,
  },
  lightModalName: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  darkModalName: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  lightModalCharacter: {
    color: "#333",
    fontSize: 14,
    marginTop: 8,
  },
  darkModalCharacter: {
    color: "#CCC",
    fontSize: 14,
    marginTop: 8,
  },
  lightModalMeta: {
    color: "#666",
    fontSize: 12,
    marginTop: 4,
  },
  darkModalMeta: {
    color: "#888",
    fontSize: 12,
    marginTop: 4,
  },
  closeText: {
    marginTop: 14,
    color: "#00BFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default CastMemberCard;
