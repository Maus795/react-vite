import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './components/ProductCSS.css'
import { ModalState } from './context/ModalContext.tsx'
import { BrowserRouter } from 'react-router-dom'

// import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement

)
root.render(<BrowserRouter>
  <ModalState><App /></ModalState></BrowserRouter>
)