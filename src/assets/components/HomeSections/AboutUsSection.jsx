import React from "react";
import Manhattan from "../../images/manhattan.webp"
import Mckinsey from "../../images/mckinsey.webp"
import Birmingham from "../../images/birmingham.webp"
import Hopkins from "../../images/john_hopkins.webp"
import Genome from "../../images/nhgri.svg"
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import MinICT from "../../images/MINICT.webp"
import apiday from "../../images/apiday.webp"
import seyvin from "../../images/seyvin.webp"
import CMU from "../../images/CMU.webp"
import oxford from "../../images/oxford.webp"
import stealth from "../../images/stealth.webp"
import manchester from "../../images/manchester.webp"


function AboutUsSection() {
  return (
    <div className="w-full phone:h-auto bigphone:px-20 p-10 mx-auto bg-white items-center flex flex-col">
    <div className="slider bigphone:h-[20%] w-full tablet:w-[80%] mx-auto flex flex-row items-center justify-between slide-in">
    <img src={MinICT} alt="McKinsey" className="w-12 h-8 phone:w-20 phone:h-10 tablet:h-20 tablet:w-40 object-contain grayscale hover:grayscale-0 transition-all"/>
    <img src={apiday} alt="Birmingham" className="w-12 h-8 phone:w-20 phone:h-10 tablet:h-20 tablet:w-40 object-contain grayscale hover:grayscale-0 transition-all"/>
    <img src={CMU} alt="Hopkins" className="w-12 h-8 phone:w-20 phone:h-10 tablet:h-20 tablet:w-40 object-contain grayscale hover:grayscale-0 transition-all"/>
    <img src={oxford} alt="NHGRI" className="w-12 h-8 phone:w-20 phone:h-10 tablet:h-20 tablet:w-40 object-contain grayscale hover:grayscale-0 transition-all"/>
    <img src={manchester} alt="Manhattan Institute" className="w-12 h-8 phone:w-20 phone:h-10 tablet:h-20 tablet:w-40 object-contain grayscale hover:grayscale-0 transition-all"/>
    </div>
    <div className="w-40 bg-gradient-to-r from-blue-500 to-green-500 h-[2px] my-10 rounded-full"></div>
    <div className="w-full bigphone:w-[80%] mx-auto items-center flex- flex-col justify-center" >
    <p style={{fontFamily:"Montserrat"}} className="text-lg bigphone:text-xl leading-loose text-center w-full bigphone:w-[80%] mx-auto slide-in">Artemis AI is a global technology company <span className="font-semibold underline" style={{fontFamily:"Montserrat"}} >specialising in AI  software solutions.</span> We partner with governments, universities, private companies, and entreprenuers to <span style={{fontFamily:"Montserrat"}} className="italic">transform visionary AI ideas into reality.</span> Join us in shaping the future of technology.</p>
    <button className="flex space-x-3 p-2 px-3 rounded-full items-center my-10 mx-auto border-blacky/100 border hover:bg-blacky group">
    <Link to="/the-Artemis-Website-V2/about"><p className="text-xs font-bold group-hover:text-white transition-all slide-in">Learn More About Us</p></Link>
    <IoIosArrowRoundForward className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full w-6 h-6 -rotate-45" />
    </button>
    </div>
    </div>
  );
}

export default AboutUsSection;
