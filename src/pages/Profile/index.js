import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.profileInfo}>
          <Image source={require("../../assets/imgPerfil.png")} style={styles.avatar} />
          <Text style={styles.nickname}>Nickname da Silva</Text>
          <Text style={styles.stats}>17 posts | 144 serviços | 34 conexões</Text>

          <View style={styles.tagsContainer}>
            <Text style={styles.tag}>🔧 Carpinteiro</Text>
            <Text style={styles.tag}>🔌 Eletricista</Text>
          </View>

          <Text style={styles.location}>📍 São José dos Pinhais</Text>

          <View style={styles.starsContainer}>
            <FontAwesome name="star" color="#FFD700" size={16} />
            <FontAwesome name="star" color="#FFD700" size={16} />
            <FontAwesome name="star" color="#FFD700" size={16} />
            <FontAwesome name="star" color="#FFD700" size={16} />
            <FontAwesome name="star-half" color="#FFD700" size={16} />
            <Text style={styles.ratingText}>4.7</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}><Text>Editar Perfil</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text>Compartilhar Perfil</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabSelector}>
          <TouchableOpacity onPress={() => setActiveTab("posts")} style={activeTab === "posts" ? styles.activeTab : styles.inactiveTab}>
            <FontAwesome name="file" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("services")} style={activeTab === "services" ? styles.activeTab : styles.inactiveTab}>
            <FontAwesome name="gavel" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("calendar")} style={activeTab === "calendar" ? styles.activeTab : styles.inactiveTab}>
            <FontAwesome name="calendar" size={24} />
          </TouchableOpacity>
        </View>

        {activeTab === "posts" && <PostsTab />}
        {activeTab === "services" && <ServicesTab />}
        {activeTab === "calendar" && <CalendarTab />}
      </ScrollView>
    </View>
  );
}

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.logo}>Getta Job</Text>
    <FontAwesome name="bars" size={24} color="black" />
  </View>
);

const PostsTab = () => (
  <View style={styles.tabContent}>
    <Text>Lista de fotos e publicações (em construção)</Text>
  </View>
);

const ServicesTab = () => (
  <View style={styles.tabContent}>
    <Text>Histórico de serviços e avaliações (em construção)</Text>
  </View>
);

const CalendarTab = () => (
  <View style={styles.tabContent}>
    <Text>Disponibilidade no calendário (em construção)</Text>
  </View>
);

const styles = StyleSheet.create({
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
