import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff"
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B008B"
  },
  profileInfo: {
    alignItems: "center",
    marginTop: 10
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  nickname: {
    fontSize: 18,
    fontWeight: "bold"
  },
  stats: {
    fontSize: 14,
    color: "#444"
  },
  tagsContainer: {
    flexDirection: "row",
    marginVertical: 5
  },
  tag: {
    backgroundColor: "#e0f7fa",
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginHorizontal: 4,
    borderRadius: 10
  },
  location: {
    color: "gray",
    marginTop: 5
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5
  },
  ratingText: {
    marginLeft: 5,
    color: "#444"
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  button: {
    backgroundColor: "#ddd",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5
  },
  tabSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: "#fff"
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#8B008B",
    paddingBottom: 5
  },
  inactiveTab: {
    paddingBottom: 5
  },
  tabContent: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }
});
