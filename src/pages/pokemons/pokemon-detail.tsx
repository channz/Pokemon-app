import { getPokemonDetails } from "@/utils/apis/axiosWithConfig";
import { useStore } from "@/utils/apis/store/api";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { addPokemon } = useStore();

  useEffect(() => {
    if (name) {
      const fetchData = async () => {
        const pokemon = await getPokemonDetails(name);
        addPokemon(pokemon);
      };

      fetchData();
    }
  }, [name, addPokemon]);

  return (
    <div className="p-4">
      {useStore.getState().pokemons[0] && (
        <>
          <h1 className="text-2xl font-bold mb-4">
            {useStore.getState().pokemons[0].name}
          </h1>
          <img
            src={useStore.getState().pokemons[0].image}
            alt={useStore.getState().pokemons[0].name}
            className="w-64 h-64 mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Types:</h2>
          <ul className="list-disc list-inside space-y-1 mb-4">
            {useStore.getState().pokemons[0].types.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
          <h2 className="text-xl font-bold mb-2">Moves:</h2>
          <ul className="list-disc list-inside space-y-1 mb-4">
            {useStore
              .getState()
              .pokemons[0].moves.slice(0, 5)
              .map((move) => (
                <li key={move}>{move}</li>
              ))}
          </ul>
          <button className="block w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Catch Pokemon
          </button>
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
