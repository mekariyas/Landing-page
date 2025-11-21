import { motion } from "motion/react"

//Images import
import Person1 from "../assets/person/Person-1.webp" 
import Person2 from "../assets/person/Person-2.webp" 
import Person3 from "../assets/person/Person-3.webp" 
import Person4 from "../assets/person/Person-4.webp" 
import Person5 from "../assets/person/Person-5.webp" 
import Person6 from "../assets/person/Person-6.webp" 


//Testimonial Data
const TestimonialsData=[
    {
        "name": "Jessica S. Harris",
        "quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur.",
        "image": Person1
    },
    {
        "name":"Arridano Roussel",
        "quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur",       
        "image": Person2
    },
    {
        "name": "Fred S. Arbour",
        "quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur",
        "image": Person3
    },
    {
        "name":"Sarah S. Richardson",
        "quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur",
        "image": Person4
    },
    {
        "name": "Edward C. Lymon",
        "quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur",
        "image": Person5
    },
    {
        "name": "Pauline M. White",
        "quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur",
        "image": Person6
    }]





const Testimonials = () => {
  
  return (
    <section className="w-full mt-20 flex flex-col gap-4 overflow-hidden" id='Testimonials'>
      {/* Heading */}
        <motion.h2 initial={{x: -200, opacity: 0}} whileInView={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }} className="text-black w-full text-center text-4xl font-bold mb-10">Testimonials</motion.h2> 
          
          {/* Testimonial Data */}
          <ul className="w-full flex justify-center md:justify-start items-around flex-wrap gap-10 pl-4 pr-4 mb-4">
              {TestimonialsData.map((Testimonial,i)=>{
            return(<motion.li initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.5 }} key={i} className="w-[full] md:w-[30%] h-[90vh] flex flex-col items-center gap-3 shadow-lg shadow-blue-400 inset-shadow-blue-200 rounded-md">
              <img src={Testimonial.image} alt={Testimonial.name} className="h-[50%] w-full rounded-tr-md rounded-tl-md object-fit-cover"/>
              <h3 className="w-full text-xl md:text-3xl font-bold text-center">{Testimonial.name}</h3>
              <p className="md:text-lg font-medium text-gray w-[90%] md:w-full md:p-4 italic">"{Testimonial.quote}"</p>
            </motion.li>)
          })}
        </ul>
    </section>
  )
}

export default Testimonials