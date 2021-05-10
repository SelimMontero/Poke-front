import MainLayout from "../components/layouts/MainLayout";
import Favorites from "../components/Elements/Favorites/Favorites";
import { pokeURL, urlBase } from "../constants";

const FavoritesPage = ({ results, username, likes }) => {
  return (
    <div>
      <MainLayout username={username}>
        <Favorites
          results={results}
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

  const resLikes = await fetch(`${urlBase}/users/${userId}/pokemon-likes?filter=%7B%0A%20%20%22like%22%3A%20true%0A%7D`, {
    method: "GET",
    headers: headers,
  });
  const likes = await resLikes.json();

  return { props: { results: data.results, username: user.name, likes } };
}

export default FavoritesPage;
