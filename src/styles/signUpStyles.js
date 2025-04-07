import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#c800ff",
    marginBottom: 30,
  },
  pickerContainer: {
    width: "100%",
    backgroundColor: "#222",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  label: {
    color: "#fff",
    marginBottom: 5,
  },
  picker: {
    color: "#fff",
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "#ccc",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
