// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import axios from 'axios'
import { Product } from './components/Product'
// import { products } from './data/products'
import { useEffect, useState } from 'react'
import { Iproduct } from './models'
function App() {
  const [products, setProducts] = useState<Iproduct[]>([])
  const [loading, setLoading] = useState(false)
  async function fetchProducts() {
    setLoading(true)
    const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=5')
    setProducts(response.data)
    setLoading(false)
  }
  useEffect(() => { fetchProducts() }, [])

  return (<div className='self'>
    {/* <Product product={products[0]} />
    <Product product={products[1]} /> */}
    {loading && <p className='text-center'>Loading...</p>}
    {products.map(product => <Product product={product} key={product.id} />)}

  </div >
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button className={count > 2 ? 'error-counter' : ''} onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

  )
}

export default App
