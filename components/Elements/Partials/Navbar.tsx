import logo from "../../../public/assets/logo.png";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.menu}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo image" width={250} height={90} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
