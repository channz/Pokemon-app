export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  moves: string[];
  nickname?: string;
}

export interface Store {
  pokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (id: number) => void;
}
