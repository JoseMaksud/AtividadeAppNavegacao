import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1}}>
            <Image style={estilos.logo} source={{ uri: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/87/2024/05/etec_barra_bonita.png' }} />
        </View>
    );
}

const estilos = StyleSheet.create({
  logo: {
    width: "100%",
    height: 200,
    resizeMode:  "contain",
    top: 0
  }
})
