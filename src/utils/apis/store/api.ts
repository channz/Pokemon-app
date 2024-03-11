import { create } from "zustand";
import { Store } from "./type";

export const useStore = create<Store>((set) => ({
  pokemons: [],
  addPokemon: (pokemon) =>
    set((state) => ({ pokemons: [...state.pokemons, pokemon] })),
  removePokemon: (id) =>
    set((state) => ({
      pokemons: state.pokemons.filter((p) => p.id !== id),
    })),
}));
