import { useLocation } from "react-router-dom"
import "./listProduct.css"
import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../../model"
import { Header } from "../../components/menu/header";
import { Loader } from "../../components/Loader";
import { ErrorMaseges } from "../../components/ErrorMasges";
import { PositionProd } from "../../positonProd/positionProd";
import { usePosProd } from "../../positonProd/axPosotionProd"



export function ListProduct() {
    const [prod, setProd] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [newProd, setNewProd] = useState<IProduct>(Object)
    const loc = useLocation()
    const { cat } = loc.state
    const { setProdId, fetchPosProd, posProd } = usePosProd()


    async function fechLiProd() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products/category/${cat}`)
            setProd(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }
    useEffect(() => { fechLiProd() }, [])


    // console.log(posProd)
    return (
        <><Header />
            {loading && <Loader />}
            {error && <ErrorMaseges error='Произошла ошибка' />}
            <div className="root">
                <div className="listProd">
                    {prod.map((item) => (
                        <button type='submit' className="StartProd"
                            onClick={() => {
                                setProdId(item.id)
                                fetchPosProd()
                                setNewProd(posProd)
                            }}
                        >
                            <div className="PositionProd">
                                <img className="imgProduct" src={item.image} />
                                <p>{item.description}</p>
                                <p>{item.title}</p>
                            </div>
                        </button>))}
                </div>

                <PositionProd newProd={newProd} />
            </div>
        </>

    )
}
