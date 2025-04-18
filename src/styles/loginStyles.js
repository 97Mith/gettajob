import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#c800ff",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#ccc",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  socialText: {
    marginVertical: 20,
    color: "#fff",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  forgotPassword: {
    marginTop: 20,
    color: "#fff",
  },
  link: {
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 30,
  },
  
});
