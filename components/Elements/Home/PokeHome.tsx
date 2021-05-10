import { useEffect, useState } from "react";
import useFetch from "use-http";
import style from "./PokeHome.module.scss";
import { pokeURL } from "../../../constants";
import Search from "../Partials/Search";
import GridPokemonCards from "../GridPokemonCards";
// import Pagination from "../Pagination"
import Router from "next/router";

const PokeHome = ({ results, likes }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const { response, get, loading } = useFetch(pokeURL);
  const getPokemonListFetch = () =>
    results.map(({ url }) => fetch(url).then((res) => res.json()));

  const handleSearch = (value) => {
    if (value.length === 0) {
      alert("Valor de busqueda vacio");
      return;
    }
    Router.push("/pokemon/" + value);
  };

  useEffect(() => {
    Promise.all(getPokemonListFetch()).then((results) => {
      setPokemonList(results);
    });
  }, []);

  return (
    <div className={style.home_container}>
      <header className={style.header_container}>
        <Search handleSearch={handleSearch} />
      </header>

      <GridPokemonCards pokemonList={pokemonList} likes={likes} />
    </div>
  );
};

export default PokeHome;
