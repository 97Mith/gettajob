import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const SocialButton = ({ imageSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={imageSource} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default SocialButton;
