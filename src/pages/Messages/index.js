import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/MessageStyles';

const conversations = [
  {
    id: '1',
    name: 'João Silva',
    lastMessage: 'Pode deixar, te mando o orçamento já!',
    unreadCount: 2,
    avatar: 'https://randomuser.me/api/portraits/men/31.jpg'
  },
  {
    id: '2',
    name: 'Carla Souza',
    lastMessage: 'Fechamos então para sexta!',
    unreadCount: 1,
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg'
  },
  {
    id: '3',
    name: 'Eduardo Lima',
    lastMessage: 'Valeu mesmo pela força!',
    unreadCount: 0,
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg'
  },
  {
    id: '4',
    name: 'Fernanda Torres',
    lastMessage: 'Já tô a caminho!',
    unreadCount: 3,
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
  },
];

export default function Messages() {
  const navigation = useNavigation();

  const handlePressChat = (userName) => {
    navigation.navigate('Chat', {
      userName: 'Carla Souza',
      userImage: 'https://randomuser.me/api/portraits/women/44.jpg'
    });
    
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePressChat(item.name)}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          {item.unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
        <Text style={styles.message} numberOfLines={1}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={conversations}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
