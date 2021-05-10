import Head from "next/head";
import MainLayout from "../components/layouts/AuthLayout";
import Login from "../components/Elements/Auth/Login";
import { urlBase } from "../constants";

const Index = (props) => (
  <>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="path/to/font-awesome/css/font-awesome.min.css"
      ></link>
    </Head>
    <MainLayout>
      <Login />
    </MainLayout>
  </>
);

export async function getServerSideProps({ req }) {
  const token = req.cookies.token;
  if (!token) {
    return { props: {} };
  }

  const headers = new Headers();
  headers.append("Authorization", "Bearer " + token);

  let res = await fetch(`${urlBase}/users/me`, {
    method: "GET",
    headers: headers,
  });

  if (!res.ok) {
    return { props: {} };
  }

  return {
    redirect: {
      destination: "/home",
      permanent: false,
    },
  };
}

export default Index;
