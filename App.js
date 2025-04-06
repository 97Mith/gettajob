import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from './src/pages/Feed';
import Messages from './src/pages/Messages';
import Posts from './src/pages/Posts';
import Profile from './src/pages/Profile';
import Search from './src/pages/Search';

import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({color , size}) => {
              return <Feather name="file" color={color} size={size}/>
            }
          }}    
          />

        <Tab.Screen
          name="Pesquisar"
          component={Search}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Feather name="search" color={color} size={size}/>
            }
          }}
          />
        
        <Tab.Screen
          name="Postar"
          component={Posts}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Feather name="plus-circle" color={color} size={size}/>
            }
          }}
          />

        <Tab.Screen
          name="Mensagens"
          component={Messages}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Feather name="message-square" color={color} size={size}/>
            }
          }}
          />

        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Feather name="user" color={color} size={size}/>
            }
          }}
          />

      </Tab.Navigator>
    </NavigationContainer>
  )

}