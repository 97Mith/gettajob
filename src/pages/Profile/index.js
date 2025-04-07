import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Calendar, LocaleConfig } from "react-native-calendars";
import styles from "../../styles/ProfileStyles";

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ],
  dayNames: [
    'Domingo', 'Segunda', 'Terça', 'Quarta',
    'Quinta', 'Sexta', 'Sábado'
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

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

const CalendarTab = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.tabContent}>
      <Calendar
        onDayPress={day => setSelected(day.dateString)}
        markedDates={{
          [selected]: { selected: true, selectedColor: '#8B008B' },
          '2025-04-10': { marked: true, dotColor: 'green' },
          '2025-04-15': { marked: true, dotColor: 'red' }
        }}
        theme={{
          selectedDayBackgroundColor: '#8B008B',
          todayTextColor: '#8B008B',
          arrowColor: '#8B008B'
        }}
      />
      {selected !== '' && (
        <Text style={{ marginTop: 10 }}>Selecionado: {selected}</Text>
      )}
    </View>
  );
};