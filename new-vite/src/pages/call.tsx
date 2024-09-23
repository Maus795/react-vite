import { Header } from "../components/menu/header";
import { Inp } from "./first/task_input";
import "./first/task_inp.css"
import React, { useState } from "react";
import { Child } from "./first/child";
export function Call() {
const[inp,setInp]=useState('')
const [name,setName]=useState('')
const val=(name:any)=>{
  setName(name)
}
const handler=(event:React.ChangeEvent<HTMLInputElement>)=>{setInp(event.target.value)}
  return (<>   <Header />
    <div className="contInp1">
      <form className="formtask">
        <input type="text" value={inp} onChange={handler} className="text"></input>
        <Inp value={inp}/>
      </form>
    </div>
   <div className="contInp1">
    <div className="text">{name}</div>
     <Child onChange={val}/>
   
    </div> 

  </>

  );
}
