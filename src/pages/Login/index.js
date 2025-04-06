import React from 'react';
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button
                title="Entrar"
                onPress={() => navigation.navigate('Home')} // Vai para a tabRoutes
            />

            <View style={{ marginTop: 10 }} />

            <Button
                title="Ir para Cadastro"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});