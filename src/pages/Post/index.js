import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Post() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.username}>paula_johnson83</Text>
            <Text style={styles.location}>Altadena, California</Text>
          </View>
        </View>
        <Feather name="more-vertical" size={20} />
      </View>

      <Image source={require("../../assets/post.png")} style={styles.postImage} />

      <View style={styles.actions}>
        <FontAwesome name="heart-o" size={24} />
        <FontAwesome name="send" size={24} style={{ marginLeft: 10 }} />
      </View>

      <Text style={styles.likes}>532 Likes</Text>

      <Text style={styles.description}>
        <Text style={styles.username}>paula_johnson83 </Text>
        lorem ipsum dolor sit amet{" "}
        <Text style={styles.hashtag}>#augue</Text>{" "}
        <Text style={styles.hashtag}>#adipiscing</Text>{" "}
        <Text style={styles.hashtag}>#elit</Text>{" "}
        <Text style={styles.hashtag}>#do</Text>{" "}
        <Text style={styles.hashtag}>#eiusmod</Text>{" "}
        <Text style={styles.hashtag}>#tempor</Text>
      </Text>

      <Text style={styles.comment}><Text style={styles.username}>john_doe:</Text> Muito bom!</Text>
      <Text style={styles.comment}><Text style={styles.username}>jane.smith:</Text> Parabéns 👏</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ccc",
    marginRight: 8,
  },
  username: {
    fontWeight: "bold",
  },
  location: {
    fontSize: 12,
    color: "#888",
  },
  postImage: {
    width: "100%",
    height: 300,
    backgroundColor: "#ddd",
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    marginBottom: 5,
  },
  likes: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    marginBottom: 10,
  },
  hashtag: {
    color: "#2a7fff",
  },
  comment: {
    marginTop: 5,
  },
});
