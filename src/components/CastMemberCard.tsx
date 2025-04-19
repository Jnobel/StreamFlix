import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import CastMember from "../types/CastMember";

function CastMemberCard({ castMember }: { castMember: CastMember }) {
  const [visible, setVisible] = useState(false);

  const imageUrl = castMember?.profile_path
    ? `https://image.tmdb.org/t/p/w185${castMember.profile_path}`
    : "https://via.placeholder.com/80x100?text=No+Image";

  return (
    <>
      {/* Card */}
      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={styles.card}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.name} numberOfLines={1}>
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
          <View style={styles.modalContent}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.modalImage}
              resizeMode="cover"
            />
            <Text style={styles.modalName}>{castMember.name}</Text>
            <Text style={styles.modalCharacter}>
              Character: {castMember.character || "N/A"}
            </Text>
            <Text style={styles.modalMeta}>
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
  card: {
    width: 100,
    height: 140,
    alignItems: "center",
    marginRight: 10,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#2a2a2a",
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 6,
    backgroundColor: "#444",
    marginBottom: 6,
  },
  name: {
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
  modalContent: {
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
  modalName: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  modalCharacter: {
    color: "#CCC",
    fontSize: 14,
    marginTop: 8,
  },
  modalMeta: {
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
