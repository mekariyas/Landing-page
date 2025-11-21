import { useState, useEffect } from "react"
import Logo from "../assets/logo.svg"

const Navbar = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [ isScrolling, setIsScrolling] = useState<boolean>(false)
  
  const handleVisibility = ()=>{
    setIsVisible(!isVisible)
  }
  
  const handleScroll = ()=>{
    if(window.scrollY > 50){
    setIsScrolling(true)
    } else{
      setIsScrolling(false)
    }
  }

  useEffect(()=>{
    document.addEventListener('scroll', handleScroll)
    return ()=> document.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <header className={`w-full h-20 sticky top-0 z-30 ${isScrolling? "backdrop-blur-lg backdrop-brightness-150 shadow-blue-400 shadow-md":""} flex justify-between items-center`}>
      <section className="w-[20%] h-full">
        <img src={Logo} alt="Logo" className="w-[90%] h-[90%] mt-1 mb-1"/>
      </section>
      <section className="bg-blue-900 h-12 w-12 rounded-md flex flex-col justify-around items-center md:hidden mr-3 cursor-pointer relative" onClick={handleVisibility}>
        <section className={`w-[90%] h-0.5 bg-white ${isVisible? "absolute z-2 rotate-45 transition-all delay-75 ease-in-out":""}`}></section>
        <section className={`w-[90%] h-0.5 bg-white ${isVisible? "hidden transition-all delay-75 ease-in-out":""}`}></section>
        <section className={`w-[90%] h-0.5 bg-white ${isVisible? "absolute -rotate-45 transition-all delay-75 ease-in-out":""}`}></section>
      </section>
      <nav className={`w-full md:w-[60%] h-[30vh] md:h-full absolute top-20 md:static ${isVisible? "flex flex-col bg-blue-900 text-white shadow-blue-400 shadow-md": "hidden"} transition-all delay-75 duration-200 ease-in-out flex-col md:flex md:flex-row items-center justify-around md:text-lg font-semibold backdrop-blur-2xl md:backdrop-blur-none`}>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Amenities">Amenities</a>
        <a href="#Testimonials">Testimonials</a>
      </nav>
    </header>
  )
}

export default Navbar