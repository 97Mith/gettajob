import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../pages/Feed';
import Messages from '../pages/Messages';
import Posts from '../pages/Posts';
import Profile from '../pages/Profile';
import Search from '../pages/Search';

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return(
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiceTintColor: '##FFF',
          tabBarStyle:{
            backgroundColor: '#202225'
          }
        }}
      >
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
  )

}