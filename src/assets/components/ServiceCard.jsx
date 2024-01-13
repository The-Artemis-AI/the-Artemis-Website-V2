import React from 'react'
import { SiAtom } from "react-icons/si";
import { FaArrowRight } from 'react-icons/fa'
import Icon from "../images/offer-vector.svg"
import { Link } from 'react-router-dom';
function ServiceCard(props) {
  return (
    <Link to="/the-Artemis-Website-V2/services"className='w-[30%] basis-[100%] bg-white phone:basis-[45%]  tablet:basis-[30%] cursor-pointer hover:scale-105  transition-all ease-in-out delay-150 hover:-translate-y-1 duration-300 shadow-md border border-gray-200 h-[60%] p-5 flex flex-col items-start justify-between m-1 rounded group hover:bg-[#F0FFB6]'>
    <div className='flex flex-row justify-between items-center w-full mb-5'>
    <div className='rounded-lg border border-[#C9E87D] w-12 h-12 flex items-center justify-center p-3 group-hover:bg-blacky transition-all ease-in-out delay-150'>
    <img src={Icon}/>

    </div>
    <FaArrowRight className='text-gray-300 group-hover:text-black group-hover:-rotate-45 transition-all ease-in-out delay-150'/>
    </div>
    <div className='my-5'>
    <h3 className='text-2xl w-[70%] font-bold'>{props.title}</h3>
    <h3 className='text-2xl w-[70%] font-bold'>{props.title2}</h3>
    <p className='text-sm my-2'>{props.content}</p>
    </div>
  
    </Link> 
    
  )
}

export default ServiceCard