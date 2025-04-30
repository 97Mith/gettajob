import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db, storage } from '../../firebaseConnection';
import uuid from 'react-native-uuid';

export default function FullImage({ route, navigation }) {
  const [currentImage, setCurrentImage] = useState(route.params.imageUri);



  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permissão necessária", "Você precisa permitir acesso à galeria.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const newUri = result.assets[0].uri;
      setCurrentImage(newUri); // Mostra a imagem local antes de subir

      try {
        const downloadUrl = await uploadImageToFirebase(newUri);
        await updateProfilePictureInFirestore(downloadUrl);
        setCurrentImage(downloadUrl); // Atualiza com a URL real da imagem
        Alert.alert("Sucesso", "Imagem de perfil atualizada.");
      } catch (err) {
        console.error(err);
        Alert.alert("Erro", "Não foi possível atualizar a imagem.");
      }
    }
  };

  const uploadImageToFirebase = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(new TypeError('Erro ao buscar imagem'));
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error('Usuário não autenticado');

    const imageRef = ref(storage, `profilePictures/${userId}/${uuid.v4()}.jpg`);
    await uploadBytes(imageRef, blob);
    blob.close();

    return await getDownloadURL(imageRef);
  };

  const updateProfilePictureInFirestore = async (url) => {
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error('Usuário não autenticado');

    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, { profilePicture: url });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="close" size={30} color="#fff" />
      </TouchableOpacity>

      <Image source={{ uri: currentImage }} style={styles.fullImage} resizeMode="contain" />

      <TouchableOpacity style={styles.editButton} onPress={pickImage}>
        <MaterialIcons name="photo-library" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
  },
  editButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#444',
    padding: 12,
    borderRadius: 30,
    zIndex: 10,
  },
});
