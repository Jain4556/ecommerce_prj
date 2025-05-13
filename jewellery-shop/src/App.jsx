import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'

import Home from "./pages/Home"
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'

import Footer from './components/Footer'
import Cart from './pages/Cart'
function App() {
  return (
      
      <Router>
        
        <Navbar/>
        <Routes>
  
            <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
        </Router>
   
  )
}

export default App
