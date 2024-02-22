import Hero from "../../images/hero1.webp"
import { IoIosArrowRoundForward } from "react-icons/io";
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

function HeroSection() {
  return (
    <div className='w-full h-full'>
    <div className=''>
    <Navbar zIndex="10" activeLink="Home"/>
    </div>
     <div className=" w-full h-[90%] bigphone:px-20 phone:p-10 mx-auto bg-white items-center flex flex-col-reverse tablet:flex-row">
<div className='w-full tablet:w-[50%] flex flex-col self-center px-5 phone:px-1'> 
<h3 className='text-start tablet:text-start text-3xl tablet:text-7xl bigphone:leading-[5.3rem] mt-10' style={{fontFamily:"Montserrat"}}>Building Your <span style={{fontFamily:"Montserrat", textDecoration:"underline"}}>AI Ideas</span><span style={{fontFamily:"Montserrat"}} className='italic'> Into Reality.</span> </h3>
<p className='text-start tablet:text-start my-5 text-blacky mx-auto tablet:mx-0 tablet:w-[70%] text-lg '>We're an AI software development company that helps businesses solve complex problems with AI.</p>
<button className="flex space-x-3 p-2 px-3 rounded-full items-center self-center tablet:self-start bg-blacky">
<HashLink to="#contact" smooth><p className="text-xs font-bold text-white">Let's Discuss That Project</p></HashLink>
<IoIosArrowRoundForward className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full w-6 h-6 -rotate-45" />
</button>
</div>
<div className='w-[105%] tablet:w-[50%] h-[105%] -translate-y-[0%] z-10' style={{backgroundImage:`url(${Hero})`, backgroundPosition:"center center", backgroundSize:"cover", backgroundRepeat:"no-repeat", resizeMode:"cover"}}></div>
    </div>
    </div>
    
  )
}

export default HeroSection