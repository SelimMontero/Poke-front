import Head from "next/head";
import MainLayout from "../components/layouts/AuthLayout";
import SignUp from "../components/Elements/Auth/SignUp";

const SingUpPage = (props) => (
  <>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainLayout>
      <SignUp />
    </MainLayout>
  </>
);

export default SingUpPage;
