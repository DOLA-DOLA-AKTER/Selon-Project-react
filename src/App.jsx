import { useState } from 'react'
import './App.css'
import Navber from './Components/Navber/Navber'
import Banner from './Components/Banner/Banner'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Booking from './Components/Booking/Booking'
import Products from './Components/Products/Products'
import Blog from './Components/Blog/Blog'
import Images from './Components/Images/Images'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber />
      <Banner />
      <About />
      <Service />
      <Booking />
      <Products />
      <Blog />
      <Images />
      <Footer />
    </>
  )
}

export default App
