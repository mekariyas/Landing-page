import { motion } from "motion/react"
import HeroImage from "../assets/Hero.webp"

const Hero = () => {
  return (
    <section className="w-full h-screen relative -top-20 overflow-hidden" id="Home">
      <img src={HeroImage} alt="Hero-image" className="w-full h-full"/>
      <section className="w-full h-[80%] absolute z-2 top-0 mt-30 flex flex-col justify-between">
        <section className=" border-white h-[50%] flex flex-col justify-between">
          <motion.h1 initial={{y:-200, opacity: 0}} animate={{y : 0, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.4 }} className="w-full text-center text-white text-4xl md:text-6xl font-bold text-shadow-sm text-shadow-black">Tranquil Cloak Resort</motion.h1>
          <motion.p initial={{x:-200, opacity: 0}} animate={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:3, delay: 0.8 }} className="w-full text-white text-center text-xl md:text-3xl text-shadow-lg text-shadow-black">Where Comfort Meets Adventure: Escape to Tranquil Cloak</motion.p>
        </section>
        <section className="w-full mt-3 md:mt-0  md:h-20 absolute  bottom-[0.2px]  bg-none flex justify-center items-center rounded-sm">
          <form className="w-full md:w-[65%] h-full bg-amber-100 flex flex-col items-around md:flex-row md:items-center justify-between">
            <label className="w-full md:w-[20%] pl-2 md:text-lg">Check In:<br/>
              <input type="date" required className="w-[60%] md:w-[90%] md:h-[50%] mt-1 mb-1  pl-1 rounded-sm border-2 border-slate-400" />
            </label>
            <label className="w-full md:w-[20%] pl-2 md:text-lg">Check Out:<br/>
                <input type="date" required className="w-[60%] md:w-[90%] md:h-[50%] mt-1 mb-1 pl-1 rounded-sm border-2 border-slate-400"/>
            </label>
            <label className="w-full md:w-[20%] pl-2 md:text-lg">Guest:<br/>
                <input type="number" min="1" required className="w-[60%] md:w-[90%] md:h-[50%]  mt-1 mb-1  pl-1 rounded-sm border-2 border-slate-400"/>
            </label>
            <button type="submit" className="w-full h-14 md:w-[20%] md:h-full font-bold text-lg bg-blue-950 text-white  cursor-pointer">Book Now</button>
          </form>
        </section>
      </section>
    </section>
  )
}

export default Hero