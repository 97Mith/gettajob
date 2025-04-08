import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/FeedStyles';

const postsData = [
  {
    id: '1',
    user: {
      name: 'serginho.mecânico',
      avatar: 'https://i.pravatar.cc/100?img=1',
    },
    image: 'https://i.imgur.com/fakeImage1.jpg',
    likes: 5,
    comments: 1,
    caption: 'Conserto por baixo, porque é onde nascem os problemas!',
    liked: false,
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

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.userInfo}>
        <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{item.user.name}</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <View style={styles.postFooter}>
        <TouchableOpacity onPress={() => handleLike(item.id)}>
          <Text style={styles.likes}>{item.liked ? '❤️' : '🤍'} {item.likes} curtidas</Text>
        </TouchableOpacity>
        <Text style={styles.comments}>💬 {item.comments} comentários</Text>
      </View>
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );

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