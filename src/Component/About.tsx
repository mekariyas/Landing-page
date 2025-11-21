import { motion } from "motion/react"
import AboutImg from  "../assets/About.webp"

// About component

const About = () => {
  return (
    <section className='w-full mt-2 overflow-hidden' id="About">
        {/** Header */}
        <motion.h2 initial={{x:-200, opacity: 0}} whileInView={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }} className="text-black w-full text-center text-4xl font-bold mb-10">About Us</motion.h2>
        
        {/* image and text */}
        <section className="w-full flex flex-wrap gap-5 justify-between md:pl-2 md:pr-2 ">
            <section className="w-full md:w-[45%] h-[70vh]">
                <motion.img initial={{scale:0, opacity: 0}} whileInView={{scale : 1, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.4 }} src={AboutImg}  alt="About-use-image" className="w-full h-full object-cover md:rounded-2xl md:shadow-2xl md:shadow-blue-400 md:inset-shadow-blue-200" loading="lazy" />
            </section>
            <motion.section initial={{scale:0, opacity: 0}} whileInView={{scale : 1, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.4 }} className="w-full md:w-[45%] h-[70vh] md:rounded-2xl md:shadow-2xl md:shadow-blue-400 md:inset-shadow-blue-200 flex items-center justify-center">
                <p className="w-[80%] text-lg font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla deserunt inventore voluptate ut, ipsa quae corrupti delectus veniam molestiae, facilis doloremque aspernatur! Maxime corporis eaque voluptatibus laboriosam exercitationem?
                    Consectetur voluptatem, ex, sunt reprehenderit magnam provident distinctio molestias amet dolorem necessitatibus soluta! Consectetur cupiditate consequuntur laborum, nulla deleniti delectus natus, debitis quas illum perspiciatis eius earum rerum suscipit dignissimos.
                </p>
            </motion.section>
        </section>
    </section>
  )
}
export default About