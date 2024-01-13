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
    <div className='items-start justify-center flex flex-col w-[40%] phone:w-[15%] space-y-2 mb-5 phone:mb-0'>
   <p className='text-gray-200 font-semibold text-sm'>Main</p>
    <p className='text-sm text-gray-400 text-start'>Home</p>
    <p className='text-sm text-gray-400 text-start'>Services</p>
    <p className='text-sm text-gray-400 text-start'>Products</p>
    <p className='text-sm text-gray-400 text-start'>Media</p>
    <p className='text-sm text-gray-400 text-start'>Talent</p>
    </div>
    <div className='items-start justify-center flex flex-col w-[40%] phone:w-[15%] space-y-2 mb-5 phone:mb-0'>
    <p className='text-gray-200 font-semibold text-sm'>Information</p>
     <p className='text-sm text-gray-400 text-start'>FAQ</p>
     <p className='text-sm text-gray-400 text-start'>About Us</p>
     <p className='text-sm text-gray-400 text-start'>Resources</p>
     <p className='text-sm text-gray-400 text-start'>Sitemap</p>
     </div>

  

    <div className='items-start justify-center flex flex-col w-[40%] phone:w-[15%] space-y-2 mb-5 phone:mb-0'>
   <p className='text-gray-200 font-semibold text-sm'>Legal</p>
    <p className='text-sm text-gray-400 text-start'>Terms</p>
    <p className='text-sm text-gray-400 text-start'>Privacy Policy</p>
    <p className='text-sm text-gray-400 text-start'>Sitemap</p>
    
    </div>
    <div className='items-start justify-center flex flex-col w-[40%] phone:w-[20%]  space-y-2 mb-5 phone:mb-0'>
<div className='flex flex-row space-x-2'>
<Link to="https://www.linkedin.com/company/the-artemis-ai"><FaLinkedinIn className='text-gray-200'/></Link>
<Link to="https://www.facebook.com/profile.php?id=100094257786765"><FaFacebookF className='text-gray-200'/></Link>
<Link to="https://twitter.com/TheArtemis_AI"><BsTwitterX  className='text-gray-200'/></Link>
<Link to="https://www.linkedin.com/company/the-artemis-ai"><RiYoutubeLine className='text-gray-200'/></Link>
</div>    
<div className='flex flex-row space-x-1'><p className='text-sm text-gray-200 text-start font-semibold'>Email:</p><p className='text-sm text-gray-400 text-start'>team@theartemisai.com</p></div>
<div className='flex flex-row space-x-1'><p className='text-sm text-gray-200 text-start font-semibold'>Phone:</p><p className='text-sm text-gray-400 text-start'>+250 798 971 331</p></div>

<div className='flex flex-col mt-3 space-y-1'>

<p className='text-sm text-gray-400 text-start'>Westerwelle Start Up Haus</p>
<p className='text-sm text-gray-400 text-start'>Fair View Building</p>
<p className='text-sm text-gray-400 text-start'>Kigali, Rwanda</p>
</div>
    </div>

    
    </div>
  )
}

export default Footer