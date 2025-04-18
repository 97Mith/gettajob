import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/FeedStyles';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import moment from 'moment';
import 'moment/locale/pt-br'; // se quiser em português
moment.locale('pt-br');

const postsData = [
  {
    id: '1',
    type: 'requisition',
    user: {
      name: 'serginho.mecânico',
      avatar: 'https://i.pravatar.cc/100?img=1',
    },
    image: 'https://i.imgur.com/fakeImage1.jpg',
    likes: 5,
    comments: 1,
    caption: 'Preciso de ajuda urgente!',
    liked: false,
    timestamp: '2025-04-18T12:10:00',
    requisition: {
      tag: 'Mecânico',
      description: 'Consertar amortecedor\nHonda CIVIC 2006',
      price: 500,
    },
  },
  {
    id: '2',
    user: {
      name: 'maria.zilberto',
      avatar: 'https://i.pravatar.cc/100?img=2',
    },
    image: 'https://i.imgur.com/fakeImage2.jpg',
    likes: 9,
    comments: 11,
    caption: 'Agradeço a Deus por tudoooo ❤️',
    liked: false,
    timestamp: '2025-04-18T12:10:00',
  },
  {
    id: '3',
    user: {
      name: 'japa.enfermeira',
      avatar: 'https://i.pravatar.cc/100?img=3',
    },
    image: 'https://i.imgur.com/fakeImage3.jpg',
    likes: 9,
    comments: 11,
    caption: 'Hoje é dia de pintura e conserto! ✨🛠️',
    liked: false,
    timestamp: '2025-04-18T12:10:00',
  },
  {
    id: '4',
    user: {
      name: 'serginho.mecânico',
      avatar: 'https://i.pravatar.cc/100?img=1',
    },
    image: 'https://i.imgur.com/fakeImage1.jpg',
    likes: 5,
    comments: 1,
    caption: 'Mais uma graças a Deus!!!!',
    liked: false,
    timestamp: '2025-04-18T12:10:00',
  },
  {
  id: '5',
    user: {
      name: 'japa.enfermeira',
      avatar: 'https://i.pravatar.cc/100?img=3',
    },
    image: 'https://i.imgur.com/fakeImage3.jpg',
    likes: 9,
    comments: 11,
    caption: 'Hoje é dia de pintura e conserto! ✨🛠️',
    liked: false,
    timestamp: '2025-04-18T12:10:00',
  },
  
];

export default function Feed() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState(postsData);

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const isLiked = post.liked;
        return {
          ...post,
          liked: !isLiked,
          likes: isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const renderItem = ({ item }) => {
    const handlePress = () => {
      if (item.type === 'requisition') {
        navigation.navigate('PostReq', { requisition: item.requisition });
      }
    };
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.postContainer}>
        <View style={styles.userInfo}>
          <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('OthersProfile')}>
              <Text style={styles.username}>{item.user.name}</Text>
            </TouchableOpacity>
            <Text style={styles.postTime}>
              {moment(item.timestamp).fromNow()} {/* Exemplo: "há 2 horas" */}
            </Text>
          </View>
        </View>


          
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.image }} style={styles.postImage} />
            
            {item.type === 'requisition' && item.requisition && (
              <View style={styles.overlay}>
                <Text style={styles.overlayText}>🔧 {item.requisition.tag}</Text>
                <Text style={styles.overlayText}>💰 R$ {item.requisition.price.toFixed(2)}</Text>
                <Text style={styles.overlayText}>📋 {item.requisition.description}</Text>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <TouchableOpacity
                    style={{ backgroundColor: '#4CAF50', padding: 8, borderRadius: 6, marginRight: 10 }}
                    onPress={() => console.log('Inscrever-se no serviço')}
                  >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Inscrever-se</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ backgroundColor: '#2196F3', padding: 8, borderRadius: 6 }}
                    onPress={() => console.log('Compartilhar')}
                  >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Compartilhar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

          </View>
  
          <View style={styles.postFooter}>
            <TouchableOpacity onPress={() => handleLike(item.id)}>
              <Text style={styles.likes}>{item.liked ? '❤️' : '🤍'} {item.likes} curtidas</Text>
            </TouchableOpacity>
            <Text style={styles.comments}>💬 {item.comments} comentários</Text>
          </View>
          <Text style={styles.caption}>{item.caption}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}