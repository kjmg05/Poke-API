import React, {useEffect, useState} from "react";
// import React from "react";
import {StyleSheet, View, Text, ScrollView} from "react-native";
import fetchPokemons from "../../api"; 
import CardList from "../CardList";

const Home = () => {
    const [pokemons, setPokemons] = useState({});
    const getPokemons = async () => {
        const response = await fetchPokemons();

        setPokemons(response);
        // console.log(response);
    };
    
    useEffect(() => {
        // const response = fetchPokemons();
        // setPokemons(fetchPokemons());
        getPokemons();
        // setPokemons(fetchPokemons());
        
    }, []);
    
    return(
        <ScrollView>
            <View>
            <Text style={styles.title}>Pokedex con React Native y PokeAPI</Text>
            {/* Props */}
            {/* <Card name="Bulbasur" image="" otherInfo="other info"/>  */}
            {/* {pokemons ? <Text>${pokemons.count}</Text> : <Text>Not found</Text>} */}
            {/* {pokemons.count && pokemons.results.map((pokemon) => {
                return <Card name = {pokemon.name}/>;
            })} */}
            {/* {pokemons.count && pokemons.results.map((pokemon, index) => {
                return <Card key={index} name = {pokemon.name} number = {index +1} />;
            })} */}
            <CardList pokemons = {pokemons}/>
        </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 60,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
}); //hoja de estilos

export default Home; //siempre exportar