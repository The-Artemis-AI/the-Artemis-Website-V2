import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { RiGovernmentLine } from "react-icons/ri";
import Academia from "../images/academia.svg"
import Gov from "../images/government.svg"
function ClientsComponent(props) {
  return (
    <div className='flex flex-row space-x-5 my-2'>
    <div className='rounded-lg border border-[#C9E87D] w-16 h-11 flex items-center justify-center p-3'>
    <RiGovernmentLine className='text-xl bg-gradient-to-b from-blue-500 to-green-500 bg-clip-text text-transparent'/>
    {props.Icon &&<img src={props.Icon} className='w-10 h-10'/>}
    
    </div>
    <div className='flex flex-col'>
    
    <h4 className='text-xl mb-2'>{props.title}</h4>
    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repud. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repud</p>
    </div>
    </div>
  )
}

export default ClientsComponent