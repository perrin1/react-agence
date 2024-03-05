import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blog />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
