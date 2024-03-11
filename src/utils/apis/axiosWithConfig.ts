import axios from "axios";

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonList = async (): Promise<string[]> => {
  const response = await axios.get(POKEAPI_URL);
  return response.data.results.map((pokemon: any) => pokemon.name);
};

export const getPokemonDetails = async (name: string): Promise<any> => {
  const response = await axios.get(`${POKEAPI_URL}/${name}`);
  const types = response.data.types.map((type: any) => type.type.name);
  const moves = response.data.moves.map((move: any) => move.move.name);
  return {
    id: response.data.id,
    name: response.data.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`,
    types,
    moves,
  };
};
