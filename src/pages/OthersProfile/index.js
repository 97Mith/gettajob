import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Calendar, LocaleConfig } from "react-native-calendars";
import styles from "../../styles/ProfileStyles";
import FeedbackTab from "../Feedbacks";
import GalleryTab from "../Gallery";
import { useNavigation } from "@react-navigation/native";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt-br";

export default function OthersProfile() {
  const [activeTab, setActiveTab] = useState("gallery");
  const navigation = useNavigation();
  const renderContent = () => {
    if (activeTab === "gallery") return <GalleryTab />;
    if (activeTab === "feedbacks") return <FeedbackTab />;
    if (activeTab === "calendar") return <CalendarTab />;
    return null;
  };

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={[{ key: "content" }]}
        renderItem={() => (
          <>
            <View style={styles.profileInfo}>
            <TouchableOpacity onPress={() => navigation.navigate("FullImage", { imageUri: Image.resolveAssetSource(require("../../assets/imgPerfil2.png")).uri })}>
              <Image
                source={require("../../assets/imgPerfil2.png")}
                style={styles.avatar}
              />
            </TouchableOpacity>
              <Text style={styles.nickname}>Carinha da Conseição</Text>
              <View style={{ flexDirection: 'row', gap: 6 }}>
                <Text style={styles.stats}>17 posts | 144 serviços |</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Connections")}>
                  <Text style={[styles.stats, { textDecorationLine: 'underline', color: '#c800ff' }]}>
                    6 conexões
                  </Text>
                </TouchableOpacity>
              </View>
              

              <View style={styles.tagsContainer}>
                <Text style={styles.tag}>🔧 Carpinteiro</Text>
                <Text style={styles.tag}>🔌 Eletricista</Text>
              </View>

              <Text style={styles.location}>📍 Curitiba (PR)</Text>

              <View style={styles.starsContainer}>
                <FontAwesome name="star" color="#FFD700" size={16} />
                <FontAwesome name="star" color="#FFD700" size={16} />
                <FontAwesome name="star" color="#FFD700" size={16} />
                <FontAwesome name="star" color="#FFD700" size={16} />
                <FontAwesome name="star-half" color="#FFD700" size={16} />
                <Text style={styles.ratingText}>4.7</Text>
              </View>

              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text>Mensagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>Compartilhar Perfil</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.tabSelector}>
              <TouchableOpacity
                onPress={() => setActiveTab("gallery")}
                style={
                  activeTab === "gallery"
                    ? styles.activeTab
                    : styles.inactiveTab
                }
              >
                <FontAwesome name="image" size={24} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setActiveTab("feedbacks")}
                style={
                  activeTab === "feedbacks"
                    ? styles.activeTab
                    : styles.inactiveTab
                }
              >
                <FontAwesome name="gavel" size={24} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab("calendar")}
                style={
                  activeTab === "calendar"
                    ? styles.activeTab
                    : styles.inactiveTab
                }
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
}

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
