import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../components/InputField";
import styles from "../../styles/signUpStyles";
import { Picker } from "@react-native-picker/picker";
import { db } from "../../firebaseConnection";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConnection";


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

  const [fullName, setFullName] = useState("");
  const [nickName, setNickName] = useState("");
  const [location, setLocation] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [service1, setService1] = useState("-");
  const [service2, setService2] = useState("-");
  const [service3, setService3] = useState("-");

  const validateFields = () => {
    
    if (!fullName || !nickName || !cpfCnpj || !email || !password || !confirmPassword) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return false;
    }

    if (fullName.length < 3 || fullName.length > 50) {
      Alert.alert("Erro", "O nome deve ter entre 3 e 50 caracteres.");
      return false;
    }

    if (nickName.length < 3 || nickName.length > 30) {
      Alert.alert("Erro", "O nickname deve ter entre 3 e 30 caracteres.");
      return false;
    }

    if (cpfCnpj.length < 11 || cpfCnpj.length > 18) {
      Alert.alert("Erro", "CPF/CNPJ inválido.");
      return false;
    }

    if (!email.includes("@") || email.length > 60) {
      Alert.alert("Erro", "E-mail inválido.");
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return false;
    }

    if (password.length < 6 || password.length > 20) {
      Alert.alert("Erro", "A senha deve ter entre 6 e 20 caracteres.");
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateFields()) return;
  
    try {
      // Verifica se nickname já está em uso
      const usersRef = collection(db, "users");
      const nickQuery = query(usersRef, where("nickName", "==", nickName));
      const nickSnapshot = await getDocs(nickQuery);
  
      if (!nickSnapshot.empty) {
        Alert.alert("Erro", "Nickname já está em uso.");
        return;
      }
  
      // Cria usuário com Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { uid } = userCredential.user;
  
      // Salva dados adicionais no Firestore, usando o UID
      await addDoc(usersRef, {
        uid, // opcional: salva também no doc
        nomeCompleto: fullName,
        nickName,
        cpfCnpj,
        email,
        phoneNumber,
        location,
        jobs: [service1, service2, service3].filter((s) => s !== "-"),
        profilePicture: "",
        professions: [],
        posts: [],
        connectionsList: [],
        comentaries: [],
        servicePosts: [],
        starsAverage: 0,
        daysFree: [],
        chats: [],
        feed: {
          postsUser: [],
          servicePostsUser: [],
        },
        notifications: []
      });
  
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.goBack();
  
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Erro", "E-mail já cadastrado.");
      } else {
        Alert.alert("Erro", "Houve um problema ao cadastrar o usuário.");
      }
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Cadastro</Text>

      <InputField 
        icon="user" 
        placeholder="Nome Completo *" 
        value={fullName} 
        onChangeText={setFullName} 
      />
      
      <InputField 
        icon="id-badge" 
        placeholder="Nick Name *" 
        value={nickName} 
        onChangeText={setNickName} 
      />
      
      <InputField 
        icon="map-marker" 
        placeholder="Localização" 
        value={location} 
        onChangeText={setLocation} 
      />
      
      
      <InputField 
        icon="id-card" 
        placeholder="CPF/CNPJ *" 
        value={cpfCnpj} 
        onChangeText={setCpfCnpj} 
        maskType="cpf" options={{}}
      />
      
      <InputField 
        icon="envelope" 
        placeholder="E-mail *" 
        value={email} 
        onChangeText={setEmail} 
      />

      <InputField
          icon="phone"
          placeholder="Contato"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maskType="cel-phone"
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) "
          }}
        />
      <InputField 
        icon="lock" 
        placeholder="Senha *" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />

      <InputField 
        icon="lock" 
        placeholder="Confirmar Senha *" 
        secureTextEntry 
        value={confirmPassword} 
        onChangeText={setConfirmPassword} 
      />

      {[service1, service2, service3].map((service, index) => (
        <View key={index} style={styles.pickerContainer}>
          <Text style={styles.label}>Serviço {index + 1}</Text>
          <Picker
            selectedValue={index === 0 ? service1 : index === 1 ? service2 : service3}
            onValueChange={(value) => {
              if (index === 0) setService1(value);
              else if (index === 1) setService2(value);
              else setService3(value);
            }}
            style={styles.picker}
            dropdownIconColor="#fff"
          >
            {professions.map((prof, i) => (
              <Picker.Item key={i} label={prof} value={prof} />
            ))}
          </Picker>
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
