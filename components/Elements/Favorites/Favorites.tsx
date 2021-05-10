import Search from "../Partials/Search";
import ReturnButton from "../Partials/ReturnButton";
import GridPokemonCards from '../GridPokemonCards';
import style from "./Favorites.module.scss";
import { useEffect, useState } from "react";

const Favorites = ({ results, likes }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const getPokemonListFetch = () =>
        results.map(({ url }) => fetch(url).then((res) => res.json()));

    useEffect(() => {
        Promise.all(getPokemonListFetch()).then((results) => {
            let data = []
            for(const res of results) {
                for(const lk of likes) {
                    if(lk.pokemon_id === res.id && lk.like === true){
                        data = [...data, res]
                    }
                }
            }
            setPokemonList(data);
        });
    }, []);
    return (
        <div className={style.main_favorite_view}>
            <header>
                <ReturnButton/>
                <Search/>
            </header>
            <div>
                <div>
                    <h1>FAVORITES</h1>
                </div>
                <GridPokemonCards pokemonList={pokemonList} likes={likes} />
            </div>
        </div>
    )
}

export default Favorites
