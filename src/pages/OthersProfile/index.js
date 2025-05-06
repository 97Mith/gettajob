import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Calendar, LocaleConfig } from "react-native-calendars";
import styles from "../../styles/ProfileStyles";
import FeedbackTab from "../Feedbacks";
import GalleryTab from "../Gallery";
import { useNavigation, useRoute } from "@react-navigation/native";
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from '../../firebaseConnection';
import * as Notifications from 'expo-notifications';

LocaleConfig.locales["pt-br"] = {
  monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt-br";

export default function OthersProfile() {
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;
  
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("gallery");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.warn("Usuário não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleConnect = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        alert("Você precisa estar logado.");
        return;
      }

      const currentUserRef = doc(db, 'users', currentUser.uid);

      await updateDoc(currentUserRef, {
        connections: arrayUnion(userId)
      });

      if (userData?.expoPushToken) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Nova conexão!",
            body: "Alguém se conectou com você no Getta Job! 👥",
          },
          trigger: null,
          to: userData.expoPushToken,
        });
      }

      alert("Conectado com sucesso!");
    } catch (error) {
      console.error("Erro ao conectar:", error);
    }
  };

  const renderContent = () => {
    if (activeTab === "gallery") return <GalleryTab userId={userId} />;
    if (activeTab === "feedbacks") return <FeedbackTab userId={userId} />;
    if (activeTab === "calendar") return <CalendarTab />;
    return null;
  };

  if (!userData) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={[{ key: "content" }]}
        renderItem={() => (
          <>
            <View style={styles.profileInfo}>
              <TouchableOpacity onPress={() => navigation.navigate("FullImage", { imageUri: userData.profilePicture || "https://i.pravatar.cc/150" })}>
                <Image source={{ uri: userData.profilePicture || "https://i.pravatar.cc/150" }} style={styles.avatar} />
              </TouchableOpacity>

              <Text style={styles.nickname}>{userData.nomeCompleto} ({userData.nickName})</Text>
              <View style={{ flexDirection: 'row', gap: 6 }}>
                <Text style={styles.stats}>17 posts | 144 serviços |</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Connections", { userId })}>
                  <Text style={[styles.stats, { textDecorationLine: 'underline', color: '#c800ff' }]}>
                    {userData.connections?.length || 0} conexões
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.tagsContainer}>
                {userData.jobs?.map((job, index) => (
                  <Text key={index} style={styles.tag}>🔧 {job}</Text>
                ))}
              </View>

              <Text style={styles.location}>📍 {userData.city} ({userData.state})</Text>

              <View style={styles.starsContainer}>
                {[...Array(Math.floor(userData.rating || 0))].map((_, i) => (
                  <FontAwesome key={i} name="star" color="#FFD700" size={16} />
                ))}
                {(userData.rating % 1 !== 0) && (
                  <FontAwesome name="star-half" color="#FFD700" size={16} />
                )}
                <Text style={styles.ratingText}>{userData.rating?.toFixed(1) || "N/A"}</Text>
              </View>

              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text>Mensagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>Compartilhar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleConnect}>
                  <Text>Conectar-se</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.tabSelector}>
              <TouchableOpacity
                onPress={() => setActiveTab("gallery")}
                style={activeTab === "gallery" ? styles.activeTab : styles.inactiveTab}
              >
                <FontAwesome name="image" size={24} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setActiveTab("feedbacks")}
                style={activeTab === "feedbacks" ? styles.activeTab : styles.inactiveTab}
              >
                <FontAwesome name="gavel" size={24} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setActiveTab("calendar")}
                style={activeTab === "calendar" ? styles.activeTab : styles.inactiveTab}
              >
                <FontAwesome name="calendar" size={24} />
              </TouchableOpacity>
            </View>

            {renderContent()}
          </>
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Getta Job</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <FontAwesome name="bars" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const CalendarTab = () => {
  const [selected, setSelected] = useState("");

  return (
    <View style={styles.tabContent}>
      <Calendar
        onDayPress={(day) => setSelected(day.dateString)}
        markedDates={{
          [selected]: { selected: true, selectedColor: "#8B008B" },
          "2025-04-10": { marked: true, dotColor: "green" },
          "2025-04-15": { marked: true, dotColor: "red" },
        }}
        theme={{
          selectedDayBackgroundColor: "#FFF",
          todayTextColor: "#8B008B",
          arrowColor: "#8B008B",
        }}
      />
      {selected !== "" && (
        <Text style={{ marginTop: 10 }}>Selecionado: {selected}</Text>
      )}
    </View>
  );
};
