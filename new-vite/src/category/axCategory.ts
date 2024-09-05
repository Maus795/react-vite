import axios, { AxiosError } from "axios"

import { useEffect, useState } from "react"

export function useCategory() {
    const [categorys, setCategory] = useState([])
    const [loadingCat, setLoadingCat] = useState(false)
    const [errorCat, setErrorCat] = useState('')

    async function fetchCategory() {
        try {
            setErrorCat('')
            setLoadingCat(true)
            const response = await axios.get('https://fakestoreapi.com/products/categories')
            setCategory(response.data)

            setLoadingCat(false)
        }
        catch (e: unknown) {
            const error = e as AxiosError
            setErrorCat(error.message)
        }

    }
    useEffect(() => { fetchCategory() }, [])
    return { categorys, errorCat, loadingCat }
}