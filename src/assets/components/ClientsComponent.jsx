import React from 'react'
import { RiGovernmentLine } from "react-icons/ri";

function ClientsComponent(props) {
  return (
    <div className='flex flex-row space-x-5 my-2'>
    <div className='rounded-lg border border-[#C9E87D] w-12 h-11 flex items-center justify-center p-3'>
    <RiGovernmentLine className='text-xl bg-gradient-to-b from-blue-500 to-green-500 bg-clip-text text-transparent'/>
    {props.Icon &&<img src={props.Icon} className='w-8 h-8'/>}
    
    </div>
    <div className='flex flex-col'>
    
    <h4 className='text-xl mb-2'>{props.title}</h4>
    <p className='text-sm'>{props.description}</p>
    </div>
    </div>
  )
}

export default ClientsComponent