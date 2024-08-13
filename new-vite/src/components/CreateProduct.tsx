import axios from "axios"
import React, { ChangeEvent, useState } from "react"
import { IProduct } from "../model"
import { ErrorMaseges } from "./ErrorMasges"

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',

}

interface CreateProductProps {
    onCreate: (products: IProduct) => void
}
export function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState("")
    const [error, setError] = useState('')

    // отмена перезагрузки при нажатии 
    const sumbmitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        if (value.trim().length === 0) {
            setError("Введите норм название")
            return
        }
        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)

    }
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)


    }

    return (

        <form className="Modal" onSubmit={sumbmitHandler}>
            <input className="inputModal" type="text" placeholder="Введите название"

                value={value}
                onChange={changeHandler} />
            {error && < ErrorMaseges error={error} />}
            <button className="btnModal" type="submit">Create</button>
        </form >

    )
}