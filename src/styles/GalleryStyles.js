import { StyleSheet, Dimensions } from "react-native";

const numColumns = 3;
const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / numColumns - 10;

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageWrapper: {
    marginBottom: 10,
    width: imageSize,
    height: imageSize + 20,
    alignItems: "center",
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 6,
  },
  likesText: {
    marginTop: 4,
    fontSize: 12,
    color: "#444",
  },
  fullScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  fullScreenImage: {
    width: "90%",
    height: "70%",
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: "#333",
  },
  fullScreenLikes: {
    marginTop: 20,
    fontSize: 16,
    color: "#fff",
  },
});
