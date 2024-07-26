import React, { useState } from "react";
import { Iproduct } from "../models";
import axios from "axios";
import { ErrorMassage } from "./ErrorMassage";
const productData: Iproduct = {
    title: '',
    id: 2,
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10,
    }
}
interface CreateProductProps {
    onCreate: (product: Iproduct) => void
}
export function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        if (value.trim().length === 0) {
            setError('Введите коректное название')
            return
        }

        productData.title = value
        const response = await axios.post<Iproduct>("https://fakestoreapi.com/products", productData)
        onCreate(response.data)
    }
    const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(e.target.value)

    }

    return (
        <form onClick={submitHandler}
            className="FlexForm">
            <input type="text" className="ModalInput" placeholder="Введите название продукта..."
                value={value}
                onChange={changeHandler}
            />

            {error && <ErrorMassage error={error} />}
            <button type="submit" className="ModalBtn">Create</button>

        </form>
    )
}