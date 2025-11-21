//import { Suspense } from "react"
import Hero from "./Component/Hero"
import Navbar from "./Component/Navbar"
import About from "./Component/About"
import Amenities from "./Component/Amenities"
import Testimonials from "./Component/Testimonials"
import Footer from "./Component/Footer"
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Amenities/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App