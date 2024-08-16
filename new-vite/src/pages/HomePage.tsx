import { Product } from "../hooks/Products"
import { useProduct } from "../hooks/hookProducts"
import { Button } from "../components/btnModal"
import { Loader } from "../components/Loader"
import { ErrorMaseges } from "../components/ErrorMasges"
import { Modal } from "../components/modal"
import { CreateProduct } from "../components/CreateProduct"
import { useState } from "react"
import { IProduct } from "../model"
import { Menu } from "../components/menu/menu"
import { Header } from "../components/menu/header"
export function HomePage() {
    const [modal, setModal] = useState(false)
    const { loading, error, products, addProduct } = useProduct()
    const CreateHandler = (products: IProduct) => {
        setModal(false)
        addProduct(products)
    }

    return (
        <>
            <Header></Header>
            <div className="common">
                <Menu></Menu>
                <div className="Start">
                    {loading && <Loader />}
                    {error && <ErrorMaseges error={error} />}
                    <Button />
                    {products.map(product => <Product products={product} key={product.id} />)}
                    {modal && <Modal title="Create new product" > <CreateProduct onCreate={CreateHandler} /></Modal>}
                    <button className="closeModal" type="submit"
                        onClick={() => setModal(prev => !prev)}>+</button>
                </div>
            </div>
        </>
    )
}