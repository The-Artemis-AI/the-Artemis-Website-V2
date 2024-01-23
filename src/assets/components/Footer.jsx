import Logo from "../images/logo-color.svg"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const date= new Date()
let year = date.getFullYear()
function Footer() {
  return (
    <div className='bg-[#262626] w-full p-5 px-10 flex flex-row flex-wrap justify-between flex-1'>
  
      <div className='items-start justify-center flex flex-col w-[90%] mb-5 tablet:mb-0 tablet:w-[30%] space-y-2'>
    <img alt="logo" src={Logo}  className='w-10 h-10'/>
    <p className='text-sm text-gray-400 text-start w-[70%]'>Building Your AI Ideas Into Reality</p>
    <p className='text-sm text-gray-400'>&copy; Copyright {year}</p>
    </div>
    <div className='items-start justify-center flex flex-col w-[40%] bigphone:w-[15%] space-y-2 mb-5 phone:mb-0'>
   <p className='text-gray-200 font-semibold text-sm'>Main</p>
    <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="/">Home</Link></p>
    <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="/the-Artemis-Website-V2/services">Services</Link></p>
    <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="/the-Artemis-Website-V2/products">Products</Link></p>
    <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="/the-Artemis-Website-V2/media">Media</Link></p>
    <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="/the-Artemis-Website-V2/contact">Contact</Link></p>
    </div>
    <div className='items-start justify-center flex flex-col w-[40%] bigphone:w-[15%] space-y-2 mb-5 phone:mb-0'>
    <p className='text-gray-200 font-semibold text-sm'>Information</p>
     <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="/the-Artemis-Website-V2/FAQ">FAQ</Link></p>
     <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="/the-Artemis-Website-V2/about">About Us</Link></p>
     <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">Resources</Link></p>
     <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">Terms</Link></p>
     <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="/the-Artemis-Website-V2/privacyPolicy">Privacy Policy</Link></p>
     <p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="">Sitemap</Link></p>
     </div>

    <div className='items-start justify-center flex flex-col w-[80%] bigphone:w-[20%] mt-4 bigphone:mt-1 space-y-2 mb-5 phone:mb-0'>
<div className='flex flex-row space-x-2'>
<Link to="https://www.linkedin.com/company/the-artemis-ai"><FaLinkedinIn className='text-gray-200'/></Link>
<Link to="https://www.facebook.com/profile.php?id=100094257786765"><FaFacebookF className='text-gray-200'/></Link>
{/*
<Link to="https://twitter.com/TheArtemis_AI"><BsTwitterX  className='text-gray-200'/></Link>
  <Link to="https://www.linkedin.com/company/the-artemis-ai"><RiYoutubeLine className='text-gray-200'/></Link>*/}
</div>    
<div className='flex flex-row space-x-1'><p className='text-sm text-gray-200 text-start font-semibold'>Email:</p><p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to={"mailto:team@theartemisai.com"}>team@theartemisai.com</Link></p></div>
<div className='flex flex-row space-x-1'><p className='text-sm text-gray-200 text-start font-semibold'>Phone:</p><p className='text-sm text-gray-400 text-start hover:text-gray-200 transition-all'><Link to="tel:+250 798 971 331"> +250 798 971 331</Link></p></div>

<div className='flex flex-col mt-3 space-y-1'>

<p className='text-sm text-gray-400 text-start'><Link to="https://www.google.com/maps/place/The+Artemis+AI/@-1.9556488,30.094014,17.02z/data=!4m6!3m5!1s0x19dca78d5fb09e7f:0xd780d5ab6a2908a2!8m2!3d-1.9556339!4d30.0965828!16s%2Fg%2F11v5dqfrcg?entry=ttu">Westerwelle Start Up Haus</Link></p>
<p className='text-sm text-gray-400 text-start'>Fair View Building</p>
<p className='text-sm text-gray-400 text-start'>Kigali, Rwanda</p>
</div>
    </div>

    
    </div>
  )
}

export default Footer