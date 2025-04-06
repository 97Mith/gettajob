import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Posts(){
    const navigation = useNavigation();

    return(
        <View>
            <Text> Posts </Text>
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