import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


export default function EnsinoMedioIntegradoScreen() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Image style={estilos.logo} source={{ uri: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/87/2024/05/etec_barra_bonita.png' }} />
            <Text style={estilos.title}>Ensino Integrado</Text>
            <Text style={estilos.title}>Ensino Médio com Habilitação Profissional de Técnico em Informática para Internet (Período Integral)</Text>
            <Text style={estilos.text}>O Ensino Médio Integrado ao Técnico, além de abranger as disciplinas regulares da última etapa do ensino básico, as integra ao ensino técnico, em nossa escola, ao curso de Informática para Internet, visando também a formação profissional do aluno, que é responsável por desenvolver programas de computador para internet seguindo as especificações e paradigmas da lógica e das linguagens de programação, identifica e usa fontes e documentos específicos para a obtenção das informações desejadas. Além disso, o estudante aprenderá um pouco de design com o objetivo de tornar a página mais agradável e fácil de ser utilizada. O aluno aprenderá ainda como criar e alterar bancos de dados que vão alimentar os sites. Noções de marketing digital para a web e de empreendedorismo também serão ensinadas ao longo do curso.

                Ao longo do curso serão elaborados projetos interdisciplinares entre as disciplinas do Ensino Médio e Técnico, trabalhos que são apresentados anualmente em eventos internos e/ou abertos à comunidade com salas interativas e aulas experimentais.
                Para a divulgação do curso promove-se no segundo semestre o evento “Etec de Portas Abertas”. Também aberto à comunidade, a equipe gestora, pedagógica e docente apresentam as instalações da escola, as disciplinas e as respectivas habilidades e competências contempladas no plano docente.

                Para recepcionar os novos alunos e integrar a comunidade escolar, a escola conta com o evento “Integra Etec”, com diversas apresentações artísticas, entre as quais grupos de danças, paródias, dublagens, apresentações musicais, vídeos, entre outras. O evento valoriza a expressão e a arte como instrumentos de desenvolvimento das habilidades perceptivas e da capacidade reflexiva na formação de uma consciência crítica do aluno, além de proporcionar um ambiente agradável e respeitoso.

                No último ano, o responsável pelo componente curricular TCC cria oportunidades para que os alunos construam e apresentem um produto final – Trabalho de Conclusão de Curso – TCC. Este se constitui por uma pesquisa que, somada à pesquisa bibliográfica, dará o embasamento prático e teórico necessário para o desenvolvimento do trabalho. A escola adota como proposta a criação de sites.</Text>

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
