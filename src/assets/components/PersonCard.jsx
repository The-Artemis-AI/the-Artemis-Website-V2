import React from 'react'
import Image from "../images/media.webp"
import { Link } from 'react-router-dom'

function PersonCard(props) {
  return (
    <a href={""} className='basis-[100%] bigphone:basis-[40%] bigphone:w-[50%]  tablet:w-[30%] tablet:basis-[23%]   h-[40%] m-1 mb-4 group hover:scale-100 transition-all cursor-pointer '>
    <img src={props.Image} alt='image' className='w-full h-64 object-cover group-hover:scale-105 transition-all grayscale-[100] group-hover:grayscale-0'/>
    <p className='text-lg mt-1 font-semibold' style={{fontFamily:'Montserrat'}}>{props.title}</p>
    <p className='text-gray-400 text-sm' style={{fontFamily:'Montserrat'}}>{props.subtitle}</p>
    </a>
  )
}

export default PersonCard

// ='bigphone:w-[50%] bigphone:basis-[45%] tablet:w-[30%] tablet:basis-[30%] h-[40%] m-1 mb-4 group hover:scale-105 transition-all cursor-pointer'