import React from 'react'
import ServiceCard from './ServiceCard'
import { SiAtom } from "react-icons/si";
function OfferSection() {
  return (
    <div className='w-full bigphone:px-20 p-5 phone:p-10 mx-auto min-h-full bg-gray-100 flex flex-row flex-wrap justify-center'>
    <div className='w-[30%] basis-[100%]  phone:basis-[45%] tablet:basis-[30%] h-[60%] p-5 flex flex-col items-start justify-between m-1 rounded '>
    <h3 className='text-4xl mb-2 w-[60%]'>What we offer?</h3>
    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi</p>
    <button className='bg-black rounded-full p-4 py-2 text-white mt-10 text-sm'>Browse Services</button>
    </div>
    <ServiceCard title="Automated Machine " title2="Learning"/>
    <ServiceCard title="Predictive  " title2="Analytics"/>
    <ServiceCard title="Generative AI  & " title2=" AI Consulting"/>
    <ServiceCard title="Cloud and " title2=" AI Solutions"/>
    <ServiceCard title= {"Data "} title2=" Engineering"/>
   
    </div>
  )
}

export default OfferSection