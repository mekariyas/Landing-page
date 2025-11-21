import HotelLogo from "../assets/logo.svg"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook,  FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="w-full h-[70vh] md:h-[60vh] bg-blue-950 text-white flex flex-col justify-evenly gap-4">
        <section className="w-full h-full">
          <section className="w-full h-[45%] mt-5 flex items-center pl-2">
            <img src={HotelLogo} alt="Hotel-Logo" className="w-20 h-20"/>
          </section>
          <section className="w-full border-white flex justify-start pl-4 md:pl-0 md:justify-around flex-wrap h-[40%]">
            <section className="w-[35%] md:w-[20%]">
              <h2 className="text-lg md:text-xl font-bold mb-2">Address</h2>
              <p className="text-lg font-medium">1234-Street, Honolulu</p>
            </section>
            <section className="w-[35%] md:w-[20%]">
              <h2 className="text-lg md:text-xl font-bold mb-2">Contact Us</h2>
              <p className="md:text-lg font-medium">332-4501-549</p>
              <em className="md:text-lg text-wrap">Tranquil-Cloak@blahblah.com</em>
            </section>
            <section className="w-[35%] md:w-[20%]">
              <h2 className="text-lg md:text-xl font-bold mb-2">Follow Us</h2>
              <section className="flex justify-start pl-2 gap-2 text-lg font-medium">
               <FaInstagram/>
               <FaFacebook/>
               <FaXTwitter/>
              </section>
            </section>
          </section>
        <section className="w-full flex flex-col justify-around pl-4 mt-4 md:mt-2">
          <p className="text-white md:text-lg">&copy; 2025 - Copyright</p>
        </section>
      </section>
    </footer>
  )
}

export default Footer