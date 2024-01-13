import React from 'react'
import Image from "../images/hero1.webp"
import { Link } from 'react-router-dom'

function BlogCard(props) {
  return (
    <a href={"/the-Artemis-Website-V2/media/" + props.Link} className='bigphone:w-[50%] bigphone:basis-[45%] tablet:w-[30%] tablet:basis-[30%] h-[40%] m-1 mb-4 group hover:scale-105 transition-all cursor-pointer'>
    <img src={props.Image} alt='image' className='w-full h-72 object-cover blur-[2px] grayscale-0 group-hover:blur-0'/>
    <p className='text-xl mt-1 font-semibold' style={{fontFamily:'Montserrat'}}>{props.title}</p>
    <p className='text-gray-400 text-sm' style={{fontFamily:'Montserrat'}}>{props.subtitle}</p>
    </a>
  )
}

export default BlogCard