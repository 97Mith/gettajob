import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../components/InputField";
import SocialButton from "../../components/SocialButton";
import styles from "../../styles/loginStyles";
import RememberMeCheck from "../../components/RememberMeCheckBox";

export default function Login() {
  const navigation = useNavigation();
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo com fade-in */}
      <Animated.Image
        source={require("../../../assets/icon.png")}
        style={[styles.logo, { opacity: logoOpacity }]}
      />

      <InputField icon="user" placeholder="Usuário" />
      <InputField icon="lock" placeholder="Senha" secureTextEntry />
      <RememberMeCheck />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.socialText}>Entrar com</Text>

      <View style={styles.socialButtons}>
        <SocialButton imageSource={require("../../assets/google.png")} onPress={() => navigation.navigate("Home")} />
        <SocialButton imageSource={require("../../assets/facebook.png")} onPress={() => navigation.navigate("Home")} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>
          Esqueceu a Senha? <Text style={styles.link}>Clique aqui</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
