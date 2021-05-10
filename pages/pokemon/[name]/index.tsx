import MainLayout from "../../../components/layouts/MainLayout";
import PokemonProfile from "../../../components/Elements/PokemonProfile/PokemonProfile";
import { pokeURL, urlBase } from "../../../constants";

const PokemonPage = ({ pokemon, username }) => {
  const getProfileByPokemon = () => {
    const {
      id,
      name,
      height,
      weight,
      types,
      sprites: {
        other: {
          "official-artwork": { front_default: front_official },
        },
        back_default,
        front_default,
        front_shiny,
        back_shiny,
      },
    } = pokemon;

    return (
      <PokemonProfile
        id={id}
        name={name}
        height={height}
        weight={weight}
        types={[...types]}
        mainImage={front_official}
        imageFront={front_default}
        imageBack={back_default}
        imageBackShiny={back_shiny}
        imageFrontShiny={front_shiny}
        key={id.toString()}
      />
    );
  };

  return (
    <div>
      <MainLayout username={username}>{getProfileByPokemon()}</MainLayout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const {
    params: { name },
    req,
  } = context;

  const token = req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  };

  // Fetch data from external API
  const res = await fetch(`${pokeURL}/pokemon/${name}`);
  if (!res.ok) {
    return {
      notFound: true,
    };
  };
  const pokemon = await res.json();
  const headers = new Headers();
  headers.append("Authorization", "Bearer " + token);

  const resUser = await fetch(`${urlBase}/users/me`, {
    method: "GET",
    headers: headers,
  });
  const user = await resUser.json();

  return { props: { pokemon, username: user.name } };
}

export default PokemonPage;
