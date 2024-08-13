import { useState, useEffect } from "react"
import axios, { AxiosError } from "axios"
import { IProduct } from "../model"
export function useProduct() {
    const [products, setProduct] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    function addProduct(products: IProduct) {
        setProduct(prev => [...prev, products])
    }
    async function fetchProduct() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10')
            setProduct(response.data)
            setLoading(false)
        }
        catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)

        }
    }
    useEffect(() => { fetchProduct() }, [])
    return { products, loading, error, addProduct }
}