// src/components/TVCard.tsx

import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import Modal from "react-native-modal"; // ✅ Swipeable modal

import TVShow from "../types/TVShow";
import TVInfoModal from "./TVInfoModal";

function TVCard({
  show,
  height,
  width,
}: {
  show: TVShow;
  height: number;
  width: number;
}) {
  const imageSrc = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  // Check if user prefers Light over Dark Theme
  const isLightTheme = useColorScheme() === "light";

  return (
    <>
      <Modal
        isVisible={visible}
        onSwipeComplete={closeModal}
        onBackdropPress={closeModal}
        swipeDirection="down"
        style={styles.modal}
        backdropOpacity={0.5}
        propagateSwipe
      >
        <TVInfoModal show={show} />
      </Modal>

      <TouchableOpacity onPress={openModal}>
        <View style={styles.tvCard}>
          {show.poster_path ? (
            <Image
              style={[{ height, width }, isLightTheme ? styles.lightImage : styles.darkImage]}
              source={{ uri: imageSrc }}
            />
          ) : (
            <View style={[{ height, width }, isLightTheme ? styles.lightViewAlt : styles.darkViewAlt]}>
              <Text style={isLightTheme ? styles.lightTextAlt : styles.darkTextAlt}>{show.name}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  tvCard: {
    marginVertical: 14,
  },
  lightImage: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#e6e6e6",
  },
  darkImage: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#252525",
  },
  lightTextAlt: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
  },
  darkTextAlt: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
  },
  lightViewAlt: {
    padding: 2,
    borderColor: "#000",
    borderWidth: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  darkViewAlt: {
    padding: 2,
    borderColor: "#FFF",
    borderWidth: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TVCard;


