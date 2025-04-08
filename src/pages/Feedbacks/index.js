import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const feedbacksData = [
  {
    id: 1,
    title: "Serviço de Instalação de Chuveiro",
    status: "Em andamento",
    rating: 0,
    user: "serjo.mecanica",
    avatar: require("../../assets/usuario1.png"),
    comment: ""
  },
  {
    id: 2,
    title: "Serviço de forramento",
    status: "Concluído ontem às 20:21",
    rating: 5,
    user: "serjo.mecanica",
    avatar: require("../../assets/usuario1.png"),
    comment: "O cara é fera demais!"
  },
  {
    id: 3,
    title: "Serviço de pintura domiciliar",
    status: "Concluído 29/03 às 10:55",
    rating: 5,
    user: "melissa.nurse",
    avatar: require("../../assets/usuario2.png"),
    comment: "-"
  },
  {
    id: 4,
    title: "Serviço de Troca de pneu",
    status: "Concluído 28/03 às 12:05",
    rating: 5,
    user: "melissa.nurse",
    avatar: require("../../assets/usuario2.png"),
    comment: "Solicitado o serviço, concluiu rápido, muito atencioso recomendo este profissional!"
  }
];

export default function FeedbacksTab() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      {feedbacksData.map((feedback) => {
        const isExpanded = feedback.id === expandedId;
        const isConcluded = feedback.status.toLowerCase().includes("concluído");
        const isInProgress = feedback.status.toLowerCase().includes("andamento");

        return (
          <TouchableOpacity
            key={feedback.id}
            style={[styles.card, isInProgress ? styles.inProgress : isConcluded ? styles.concluded : null]}
            onPress={() => toggleExpand(feedback.id)}
            activeOpacity={0.8}
          >
            <View style={styles.cardHeader}>
              <Image source={feedback.avatar} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{feedback.title}</Text>
                <View style={styles.starRow}>
                  {[...Array(5)].map((_, i) => (
                    <FontAwesome
                      key={i}
                      name={i < feedback.rating ? "star" : "star-o"}
                      size={14}
                      color="#FFD700"
                      style={{ marginRight: 2 }}
                    />
                  ))}
                </View>
                <Text style={styles.status}>{feedback.status}</Text>
              </View>
              {isConcluded && <FontAwesome name="check-circle" size={24} color="#4CAF50" />}
            </View>
            {isExpanded && feedback.comment && (
              <Text style={styles.comment}>{feedback.comment}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  status: {
    fontSize: 12,
    color: "#555",
  },
  comment: {
    marginTop: 8,
    fontStyle: "italic",
    color: "#333",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  starRow: {
    flexDirection: "row",
    marginVertical: 2,
  },
  inProgress: {
    backgroundColor: "#e0f7fa",
  },
  concluded: {
    backgroundColor: "#e8f5e9",
  },
});
