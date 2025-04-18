import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/postReqStyles";

export default function PostReq() {
  const navigation = useNavigation();

  const handleSubscribe = () => {
    navigation.navigate("Chat", {
      userName: "joao_trabalhador",
      userImage: "https://randomuser.me/api/portraits/men/32.jpg",
      initialMessage: "Olá, gostaria de me inscrever para o serviço!",
    });
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho do usuário */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>@joao_trabalhador</Text>
      </View>

      <Text style={styles.title}>Preciso de um Pintor!</Text>
      <Text style={styles.tag}>#Pintor</Text>
      <Text style={styles.description}>
        Procuro pintor para pintar um apartamento de 3 quartos. Forneço o material. 
        Preferência para este fim de semana.
      </Text>
      <Text style={styles.price}>R$ 700,00</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareText}>Compartilhar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribe}>
          <Text style={styles.subscribeText}>Inscrever-se no serviço</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
