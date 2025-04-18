import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../pages/Feed';
import Messages from '../pages/Messages';
import NewPost from '../pages/NewPost';
import Profile from '../pages/Profile';
import Search from '../pages/Search';

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return(
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiceTintColor: '##FFF',
          tabBarStyle:{
            backgroundColor: '#202225'
          }
        }}
      >
        <Tab.Screen
          name="Getta Job"
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
            headerShown: false,
            tabBarIcon: ({color, size}) => {
              return <Feather name="search" color={color} size={size}/>
            }
          }}
          />
        
        <Tab.Screen
          name="NewPost"
          component={NewPost}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => {
              return <Feather name="plus-circle" color={color} size={size}/>
            }
          }}
          />

        <Tab.Screen
          name="Mensagens"
          component={Messages}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => {
              return <Feather name="message-square" color={color} size={size}/>
            }
          }}
          />

        <Tab.Screen
          name="..."
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size=0}) => {
              return <Feather name="user" color={color} size={size}/>
            }
          }}
          />

      </Tab.Navigator>
  )

}