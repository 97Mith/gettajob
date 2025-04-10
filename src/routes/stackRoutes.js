import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Routes from './index';
import Chat from '../pages/Chat';
import ForgotPassword from '../pages/ForgotPassword';
import PostReq from '../pages/PostReq';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />
            <Stack.Screen
                name="Home"
                component={Routes} 
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
            />
            <Stack.Screen 
                name="Chat" 
                component={Chat} 
            />
            <Stack.Screen 
                name="PostReq" 
                component={PostReq}
            />
        </Stack.Navigator>
    )
}
