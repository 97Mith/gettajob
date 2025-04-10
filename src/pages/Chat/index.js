import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from '../../styles/chatStyles';
import { Ionicons } from '@expo/vector-icons';

export default function Chat() {
  const route = useRoute();
  const navigation = useNavigation();
  const { userName, userImage } = route.params;

  const [messages, setMessages] = useState([
    { id: '1', from: 'them', text: 'Oii, tá disponível hoje??', timestamp: '14:05' },
    { id: '2', from: 'me', text: 'Hoje não 😕', timestamp: '14:07' },
  ]);

  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: userName,
      headerStyle: {
        backgroundColor: '#202225',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => (
        <Image
          source={{ uri: userImage }}
          style={{ width: 35, height: 35, borderRadius: 20, marginRight: 10 }}
        />
      ),
    });
  }, [navigation, userName]);

  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  const sendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = {
      id: String(messages.length + 1),
      from: 'me',
      text: input.trim(),
      timestamp: getCurrentTime(),
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.message,
        item.from === 'me' ? styles.myMessage : styles.theirMessage
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Ionicons name="send" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
