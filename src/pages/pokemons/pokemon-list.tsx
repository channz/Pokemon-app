import {
  getPokemonDetails,
  getPokemonList,
} from "@/utils/apis/axiosWithConfig";
import { useStore } from "@/utils/apis/store/api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const { addPokemon } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const list = await getPokemonList();
      setPokemonList(list);
    };

    fetchData();
  }, []);

  const handleCatchPokemon = async (name: string) => {
    const pokemon = await getPokemonDetails(name);
    const success = Math.random() < 0.5;
    if (success) {
      const nickname = prompt("Enter a nickname for the Pokemon:");
      addPokemon({ ...pokemon, nickname });
    } else {
      alert("Failed to catch the Pokemon!");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pokemon List</h1>
      <ul className="space-y-2">
        {pokemonList.map((name) => (
          <li key={name}>
            <button
              className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-100"
              onClick={() => handleCatchPokemon(name)}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  Math.floor(Math.random() * 898) + 1
                }.png`}
                alt={name}
                className="w-6 h-6"
              />
              <span>{name}</span>
            </button>
          </li>
        ))}
      </ul>
      <Link
        to="/mypokemon/list"
        className="block mt-4 text-blue-500 hover:underline"
      >
        My Pokemon List
      </Link>
    </div>
  );
};

export default PokemonList;
