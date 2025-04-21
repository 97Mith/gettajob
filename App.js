import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/stackRoutes';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import "react-native-gesture-handler";

export default function App(){
  
  return(
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: '#333'
    }}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </SafeAreaView>
  )
}
