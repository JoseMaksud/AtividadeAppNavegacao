import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

export default function EnsinoMedioScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Image style={estilos.logo} source={{ uri: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/87/2024/05/etec_barra_bonita.png' }} />
      <Text style={estilos.title}>Ensino Médio</Text>
      <Text style={estilos.title}>Ensino Médio com Itinerário Formativo: Linguagens e suas Tecnologias</Text>
      <Text style={estilos.text}>A partir de 2021, nossa escola passa a oferecer o Ensino Médio com Itinerário Formativo. A resolução de 14/01/2020 do Conselho Estadual de Educação (SP) estabelece o início do “Novo” Ensino Médio. Trata-se de uma nova possibilidade de garantir o conjunto de aprendizagens essenciais a todos os estudantes, e, ir além, aprofundando os conhecimentos, habilidades e competências previstas na BNCC (Base Nacional Comum Curricular), por meio dos Itinerários Formativos (conjuntos de atividades que aprofundam áreas de conhecimento ou a formação técnica e profissional).

        Nesta nova concepção, a matriz curricular do Ensino Médio do Centro Paula Souza está dividida em dois eixos de trabalho, a Formação Geral Básica ligada diretamente às competências e habilidades da BNCC e o Itinerário Formativo, que consiste no estudo aprofundado por área de conhecimento das competências e habilidades específicas desse eixo de trabalho, também indicadas na BNCC.

        Agora, o Ensino Médio terá o seu currículo composto por 1.800 horas para a carga horária dedicada aos componentes da Formação Geral Básica e 1.200 horas para os componentes que compõem o eixo de trabalho do Itinerário Formativo, no nosso caso, a área de conhecimento Linguagens e suas Tecnologias, que é composto pelos seguintes Componentes Curriculares: Estudos Avançados (todos os anos); Laboratórios (1º Ano – Laboratório de Investigação Científica, 2º Ano – Laboratório de Processos Criativos e 3º Ano – Laboratório de Mediação e Intervenção Sociocultural) e Práticas de Empreendedorismo (todos os anos).

        O componente curricular “Estudos Avançados” é o principal elemento do Itinerário Formativo, seu objetivo é aprofundar as aprendizagens de saberes, competências e habilidades essenciais a cada área do conhecimento, tendo com subsídio para esta ação os Componentes Laboratório de Investigação Científica e Práticas de Empreendedorismo. Por isso, sua abordagem procedimental de ensino e aprendizagem ancora-se no Ensino baseado em Problemas, dentro da concepção das Abordagens Ativas de Ensino ou Metodologias Ativas. A principal estratégia para promover o desenvolvimento e o amadurecimento pessoal e acadêmico do alunado.

        Nos Estudos Avançados, é significativo partir de um problema, pois permitirá a análise de um contexto e a busca de um novo conhecimento para o estudante na busca por uma solução. É o problema ou o questionamento que, ao desestabilizar o jovem, o levará a mobilizar-se na busca de sua superação, tendo em vista a competências e habilidades previstas na BNCC e nos Itinerários Formativos.

        Vale ressaltar que em todos os componentes curriculares dos Itinerários Formativos, em cada uma das séries, a sua composição versa com as Escalas de Reflexão-ação, sendo na 1ª série: Eu no meu mundo; 2ª série: Eu e o mundo; 3ª série: Eu para o mundo.

        Espera-se, com este curso, que o estudante possa estar preparado na dimensão da sua formação ética, do desenvolvimento da autonomia intelectual e do pensamento crítico, tendo em vista a construção de uma sociedade mais justa, ética, democrática, inclusiva, sustentável e solidária. Ademais, o estudante concluinte deve estar apto a dar prosseguimento a seus estudos em diferentes níveis e atuar no mercado de trabalho, a partir da compreensão dos fundamentos científicos e tecnológicos contemporâneos, relacionando a teoria com a prática, evidenciando suas competências construídas na formação geral (BNCC) e no Itinerário Formativo Linguagens e suas Tecnologias.

        Em meio aos três anos de estudos, esclarece-se que os alunos têm a oportunidade de experienciar aulas de laboratório de física, química e biologia, monitorias de estudo, em horário diverso às aulas, e que poderão participar de olimpíadas, como a OBA (Olimpíada Brasileira de Astronomia); ONC (Olimpíada Nacional de Ciências), OBMEP (Olimpíada Brasileira de Matemática das Escolas Públicas do Estado de São Paulo); ORMUB ( Olimpíada Regional de Matemática da Unesp), a CUCO (Competição USP de Conhecimentos); Olimpíadas de História, Geografia da Unicamp dentre outras e projetos artísticos.

        Quanto ao desempenho dos alunos nas avaliações externas, destaca-se o SARESP – Sistema de Avaliação do Rendimento Escolar do Estado de São Paulo – em que a escola supera a meta esperada tanto em Língua Portuguesa quanto em Matemática, permanecendo com os índices acima das Escolas do Centro Paula Souza. Já o ENEM – Exame Nacional do Ensino Médio, reflete também o trabalho de qualidade realizado pela escola: primeira colocação entre as escolas públicas da cidade, entre as Etecs da região, e índices excelentes em redação. Com efeito, apresentamos uma significativa aprovação dos alunos no ensino superior público e privado, com a obtenção de bolsas de estudo por meio do PROUNI e medalhas de ouro, prata e bronze e menções honrosas nas participações de Olimpíadas.

        O curso também conta com eventos realizados anualmente com o objetivo de recepcionar os novos alunos, integrar a comunidade escolar, e também despertar a solidariedade.

        São desenvolvidos também projetos interdisciplinares com foco em situações problema da atualidade, palestras, visitas a feiras de profissões, eventos culturais, reunião de pais, de representantes de classe a fim de manter uma gestão democrática e participativa.</Text>

      <View style={{width: '100%' ,height: 50, backgroundColor: '#000000'}}>
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
