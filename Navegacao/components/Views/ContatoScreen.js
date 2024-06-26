import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


export default function ContatoScreen() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Image style={estilos.logo} source={{ uri: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/87/2024/05/etec_barra_bonita.png' }} />
            <Text style={estilos.title}>Contato</Text>
            <Text style={estilos.title}>Localização</Text>
            <Text style={estilos.text}>Rua Ludovico Victório, 2140</Text>
            <Text style={estilos.text}>Vila Habitacional, Barra Bonita – SP, 17340-430</Text>
            <Text style={estilos.text}>(14) 3641-1310</Text>
            <Text style={estilos.text}>Diretoria – e040dir@cps.sp.gov.br</Text>
            <Text style={estilos.text}>Diretoria de Serviço Administrativa –  e040adm@cps.sp.gov.br</Text>
            <Text style={estilos.text}>Assessor Técnico Administrativo – e040ata@cps.sp.gov.br</Text>
            <Text style={estilos.text}>Diretoria de Serviço Acadêmica – e040acad@cps.sp.gov.br</Text>
            <Text style={estilos.text}>Coordenação Pedagógica – e040.pedagogico@etec.sp.gov.br</Text>
            <Text style={estilos.text}>Orientadora Educacional – e040.educacional@etec.sp.gov.br</Text>
            <Text style={estilos.text}>Tecnologia da Informação e Comunicação – e040ti@etec.sp.gov.br</Text>
            <View style={{ width: '100%', height: 50, backgroundColor: '#000000' }}>
                <Image style={estilos.footer} source={{ uri: 'https://etecbarrabonita.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/logo-rodape-governo-do-estado-sp.png' }} />
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    logo: {
        width: "80%",
        margin: 30,
        height: 200,
        resizeMode: "contain",
    },
    title: {
        color: "#005c6d",
        fontSize: 36,
        padding: 30,
    },
    text: {
        padding: 30,
        color: '#333333',
        fontSize: 16,
    },
    footer: {
        width: 206,
        height: 38,
        margin: 'auto',
        backgroundColor: '#000000'
    }
})
