import { motion } from "motion/react"
import { Amenities as AmenitiesData } from "../staticData/data"

//Amenities component

const Amenities = () => {
  return (
    <section className="w-full flex flex-col gap-4 mt-40 overflow-hidden" id="Amenities">
      {/** Header */}
        <motion.h2 initial={{x:-200, opacity: 0}} whileInView={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }} className="text-black w-full text-center text-4xl font-bold mb-10">Amenities</motion.h2>
        
        {/* Amenities data */}
        <ul className="w-full flex justify-center md:justify-start items-around flex-wrap gap-10 pl-4 pr-4 mb-4">
          {AmenitiesData.map((Amenity,i)=>{
            return(<motion.li initial={{scale: 0, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.2 }} key={i} className="w-[full] md:w-[30%] h-[90vh] flex flex-col items-center gap-3 shadow-lg shadow-blue-400 inset-shadow-blue-200 rounded-md">
              <img src={Amenity.image} alt={Amenity.name} className="h-[50%] w-full rounded-tr-md rounded-tl-md"/>
              <h3 className="w-full text-xl md:text-3xl font-bold text-center">{Amenity.name}</h3>
              <p className="md:text-lg font-medium text-gray w-[90%] md:w-full md:p-4">{Amenity.text}</p>
            </motion.li>)
          })}
        </ul>
    </section>
  )
}

export default Amenities