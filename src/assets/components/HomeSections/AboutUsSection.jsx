import React from "react";
import Manhattan from "../../images/manhattan.png"
import Mckinsey from "../../images/mckinsey.png"
import Birmingham from "../../images/birmingham.png"
import Hopkins from "../../images/john_hopkins.jpg"
import Genome from "../../images/nhgri.svg"
import { IoIosArrowRoundForward } from "react-icons/io";


function AboutUsSection() {
  return (
    <div className="w-full h-full px-20 p-10 mx-auto bg-white items-center flex flex-col">
    <div className="slider h-[20%] w-full tablet:w-[80%] mx-auto flex flex-row items-center justify-between">
    <img src={Mckinsey} alt="McKinsey" className="w-20 h-10 tablet:image "/>
    <img src={Birmingham} alt="Birmingham" className="w-20 h-10 tablet:image"/>
    <img src={Hopkins} alt="Hopkins" className="w-20 h-10 tablet:image"/>
    <img src={Genome} alt="NHGRI" className="w-20 h-10 tablet:image"/>
    <img src={Manhattan} alt="Manhattan Institute" className="w-20 h-10 tablet:image"/>
    </div>
    <div className="w-40 bg-gradient-to-r from-blue-500 to-green-500 h-[2px] my-10 rounded-full"></div>
    <div className="w-[80%] mx-auto items-center flex- flex-col justify-center" >
    <p style={{fontFamily:"Montserrat"}} className="text-xl leading-loose text-center w-full tablet:w-[80%] mx-auto">Artemis AI is a global technology company <span className="font-semibold underline" style={{fontFamily:"Montserrat"}} >specialising in AI  software solutions.</span> We partner with governments, universities, private companies, and entreprenuers to <span style={{fontFamily:"Montserrat"}} className="italic">transform visionary AI ideas into reality.</span> Join us in shaping the future of technology.</p>
    <button className="flex space-x-3 p-2 px-3 rounded-full items-center my-10 mx-auto">
    <p className="text-xs font-bold">Learn More About Us</p>
    <IoIosArrowRoundForward className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full w-6 h-6 -rotate-45" />
    </button>
    </div>
    </div>
  );
}

export default AboutUsSection;
