import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../../styles/connectionStyles';

const initialConnections = [
  { id: '1', nickname: 'mestrePedro', profession: 'Eletricista', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', nickname: 'tattooQueen', profession: 'Tatuador', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', nickname: 'cozinhaTop', profession: 'Cozinheiro', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', nickname: 'mariaArtesã', profession: 'Artesã', avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', nickname: 'pedroLuz', profession: 'Eletricista', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: '6', nickname: 'anaDesign', profession: 'Designer', avatar: 'https://i.pravatar.cc/150?img=6' },
];

export default function Connections() {
  const route = useRoute();
  const shareMode = route.params?.shareMode || false;

  const [connections, setConnections] = useState(initialConnections);
  const [selected, setSelected] = useState([]);

  const handleToggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else if (selected.length < 5) {
      setSelected([...selected, id]);
    } else {
      Alert.alert("Limite atingido", "Você só pode selecionar até 5 conexões.");
    }
  };

  const handleRemove = (id) => {
    setConnections(prev => prev.filter(conn => conn.id !== id));
  };

  const handleSend = () => {
    Alert.alert("Compartilhado!", `Serviço enviado para: ${selected.length} conexão(ões).`);
    // Aqui poderia haver integração real via API
  };

  const renderItem = ({ item }) => {
    const isSelected = selected.includes(item.id);

    return (
      <TouchableOpacity
        style={[styles.card, isSelected && styles.cardSelected]}
        onPress={() => shareMode ? handleToggleSelect(item.id) : null}
        activeOpacity={shareMode ? 0.7 : 1}
      >
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.nickname}>{item.nickname}</Text>
          <Text style={styles.profession}>{item.profession}</Text>
        </View>
        {!shareMode && (
          <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(item.id)}>
            <Text style={styles.removeText}>Remover</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{shareMode ? "Compartilhar com conexões" : "Minhas Conexões"}</Text>
      <FlatList
        data={connections}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      {shareMode && (
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendText}>Enviar ({selected.length}/5)</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
