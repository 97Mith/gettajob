import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const feedbacks = [
  {
    id: "1",
    service: "Serviço de Instalação de Chuveiro",
    provider: "serjo.mecanica",
    status: "Em andamento...",
    rating: 0,
    comment: "",
  },
  {
    id: "2",
    service: "Serviço de forramento",
    provider: "serjo.mecanica",
    status: "Concluído ontem às 20:21",
    rating: 5,
    comment: "",
  },
  {
    id: "3",
    service: "Serviço de pintura domiciliar",
    provider: "melissa.nurse",
    status: "Concluído 29/03 às 10:55",
    rating: 5,
    comment: "",
  },
  {
    id: "4",
    service: "Serviço de Troca de pneu",
    provider: "melissa.nurse",
    status: "Concluído 28/03 às 12:05",
    rating: 5,
    comment: "Solicitado o serviço, concluiu rápido, muito atencioso recomendo este profissional!",
  },
];

export default function FeedbackTab() {
  const [expandedId, setExpandedId] = useState(null);

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i <= count ? "star" : "star-o"}
          color="#FFD700"
          size={16}
          style={{ marginRight: 2 }}
        />
      );
    }
    return <View style={{ flexDirection: "row", marginVertical: 4 }}>{stars}</View>;
  };

  const FeedbackItem = ({ item }) => {
    const isExpanded = item.id === expandedId;

    return (
      <TouchableOpacity
        onPress={() => setExpandedId(isExpanded ? null : item.id)}
        style={styles.card}
      >
        <Text style={styles.serviceTitle}>{item.service}</Text>
        {renderStars(item.rating)}
        <Text style={styles.providerName}>{item.provider}</Text>
        <Text style={styles.status}>{item.status}</Text>
        {isExpanded && item.comment !== "" && (
          <Text style={styles.comment}>{item.comment}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={feedbacks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeedbackItem item={item} />}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4e4e4e",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  providerName: {
    color: "#ccc",
    fontSize: 14,
  },
  status: {
    color: "#90ee90",
    fontSize: 13,
    marginTop: 4,
  },
  comment: {
    color: "#eee",
    fontSize: 14,
    marginTop: 8,
  },
});