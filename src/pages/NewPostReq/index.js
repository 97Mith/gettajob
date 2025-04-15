import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/NewPostReqStyles";

const professions = [
  "Carpinteiro", "Pintor", "Barbeiro", "Pedreiro", "Eletricista", "Encanador", "Mecânico",
  "Jardineiro", "Marceneiro", "Serralheiro", "Vidraceiro", "Bombeiro Hidráulico", "Gesseiro",
  "Montador de Móveis", "Reparador de Computadores", "Cozinheiro", "Garçom", "Balconista",
  "Cabelereiro", "Manicure", "Depilador", "Costureiro", "Borracheiro", "Chaveiro",
  "Fotógrafo", "Videomaker", "Personal Trainer", "Professor Particular", "Babá",
  "Cuidadores de Idosos", "Motorista Particular", "Diarista", "Lavador de Carros",
  "Entregador", "Tatuador", "Soldador", "Ferreiro", "Técnico em Eletrônica",
  "Segurança Particular", "DJ", "Músico", "Instrutor de Dança", "Professor de Idiomas",
  "Design Gráfico", "Programador", "Analista de Sistemas", "Redator", "Revisor Textual",
  "Tradutor", "Consultor Financeiro"
];

export default function NewPostReq() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [selectedProfession, setSelectedProfession] = useState("");

  const handleSubmit = () => {
    if (!title || !description || !value || !selectedProfession) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    // Aqui você pode salvar os dados no banco ou API
    Alert.alert("Sucesso", "Postagem criada com sucesso!");
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Ex: Preciso de um eletricista urgente"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
        placeholder="Descreva o serviço necessário..."
        multiline
      />

      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Ex: 150"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Profissão desejada</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedProfession}
          onValueChange={(itemValue) => setSelectedProfession(itemValue)}
        >
          <Picker.Item label="Selecione uma profissão" value="" />
          {professions.map((prof, index) => (
            <Picker.Item key={index} label={prof} value={prof} />
          ))}
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Ok</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
