import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/stackRoutes';
import "react-native-gesture-handler";

export default function App(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}
