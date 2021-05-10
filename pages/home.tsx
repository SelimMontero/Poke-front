import MainLayout from "../components/layouts/MainLayout";
import PokeHome from "../components/Elements/Home/PokeHome";
import { pokeURL, urlBase } from "../constants";

const Home = ({ data, username, likes }) => {
  return (
    <div>
      <MainLayout username={username}>
        <PokeHome
          results={data.results}
          likes={likes}
        />
      </MainLayout>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const token = req.cookies.token;
  const userId = req.cookies.userId;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const headers = new Headers();
  headers.append("Authorization", "Bearer " + token);

  const resPokemon = await fetch(`${pokeURL}/pokemon`);
  const data = await resPokemon.json();

  const resUser = await fetch(`${urlBase}/users/me`, {
    method: "GET",
    headers: headers,
  });
  const user = await resUser.json();

  const resLikes = await fetch(`${urlBase}/users/${userId}/pokemon-likes`, {
    method: "GET",
    headers: headers,
  });
  const likes = await resLikes.json();

  return { props: { data, username: user.name, likes } };
}

export default Home;
