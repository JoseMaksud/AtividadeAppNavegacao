import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EnsinoMedioScreen from './components/Views/EnsinoMedioScreen';
import EnsinoMedioIntegradoScreen from './components/Views/EnsinoMedioIntegradoScreen';
import ContatoScreen from './components/Views/ContatoScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Ensino Médio" component={EnsinoMedioScreen} />
        <Drawer.Screen name="Ensino Médio Integrado" component={EnsinoMedioIntegradoScreen} />
        <Drawer.Screen name="Contato" component={ContatoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;