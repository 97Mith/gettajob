import React from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";

const mockImages = [
  require("../../assets/servico1.png"),
  require("../../assets/servico2.png"),
  require("../../assets/servico3.png"),
  require("../../assets/servico4.png"),
  require("../../assets/servico5.png"),
  require("../../assets/servico6.png"),
  require("../../assets/servico7.png"),
];

const imageSize = Dimensions.get("window").width / 3; // 3 colunas

const GalleryTab = () => {
  return (
    <FlatList
      data={mockImages}
      keyExtractor={(_, index) => index.toString()}
      numColumns={3}
      renderItem={({ item }) => (
        <Image source={item} style={styles.imageThumbnail} />
      )}
      contentContainerStyle={styles.galleryContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    padding: 5,
  },
  imageThumbnail: {
    width: imageSize - 10,
    height: imageSize - 10,
    margin: 5,
    borderRadius: 8,
  },
});

export default GalleryTab;
