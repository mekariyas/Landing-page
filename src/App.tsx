import { Suspense } from "react"

import Loading from "./Component/Loading.tsx"

import Hero from "./Component/Hero"
import Navbar from "./Component/Navbar"
import About from "./Component/About"
import Amenities from "./Component/Amenities"
import Testimonials from "./Component/Testimonials"
import Footer from "./Component/Footer"
const App = () => {
  return (
    <>
      <Suspense fallback={<Loading/>}>
          <Navbar/>
          <Hero/>
          <About/>
          <Amenities/>
          <Testimonials/>
          <Footer/>
       </Suspense>
    </>
  )
}

export default App