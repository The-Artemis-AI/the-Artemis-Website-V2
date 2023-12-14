import React from 'react'
import { IoBookOutline } from "react-icons/io5";
function ClientsComponent() {
  return (
    <div className='flex flex-row space-x-5 my-2'>
    <div className='rounded border border-gray-300 w-20 h-10 flex items-center justify-center p-3'><IoBookOutline className='text-xl text-gray-500'/></div>
    <div className='flex flex-col'>
    <h4 className='text-xl mb-2'>Academia</h4>
    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repud. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repud</p>
    </div>
    </div>
  )
}

export default ClientsComponent