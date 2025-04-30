import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/SearchStyles';
import { Ionicons } from '@expo/vector-icons';
import { db } from "../../firebaseConnection";
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function Search() {
  const navigation = useNavigation();
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (queryText.trim() === '') {
      Alert.alert('Aviso', 'Digite algo para pesquisar!');
      return;
    }
  
    setLoading(true);
    setResults([]);
  
    try {
      const queryLower = queryText.toLowerCase();
      const resultsArray = [];
      const usersRef = collection(db, 'users');
      const allUsersSnapshot = await getDocs(usersRef);
  
      allUsersSnapshot.forEach(doc => {
        const data = doc.data();
        const nome = (data.nomeCompleto || '').toLowerCase();
        const nick = (data.nickName || '').toLowerCase();
        const jobs = (data.jobs || []).map(j => j.toLowerCase());
  
        const matchNome = nome.includes(queryLower);
        const matchNick = nick.includes(queryLower);
        const matchJob = jobs.some(job => job.includes(queryLower));
  
        if (matchNome || matchNick || matchJob) {
          resultsArray.push({ id: doc.id, ...data });
        }
      });
  
      if (resultsArray.length === 0) {
        Alert.alert('Aviso', 'Nenhum resultado encontrado!');
      }
  
      setResults(resultsArray);
    } catch (error) {
      console.error('Erro ao buscar:', error);
      Alert.alert('Erro', 'Não foi possível realizar a busca. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };
  

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('OthersProfile', { userId: item.id })} style={styles.card}>
      <Image source={{ uri: item.avatar || 'https://i.pravatar.cc/150' }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>
          {item.nomeCompleto} <Text style={styles.nickname}>({item.nickName})</Text>
        </Text>
        <Text style={styles.rating}>⭐ {item.rating ? item.rating.toFixed(1) : 'N/A'}</Text>
        {item.jobs && item.jobs.length > 0 && (
          <Text style={styles.jobs}>Serviços: {item.jobs.join(', ')}</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Pesquise por serviços</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite nome, nickname ou serviço..."
        value={queryText}
        onChangeText={setQueryText}
      />

      <Button title={loading ? 'Pesquisando...' : 'Pesquisar'} onPress={handleSearch} disabled={loading} />

      <FlatList
        data={results}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.resultList}
        ListEmptyComponent={
          !loading && results.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum resultado encontrado.</Text>
          ) : null
        }
      />
    </View>
  );
}
