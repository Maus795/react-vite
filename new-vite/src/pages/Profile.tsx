import axios from "axios";
import { Header } from "../components/menu/header";
import React, { ChangeEvent, useState } from "react";
import { IUsers } from "../data/Users";

export function Profile() {
  const [name, setName] = useState<IUsers>(Object)
  const [pass, setPass] = useState<IUsers>(Object)

  const handlerSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const userData = {
      username: name.username,
      password: pass.password
    }

    axios.post('https://fakestoreapi.com/auth/login', userData).then((response) => { console.log(response.data.token) })


  }
  const handlerName = (event: ChangeEvent<HTMLInputElement>) => {
    setName({ ...name, [event.target.name]: Object }

    )
  }
  const handlerPass = (event: ChangeEvent<HTMLInputElement>) => {
    setPass({ ...pass, [event.target.value]: Object }

    )
  }
  console.log(name.username)
  return (
    <>
      <Header />
      <div>
        <form onChange={handlerSubmit}>
          <input type="text" onChange={handlerName}
            value={name.username}></input>
          <input type="password"
            value={pass.password}
            onChange={handlerPass} />
          <button type="submit"></button>
        </form>
      </div>
    </>
  )
}
