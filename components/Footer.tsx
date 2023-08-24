import Logo from "@/public/goldmark.jpg"
import { FaMapMarker, FaRegCopyright } from "react-icons/fa"
import { FaInstagram, FaTwitter} from "react-icons/fa";
import {AiOutlineMail, AiFillPhone} from "react-icons/ai"
import Image from "next/image";

export default function Footer(){
    return(
        <footer className="bg-secondary-gray-200 p-5 py-16">
          <div className="md:flex justify-content w-5/6 gap-16">
            <div className = 'mt-16 basis-1/2 md:mt-0'>
                <div className=" md:flex items-center">
                    <Image src={Logo} alt ="logo" height={90 } width={90}/>
                    <span style={{fontFamily:"Bungee Spice, cursive"}} className=" text-2xl font-bold"> GoldMark Realtor</span>
                </div>
                <p className="font-bold mt-4 flex gap-2 text-lg">
                    <FaMapMarker/> Location: Nyahururu Town, besides Tower Sacco
                </p>
            </div>
            <div className="basis-1/4 md:mt-0 mt-16">
                <h4 className="font-bold text-lg">Contact Us</h4>
                <p className="flex gap-2 mt-4 items-baseline">
                    <FaInstagram/> Instagram: Golmarkrealtors
                </p>
                <p className="flex gap-2  mt-4 items-baseline">
                    <FaTwitter/> Twitter: Golmarkrealtors
                </p>
                <p className="flex gap-2  mt-4 items-baseline">
                    <AiOutlineMail/> Email: realtorgoldmark@gmail.
                </p>
                <p className="flex gap-2  mt-4 items-baseline">
                    <AiFillPhone/> Phone: 0728746604
                </p>
            </div>
            <div className="basis-1/4 md:mt-0 mt-16">
                <h4 className="font-bold text-lg">Contact Developer</h4>
                <p className="flex gap-2 mt-4 items-baseline">
                    <FaInstagram/> Instagram: riunge_brian
                </p>
               
                <p className="flex gap-2  mt-4 items-baseline">
                    <AiOutlineMail/> Email: riungebrian@gmail.
                </p>
                <p className="flex gap-2  mt-4 items-baseline">
                    <AiFillPhone/> Phone: 0701842846
                </p>
                <p className="flex gap-2  mt-4 items-baseline">
                    <FaRegCopyright/> All Rights Reserved By: Developer
                </p>
            </div>
          </div>
        </footer>
    )
}