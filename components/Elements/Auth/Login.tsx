import { useState } from "react";
import useFetch from "use-http";
import { urlBase } from "../../../constants";
import style from "./Login.module.scss";
import Link from "next/link";
import Router from "next/router";
import Cookies from "js-cookie";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { post, response, loading, error } = useFetch(urlBase);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      alert("porfavor completar el formulario de login!");
      return;
    }
    const res = await post("/login", { email: email, password: password });
    if (!response.ok) {
      alert("usuario o contrasenia incorrectos");
      return;
    }
    Cookies.set("token", res.token, { expires: 1 });
    Cookies.set("userId", res.userId, { expires: 1 });
    Router.push("/home");
  };

  return (
    <div className={style.formContainer}>
      <form className={style.form}>
        <div className={style.formHead}>
          <label className={style.form_head__title}>Login</label>
        </div>
        <div className={style.form_body}>
          <input
            className={style.form_body__field}
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={style.form_body__field}
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={style.form_footer}>
          <button className={style.form_footer__btn} onClick={handleLogin}>
            Login
          </button>
          <Link href="/signup">
            <button className={style.form_footer__btn}>SignUp</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
