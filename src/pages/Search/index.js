import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/SearchStyles';
import { Ionicons } from '@expo/vector-icons'; // ou use outro pacote se necessário

const fakeResults = [
  { id: '1', name: 'João Eletricista', nickname: '@joao_eletro', rating: 4.5, avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Maria Babá', nickname: '@maria_cuida', rating: 4.8, avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: 'Carlos Pintor', nickname: '@carlos_pinta', rating: 4.2, avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'Lucia Cozinheira', nickname: '@lucia_chef', rating: 4.9, avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', name: 'Pedro Jardineiro', nickname: '@pedro_jardins', rating: 4.4, avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: '6', name: 'Ana Costureira', nickname: '@ana_costura', rating: 4.7, avatar: 'https://i.pravatar.cc/150?img=6' },
  { id: '7', name: 'Bruno Mecânico', nickname: '@bruno_meca', rating: 4.3, avatar: 'https://i.pravatar.cc/150?img=7' },
  { id: '8', name: 'Camila Pintora', nickname: '@camila_pint', rating: 4.6, avatar: 'https://i.pravatar.cc/150?img=8' },
  { id: '9', name: 'Diego Chaveiro', nickname: '@diego_keys', rating: 4.1, avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: '10', name: 'Elisa Professora', nickname: '@elisa_ensina', rating: 4.9, avatar: 'https://i.pravatar.cc/150?img=10' },
  { id: '11', name: 'Fernando Encanador', nickname: '@fernando_pipe', rating: 4.0, avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: '12', name: 'Gustavo Técnico', nickname: '@gustavo_tec', rating: 4.6, avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: '13', name: 'Helena Maquiadora', nickname: '@helena_make', rating: 4.8, avatar: 'https://i.pravatar.cc/150?img=13' },
  { id: '14', name: 'Igor Personal', nickname: '@igor_fit', rating: 4.7, avatar: 'https://i.pravatar.cc/150?img=14' },
  { id: '15', name: 'Juliana Massagista', nickname: '@juliana_relax', rating: 4.5, avatar: 'https://i.pravatar.cc/150?img=15' },
];

export default function Search() {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults(fakeResults);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.name} <Text style={styles.nickname}>{item.nickname}</Text></Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Pesquise por serviços</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Pesquisar" onPress={handleSearch} />

      <FlatList
        data={results}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.resultList}
      />
    </View>
  );
}
