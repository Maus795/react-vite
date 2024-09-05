import axios from "axios"
import { useEffect, useState } from "react"
import { useCategory } from "../axCategory"


// import { useCategory } from "../axCategory"


export function useListProduct() {
    const { categorys } = useCategory()
    const [listProd, setListProduct] = useState([])
    async function fechListProduct() {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categorys}`)
        setListProduct(response.data)


    }
    useEffect(() => { fechListProduct() }, [])
    return ({ listProd })
}