interface InpProps{
    value:string
}
export function Inp({value}:InpProps){


    return(<><div className="text">{value}</div></>)
}
