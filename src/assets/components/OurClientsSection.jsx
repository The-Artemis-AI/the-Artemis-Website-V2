import React from 'react'
import people from "../images/people.jpg"
import ClientsComponent from './ClientsComponent'

function OurClientsSection() {
  return (
    <div className='w-full min-h-full tablet:h-full p-10 px-20  bg-white flex flex-col tablet:flex-row justify-between items-center'>
    <div className="h-full w-full tablet:w-[50%] object-contain" style={{backgroundImage:`${people}`}}>
    <img src={people} className='w-full h-full object-contain'/>
    </div>
    <div className='w-full tablet:w-[40%] flex flex-col justify-between'>
    <div className='mb-4'>
    <h3 className='text-5xl mb-3'> Our Clients</h3>
    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi</p>
    </div>
    <div className='flex flex-col ]'>
    <ClientsComponent/>
    <ClientsComponent/>
    <ClientsComponent/>
    </div>
    </div>
    </div>
  )
}

export default OurClientsSection