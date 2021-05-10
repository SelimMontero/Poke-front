import PokemonCard from "./PokemonCard";
import style from "./GridPokemonCards.module.scss";
import { useState, useEffect } from "react";

const GridPokemonCards = ({ pokemonList, likes }) => {
  const getPokemonCards = () => {
    return pokemonList.map((item) => {
      const {
        id,
        name,
        height,
        width,
        types,
        sprites: {
          other: {
            "official-artwork": { front_default },
          },
        },
      } = item;
      const userLike = likes.find(({ pokemon_id }) => pokemon_id === id);
      let like = false;
      let ownerId = null;
      if (userLike) {
        like = userLike.like;
        ownerId = userLike.id;
      }
      return (
        <div className={style.card}>
          <PokemonCard
            id={id}
            name={name}
            height
            weight
            types={[...types]}
            pokeImage={front_default}
            like={like}
            ownerId={ownerId}
            key={id}
          />
        </div>
      );
    });
  };

  return <div className={style.container_cards}>{getPokemonCards()}</div>;
};

export default GridPokemonCards;
