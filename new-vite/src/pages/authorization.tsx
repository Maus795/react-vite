import React, { ChangeEvent, useState } from "react";
import { Header } from "../components/menu/header";
import { IUsers } from "../data/Users";
import { ErrorMaseges } from "../components/ErrorMasges";
import { redirect } from "react-router-dom";
const user: IUsers = {
  email: "qwe@qw",
  password: "123",
};
export function Authorization() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [transition, setTransition] = useState(false);

  const SubmitHandlerAuth = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    if (email.trim().length === 0) {
      setEmail("Введите норм email");
      return;
    }
    if (pass.trim().length === 0) {
      setPass("введите норм пароль");
      return;
    }
    if (email === user.email && pass === user.password) {
      setTransition(true);
    }
  };
  const changeHandlerEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const changeHandlerPass = (event: ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };

  const loader = () => {
    if (transition === true) {
      console.log(transition);
      return redirect("/profile");
    }
  };

  return (
    <div className="entrance">
      <Header />
      <form className="fieldsAuthorization" onSubmit={SubmitHandlerAuth}>
        <input
          className="inpAuth"
          type="email"
          placeholder="Введите почтовый ящик"
          value={email}
          onChange={changeHandlerEmail}
        />

        <input
          className="inpAuth"
          type="password"
          value={pass}
          placeholder="Введите пароль"
          onChange={changeHandlerPass}
        />

        {error && <ErrorMaseges error={error} />}
        <button type="submit" className="buttonAuth" onClick={loader}>
          Войти
        </button>
      </form>
    </div>
  );
}
