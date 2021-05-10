import logo from "../../../public/assets/logo.png";
import avatar from "../../../public/assets/avatar.png";
import style from "./sidebar.module.scss";
import Router from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";

const Sidebar = ({ username }) => {
  let isMenu = false;
  const openSidebar = () => {
    const sidebar = document.getElementById("sidebar_menu");
    sidebar.classList.add(`${style.open}`);
    if (isMenu) {
      isMenu = false;
      if (sidebar.classList.contains(`${style.close}`)) {
        sidebar.classList.remove(`${style.close}`);
      }
      sidebar.classList.add(`${style.open}`);
    } else {
      isMenu = true;
      if (sidebar.classList.contains(`${style.open}`)) {
        sidebar.classList.remove(`${style.open}`);
      }
      sidebar.classList.add(`${style.close}`);
    }
  };

  const handleLogOut = () => {
    Cookies.remove("token");
    Cookies.remove("userId");
    Router.push("/");
  };

  return (
    <div className={style.sidebar}>
      <div className={style.principal_bar} id="sidebar_menu">
        <div className={style.sidebar_image}>
          <img src={logo} alt="Logo image" width={150} height={60} />
        </div>
        <div className={style.sidebar_profile}>
          <div>
            <img src={avatar} alt="Avatar image" width={200} height={200} />
          </div>
          <div>
            <div>
              <h2>{username}</h2>
              <h3>Level 1</h3>
            </div>
            <div>
              <p>"Work hard on your test"</p>
            </div>
          </div>
        </div>
        <div>
          <Link href="/favorites">
            <div className={style.sidebar_favorite_pokemons}>
              <p>
                <span>FAVORITES</span>
              </p>
            </div>
          </Link>
          <div className={style.sidebar_footer} onClick={handleLogOut}>
            <p>
              <span>LOG OUT</span>
            </p>
          </div>
        </div>
      </div>
      <div className={style.responsive_view_navbar}>
        <header>
          <div className={style.menu}>
            <div className={style.sidebar_show} onClick={() => openSidebar()}>
              <p>
                <span></span>
              </p>
            </div>
            <div className={style.logo}>
              <img src={logo} alt="Logo image" width={200} height={60} />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Sidebar;
