import getEnvVars from "../../environment";
const {apiUrl} = getEnvVars();

// Ruta principal para consultar API
//const pokeapi = apiUrl;

const fetchPokemons = async () => {
    // Las rutas de las api se les conoce como endpoint
    // 150 pokemon
    const endpoint = `${apiUrl}pokemon/?limit=150`;

    // Realizar la peticion a la api. Esta peticion debe ser asincrona
    const response = await fetch(endpoint); 
    const data = await response.json();

    return data;
};

export default fetchPokemons;