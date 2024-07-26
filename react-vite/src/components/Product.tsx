import { useState } from "react"
import { Iproduct } from "../models"

interface ProductProps {
    product: Iproduct
}
export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnClass = details ? 'btnDescriptionOne' : 'btnDescriptionTwo'
    return (<div className="Product">

        < img src={product.image} className="imgProduct" alt={product.title} />
        <p>{product.title}</p>
        <p className="price">{product.price + '$'} </p>

        <button className={btnClass}
            onClick={() => setDetails(prev => !prev)}

        >{details ? 'Закрыть детали' : 'Показать детали'}</button>
        {details && <div>
            <p> {product.description}</p>
            <p>Rate:<span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
        </div>}
    </div >
    )

}