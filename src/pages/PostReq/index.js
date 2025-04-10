import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function PostReq({ route }) {
  const { requisition } = route.params;
  const navigation = useNavigation();

  const getIconForTag = (tag) => {
    switch (tag.toLowerCase()) {
      case 'mecânico':
        return <FontAwesome5 name="tools" size={20} color="#000" />;
      case 'eletricista':
        return <FontAwesome5 name="bolt" size={20} color="#000" />;
      case 'encanador':
        return <FontAwesome5 name="water" size={20} color="#000" />;
      default:
        return <FontAwesome5 name="briefcase" size={20} color="#000" />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Requisição de serviço</Text>

      <View style={styles.tagContainer}>
        {getIconForTag(requisition.tag)}
        <Text style={styles.tag}>  {requisition.tag}</Text>
      </View>

      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.description}>{requisition.description}</Text>

      <Text style={styles.label}>Valor:</Text>
      <Text style={styles.price}>R$ {requisition.price.toFixed(2)}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Inscrever-se no serviço</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Compartilhar serviço</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eee',
  },
  backButton: {
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tagContainer: {
    flexDirection: 'row',
    backgroundColor: '#6ddce8',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 15,
    alignItems: 'center',
  },
  tag: {
    fontWeight: 'bold',
    color: '#000',
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
  },
  description: {
    marginBottom: 10,
  },
  price: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#d5f169',
    padding: 10,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
  },
});
