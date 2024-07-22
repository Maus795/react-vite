import { useState } from "react"
import { Iproduct } from "../models"


interface ProductProps {
    product: Iproduct
}
export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnClass = details ? 'btnDescriptionOne' : 'btnDescriptionTwo'
    return (<div className="Product">

        < img src={product.image} className="imgProduct" />
        <p>{product.title}</p>
        <span className="price">{product.price + '$'} </span>
        <button className={btnClass}
            onClick={() => setDetails(prev => !prev)}
        >{details ? 'Закрыть детали' : 'Показать детали'}</button>
        {details && <div><p> {product.description}</p></div>}
        <p>Rate:<span style={{ fontWeight: 'bold' }}>{product.rating.rate}</span></p>

    </div>
    )

}