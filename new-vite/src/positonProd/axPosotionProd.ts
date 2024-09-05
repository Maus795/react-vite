import { useState } from "react"

import axios, { AxiosError } from "axios"
import { IProduct } from "../model"


export function usePosProd() {
    const [prodId, setProdId] = useState('')
    const [posProd, setPosProd] = useState(Object)
    const [prodErr, setProdErr] = useState('')



    async function fetchPosProd() {



        try {
            setProdErr("")
            console.log(prodId)
            const response = await axios.get<IProduct>(`https://fakestoreapi.com/products/${prodId}`)

            setPosProd(response.data)
            // console.log(posProd)

        }
        catch (e: unknown) {
            const error = e as AxiosError
            setProdErr(error.message)
            // console.error(e);
        }


    }

    // useEffect(() => { fetchPosProd }, [])


    return { setProdId, posProd, prodErr, prodId, fetchPosProd, }


}