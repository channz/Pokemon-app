import { useStore } from "@/utils/apis/store/api";
import React, { useEffect } from "react";

const MyPokemonList: React.FC = () => {
  const { pokemons } = useStore();

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Pokemon List</h1>
      <ul className="space-y-2">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <div className="flex items-center space-x-2">
              <img src={pokemon.image} alt={pokemon.name} className="w-6 h-6" />
              <span>{pokemon.name}</span>
              {pokemon.nickname && (
                <span className="text-gray-500"> ({pokemon.nickname})</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPokemonList;
