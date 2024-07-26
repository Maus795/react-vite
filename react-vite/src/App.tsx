// import { Loader } from './components/Loader'
// import { Product } from './components/Product'
// import { useProduct } from './hooks/products'
// import { ErrorMassage } from './components/ErrorMassage'
// import { Modal } from './components/Modal'
// import { CreateProduct } from './components/CreateProduct'
// import { Iproduct } from './models'
// import { useContext } from 'react'
// import { ModalContext } from './context/ModalContext'
import { Route, Routes } from "react-router-dom"
import { ProductPage } from "./pages/productPage"
import { AboutPages } from "./pages/AboutPage"
import { Navigation } from "./components/Navigation"
function App() {
  return (<>
    <Navigation />
    <Routes>

      <Route path="/" element={<ProductPage />} />
      <Route path="/about" element={<AboutPages />} />
    </Routes></>

  )
  // const { loading, products, error, addProduct } = useProduct()
  // // const [modal, setModal] = useState(true)
  // const { modal, open, close } = useContext(ModalContext)
  // const createHandler = (product: Iproduct) => {
  //   // setModal(false)
  //   close()
  //   addProduct(product)
  // }
  // return (<div className='self'>
  //   {loading && <Loader />}
  //   {error && <ErrorMassage error={error} />}
  //   {products.map(product => <Product product={product} key={product.id} />)}
  //   {modal && <Modal title='Введите новый продукт' onClose={close}><CreateProduct onCreate={createHandler} /></Modal>}
  //   <button className='Search' onClick={open}>+</button>
  // </div >

  // )
}

export default App
