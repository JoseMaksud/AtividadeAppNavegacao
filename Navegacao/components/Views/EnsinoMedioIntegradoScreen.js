import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


export default function EnsinoMedioIntegradoScreen() {
    return (
        <ScrollView style={{ flex: 1 }}>
           <Image style={estilos.logo} source={{ uri: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/87/2024/05/etec_barra_bonita.png' }} />
        <Text>Ensino Médio Integrado</Text>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    logo: {
      width: "80%",
      margin: 30,
      height: 200,
      resizeMode: "contain",
    }
})