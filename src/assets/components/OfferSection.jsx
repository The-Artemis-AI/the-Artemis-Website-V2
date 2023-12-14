import React from 'react'
import ServiceCard from './ServiceCard'
import { SiAtom } from "react-icons/si";
function OfferSection() {
  return (
    <div className='w-full px-20 p-10 mx-auto min-h-full bg-gray-100 flex flex-row flex-wrap justify-center'>
    <div className='w-[30%] basis-[100%]  phone:basis-[45%] tablet:basis-[30%] h-[60%] p-5 flex flex-col items-start justify-between m-1 rounded '>
    <h3 className='text-4xl mb-2 w-[60%]'>What we offer?</h3>
    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi</p>
    <button className='bg-black rounded-full p-4 py-2 text-white mt-10 text-sm'>Browse Services</button>
    </div>
    <ServiceCard title="Automated Machine Learning"/>
    <ServiceCard title="Predictive Analytics"/>
    <ServiceCard title="Generative AI and Consulting"/>
    <ServiceCard title="Cloud and AI Solutions"/>
    <ServiceCard title= {"Data Engineering" + " and Processing" }/>
   
    </div>
  )
}

export default OfferSection