import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/Views/HomeScreen';
import SobreScreen from './components/Views/SobreSreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sobre" component={SobreScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;