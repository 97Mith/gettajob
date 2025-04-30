import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/stackRoutes';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import "react-native-gesture-handler";

import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/firebaseConnection';

export default function App() {

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth)
          .then(() => console.log('Login anônimo realizado'))
          .catch((error) => console.error('Erro no login anônimo:', error));
      } else {
        console.log('Usuário autenticado:', user.uid);
      }
    });

    return () => unsubscribe(); // Limpa o listener ao desmontar
  }, []);

  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: '#333'
    }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
