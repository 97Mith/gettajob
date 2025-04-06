import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
            />

            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />
        </Stack.Navigator>
    )
}