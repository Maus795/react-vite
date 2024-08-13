


import { useState } from "react"
import { IProduct } from "../model"

interface ProductProps {
    products: IProduct
}
export function Product({ products }: ProductProps) {
    const [details, setDetails] = useState(false)
    const btnClass = details ? "btnDescrOne" : "btnDescrTwo"
    return (<div className="Position">
        <img src={products.image} className="imgProduct" />
        <p className="titleProduct">{products.title}</p>
        <p>{products.price}</p>
        <button className={btnClass}
            onClick={() => setDetails(prev => !prev)}
        >{details ? 'Закрыть' : "Показать"}
            {details && <div className="clickDescr"><p className="titleDescr">Описание</p>{products.description}</div>}
        </button>

    </div>
    )
}