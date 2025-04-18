import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../components/InputField";
import styles from "../../styles/signUpStyles";
import { Picker } from "@react-native-picker/picker";

const professions = [
  "-", "Carpinteiro", "Pintor", "Barbeiro", "Pedreiro", "Eletricista", "Encanador", "Mecânico",
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

export default function SignUp() {
  const navigation = useNavigation();

  const [service1, setService1] = useState("-");
  const [service2, setService2] = useState("-");
  const [service3, setService3] = useState("-");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    // Aqui você pode adicionar a lógica de cadastro
    Alert.alert("Cadastro realizado com sucesso!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Cadastro</Text>

      <InputField icon="user" placeholder="Nome Completo *" />
      <InputField icon="id-badge" placeholder="Nick Name *" />
      <InputField icon="map-marker" placeholder="Localização" />
      <InputField icon="id-card" placeholder="CPF/CNPJ *" />
      <InputField icon="envelope" placeholder="E-mail *" />
      <InputField icon="phone" placeholder="Contato" />

      {/* Senha */}
      <InputField
        icon="lock"
        placeholder="Senha *"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Confirmação de Senha */}
      <InputField
        icon="lock"
        placeholder="Confirmar Senha *"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Serviço 1 */}
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Serviço 1</Text>
        <Picker
          selectedValue={service1}
          onValueChange={setService1}
          style={styles.picker}
          dropdownIconColor="#fff"
        >
          {professions.map((prof, index) => (
            <Picker.Item key={index} label={prof} value={prof} />
          ))}
        </Picker>
      </View>

      {/* Serviço 2 */}
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Serviço 2</Text>
        <Picker
          selectedValue={service2}
          onValueChange={setService2}
          style={styles.picker}
          dropdownIconColor="#fff"
        >
          {professions.map((prof, index) => (
            <Picker.Item key={index} label={prof} value={prof} />
          ))}
        </Picker>
      </View>

      {/* Serviço 3 */}
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Serviço 3</Text>
        <Picker
          selectedValue={service3}
          onValueChange={setService3}
          style={styles.picker}
          dropdownIconColor="#fff"
        >
          {professions.map((prof, index) => (
            <Picker.Item key={index} label={prof} value={prof} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
