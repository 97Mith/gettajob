import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../components/InputField";
import SocialButton from "../../components/SocialButton";
import RememberMeCheck from "../../components/RememberMeCheckBox";
import styles from "../../styles/loginStyles";
import { auth, db } from "../../firebaseConnection";
import { collection, query, where, getDocs } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
  const navigation = useNavigation();
  const logoOpacity = useRef(new Animated.Value(0)).current;

  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = async () => {
    if (!email || !passWord) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }
  
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const snapshot = await getDocs(q);
  
      if (!snapshot.empty) {
        const userDoc = snapshot.docs[0];
        const userEmail = userDoc.data().email;
  
        // Agora faz login real com Firebase Auth
        await signInWithEmailAndPassword(auth, userEmail, passWord);
        navigation.navigate("Home");
      } else {
        Alert.alert("Erro", "Usuário não encontrado");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      Alert.alert("Erro", "Não foi possível fazer login");
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../../assets/icon.png")}
        style={[styles.logo, { opacity: logoOpacity }]}
      />

      <InputField
        icon="user"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <InputField
        icon="lock"
        placeholder="Senha"
        secureTextEntry
        value={passWord}
        onChangeText={setPassWord}
      />

      <RememberMeCheck />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
        <SocialButton
          imageSource={require("../../assets/google.png")}
          onPress={() => navigation.navigate("Home")}
        />
        <SocialButton
          imageSource={require("../../assets/facebook.png")}
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>
          Esqueceu a Senha? <Text style={styles.link}>Clique aqui</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
