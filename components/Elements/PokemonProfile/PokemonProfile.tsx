import Search from "../../../components/Elements/Partials/Search";
import ReturnBotton from "../../../components/Elements/Partials/ReturnButton";
import style from "./PokemonProfile.module.scss";
import Tag from "../Tag";
import { useEffect } from "react";
import { capitalize } from "../../../helpers";

const PokemonProfile = ({
  imageFrontShiny,
  imageBackShiny,
  imageFront,
  imageBack,
  mainImage,
  name,
  types,
  id,
  height,
  weight,
}) => {
  return (
    <div className={style.header_container}>
      <header className={style.header_btns}>
        <Search />
        <ReturnBotton />
      </header>
      <div className={style.box_profile}>
        <div className={style.picture_container}>
          <div className={style.picture_principal}>
            <img src={mainImage} />
          </div>

          <div className={style.pictures_back_front_pokemon}>
            <div className="picture__front_pokemon">
              <img src={imageFront} width={100} height={100} />
            </div>
            <div className="picture__back_pokemon">
              <img src={imageBack} width={100} height={100} />
            </div>
          </div>
        </div>

        <div className={style.pokemon_profile}>
          <div className={style.box_profile_data}>
            <div className={style.name_pokemon}>
              <h1>{capitalize(name)}</h1>
            </div>
            <div className={style.type_pokemon}>
              {types.map(({ type }, i) => {
                return <Tag name={type.name} key={i.toString()} />;
              })}
            </div>
            <div className={style.data_pokemon}>
              <div>
                <h2>Pokedex Number</h2>
                <div className={style.text_box}>
                  <p>{id}</p>
                </div>
              </div>
              <div>
                <h2>Height</h2>
                <div className={style.text_box}>
                  <p>{height}</p>
                </div>
              </div>
              <div>
                <h2>Weight</h2>
                <div className={style.text_box}>
                  <p>{weight}</p>
                </div>
              </div>
            </div>
            <div>
              <h2>Shiny</h2>
              <div className={style.shiny_pokemon_photo}>
                <div className="pokemon_picture_shiny_front">
                  <img src={imageFrontShiny} width={80} height={80} />
                </div>
                <div className="pokemon_picture_shiny_back">
                  <img src={imageBackShiny} width={80} height={80} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonProfile;
