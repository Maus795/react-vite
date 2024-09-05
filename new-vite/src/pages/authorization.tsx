import React, { ChangeEvent, useEffect, useState } from "react";

import { IUsers } from "../data/Users";
import { ErrorMaseges } from "../components/ErrorMasges";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextAuth } from "../Context";


const user: IUsers = {
    email: "qwe@qw",
    password: "123",
    username: "sdd"
};
export function Authorization() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const { transition, ok } = useContext(ContextAuth);



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

    };
    const changeHandlerEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const changeHandlerPass = (event: ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    };
    const navigation = useNavigate()
    useEffect(() => {
        if (transition === true) {
            return navigation("/");
        }
    }, [transition])
    const butnAuth = () => {
        if (email === user.email && pass === user.password) {
            return ok()
        }
    }

    return (
        <div className="entrance">
            {/* <Header /> */}
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
                <button type="submit" className="buttonAuth"
                    onClick={butnAuth}>
                    Войти
                </button>
            </form>
        </div>
    );
}
