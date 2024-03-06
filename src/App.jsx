import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Blog from './pages/Blog'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <Services />
      <About />
      <Products />
   
      <NewsLetter />
      {/* <Routes>
        <Route path="/about" element={<Blog />}/>       
      </Routes> */}
      <Footer />

    </>
  )
}

export default App
