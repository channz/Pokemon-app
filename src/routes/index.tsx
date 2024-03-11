import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonList from "@/pages/pokemons/pokemon-list";
import PokemonDetail from "@/pages/pokemons/pokemon-detail";
import MyPokemonList from "@/pages/mypokemons/mypokemon-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonList />,
  },
  {
    path: "/pokemon/detail/:name",
    element: <PokemonDetail />,
  },
  {
    path: "/mypokemon/list",
    element: <MyPokemonList />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
