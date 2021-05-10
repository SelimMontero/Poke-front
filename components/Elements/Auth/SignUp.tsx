import { useState } from "react";
import useFetch from "use-http";
import { urlBase } from "../../../constants";
import Link from "next/link";
import Router from "next/router";

import style from "./SignUp.module.scss";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setsLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { post, response, loading, error } = useFetch(urlBase);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      username.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      alert("porfavor completar el formulario de registro!");
      return;
    }
    const token = await post("/signup", {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    });
    if (response.ok) {
      alert("Usuario creado");
      Router.push("/");
    } else {
      alert("No se pudo crear su usuario.");
      console.log(error);
    }
  };

  return (
    <div className={style.formContainer}>
      <form className={style.form}>
        <div className={style.formHead}>
          <label className={style.form_head__title}>SignUp</label>
        </div>
        <div className={style.form_body}>
          <input
            className={style.form_body__field}
            placeholder="Name"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className={style.form_body__field}
            placeholder="Last Name"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setsLastName(e.target.value)}
          />
          <input
            className={style.form_body__field}
            placeholder="Username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={style.form_body__field}
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={style.form_body__field}
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={style.form_footer}>
          <button className={style.form_footer__btn} onClick={handleSignUp}>
            Register
          </button>
          <Link href="/">
            <button className={style.form_footer__btn}>Return</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
