import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Messages(){
    const navigation = useNavigation();

    return(
        <View>
            <Text> entrar </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems: 'center'
    }
})