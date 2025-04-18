import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    padding: 20,
  },

  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  tag: {
    fontSize: 14,
    color: "#c800ff",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00ff88",
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shareButton: {
    backgroundColor: "#666",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  shareText: {
    color: "#fff",
    fontWeight: "bold",
  },
  subscribeButton: {
    backgroundColor: "#c800ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  subscribeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
