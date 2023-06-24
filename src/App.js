import React, { createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Cart from './Pages/Cart'
import Details from './Pages/Details'
import PageNotFound from './Pages/PageNotFound'
export const ProductContext = createContext()
export default function App() {
  const products = [
    {
      id: 1,
      name: "dell xps",
      price: 99999,
      stock: 10,
      image: "https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/x/t/w/dell-na-thin-and-light-laptop-original-imafyhm53umy7d4d.jpeg?q=70"
    },
    {
      id: 2,
      name: "MSI Bravo",
      price: 74999,
      stock: 5,
      image: "https://rukminim1.flixcart.com/image/416/416/ktszgy80/computer/h/5/y/na-gaming-laptop-msi-original-imag72h6handbjdh.jpeg?q=70"
    },
    {
      id: 3,
      name: "Lenovo Legion",
      price: 120999,
      stock: 15,
      image: "https://rukminim1.flixcart.com/image/416/416/kt39jm80/computer/f/0/s/na-gaming-laptop-lenovo-original-imag6ggmwjmgqhqn.jpeg?q=70"
    },
    {
      id: 4,
      name: "Hp Victus",
      price: 84999,
      stock: 0,
      image: "https://rukminim1.flixcart.com/image/416/416/kzx1a4w0/computer/z/5/o/victus-laptop-hp-original-imagbtheub4n5u8g.jpeg?q=70"
    }
  ]
  return (
    <BrowserRouter>
      <ProductContext.Provider value={{ products }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product-details/:id' element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  )
}
