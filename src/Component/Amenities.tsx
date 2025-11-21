import { motion } from "motion/react"

//Images import
import Bar from "../assets/Amenities/bar.webp"
import Conference from "../assets/Amenities/conference.webp"
import Golf from "../assets/Amenities/golf.webp"
import Gym from "../assets/Amenities/gym.webp"
import Poolside from "../assets/Amenities/poolside.webp"
import Reception from "../assets/Amenities/reception.webp"
import Restaurant from "../assets/Amenities/restaurant.webp"
import Spa from "../assets/Amenities/spa.webp"

//Amenities data

const AmenitiesData = [
    {
        "name":"Bar",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur! Maxime corporis eaque voluptatibus laboriosam exercitationem",
        "image": Bar
    },
    {
        "name":"Conference Hall",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur! Maxime corporis eaque voluptatibus laboriosam exercitationem",
        "image": Conference
    },
    {
        "name":"Golf",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur! Maxime corporis eaque voluptatibus laboriosam exercitationem",
        "image": Golf
    },
    {
        "name":"Gym",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur! Maxime corporis eaque voluptatibus laboriosam exercitationem",
        "image": Gym
    },
    {
        "name":"Pool",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur! Maxime corporis eaque voluptatibus laboriosam exercitationem",
        "image": Poolside
    },
    {
        "name":"24 hours Reception",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur! Maxime corporis eaque voluptatibus laboriosam exercitationem",
        "image": Reception
    },
    {
        "name":"High End Restaurant",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur! Maxime corporis eaque voluptatibus laboriosam exercitationem",
        "image": Restaurant
    },
    {
        "name":"Spa",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur! Maxime corporis eaque voluptatibus laboriosam exercitationem",
        "image": Spa
    }]




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