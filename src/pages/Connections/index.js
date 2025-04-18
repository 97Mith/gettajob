import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/connectionStyles';

const initialConnections = [
  {
    id: '1',
    nickname: 'mestrePedro',
    profession: 'Eletricista',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    nickname: 'tattooQueen',
    profession: 'Tatuador',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    nickname: 'cozinhaTop',
    profession: 'Cozinheiro',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

export default function Connections() {
  const [connections, setConnections] = useState(initialConnections);

  const handleRemove = (id) => {
    setConnections(prev => prev.filter(conn => conn.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.nickname}>{item.nickname}</Text>
        <Text style={styles.profession}>{item.profession}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(item.id)}>
        <Text style={styles.removeText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Conexões</Text>
      <FlatList
        data={connections}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
