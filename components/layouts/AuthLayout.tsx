import Navbar from "../Elements/Partials/Navbar";
import Footer from "../Elements/Partials/Footer";

const MainLayout = ({ children }) => (
  <main>
    <Navbar />
    {children}
    <Footer />
  </main>
);

export default MainLayout;
