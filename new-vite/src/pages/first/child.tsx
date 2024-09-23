import React from "react"
interface childProps{
    onChange:any
}
export function Child({onChange}:childProps){
    
        const hend=(event:React.ChangeEvent<HTMLInputElement>)=>{onChange(event.target.value)}    
    
    return (
        <>
        <form>
            <input type="text" className="text" onChange={hend} ></input>
            </form>
            </>
    )
}