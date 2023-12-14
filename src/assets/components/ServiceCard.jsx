import React from 'react'
import { SiAtom } from "react-icons/si";
import { FaArrowRight } from 'react-icons/fa'
function ServiceCard(props) {
  return (
    <div className='w-[30%] basis-[100%] bg-white phone:basis-[45%]  tablet:basis-[30%] cursor-pointer hover:scale-105  transition-all ease-in-out delay-150 hover:-translate-y-1 duration-300 shadow-md border border-gray-200 h-[60%] p-5 flex flex-col items-start justify-between m-1 rounded group hover:bg-[#F0FFB6]'>
    <div className='flex flex-row justify-between items-center w-full mb-5'>
    <div className='rounded-lg border border-gray-600 w-12 h-12 flex items-center justify-center p-3 group-hover:bg-blacky transition-all ease-in-out delay-150'>
    <SiAtom className='text-3xl text-gray-500  group-hover:text-white'/></div>
    <FaArrowRight className='text-gray-300 group-hover:text-black group-hover:-rotate-45 transition-all ease-in-out delay-150'/>
    </div>
    <div>
    <h3 className='text-2xl w-[70%]'>{props.title}</h3>
    <p className='text-sm my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  
    </div>
    
  )
}

export default ServiceCard