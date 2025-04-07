import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import InputField from "../components/InputField";
import styles from "../styles/loginStyles"; // Reutilizando os estilos do login

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    Alert.alert(
      "Verifique seu e-mail",
      "Se um e-mail válido foi inserido, um link de recuperação será enviado."
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>

      <Text style={[styles.socialText, { textAlign: "center" }]}>
        Digite seu e-mail cadastrado para receber um link de redefinição de senha.
      </Text>

      <InputField
        icon="envelope"
        placeholder="E-mail"
        secureTextEntry={false}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={[styles.forgotPassword, styles.link]}>Voltar ao Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
