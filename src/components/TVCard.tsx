// src/components/TVCard.tsx

import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
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
              style={[{ height, width }, styles.image]}
              source={{ uri: imageSrc }}
            />
          ) : (
            <View style={[{ height, width }, styles.viewAlt]}>
              <Text style={styles.textAlt}>{show.name}</Text>
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
  image: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#252525",
  },
  textAlt: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
  },
  viewAlt: {
    padding: 2,
    borderColor: "#FFF",
    borderWidth: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TVCard;


