import { StatusBar } from 'expo-status-bar'; //Barra de estado
import React from 'react'; //React para JSX
import Home from "./src/components/screens/Home"; //ruta relativa
//import { StyleSheet, Text, View } from 'react-native'; //React native
// Importacion de modulos

export default function App() { //lo hace accesible desde otros archivos
  return ( //Todas las funciones que van a renderizar llevan un return, solo lleva un PADRE
   /*  {/* <View style={styles.container}>
      <Text>Pokedex con React Native y PokeAPI</Text>
      <StatusBar style="auto" />
    </View> }*/
    <>
    <Home/>
    <StatusBar style="auto"/>
    </>
  );
}
/* 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
