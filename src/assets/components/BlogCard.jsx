import React from 'react'
import Image from "../images/hero1.webp"
import { Link } from 'react-router-dom'

function BlogCard(props) {
  return (
    <Link to={"/the-Artemis-Website-V2/media/" + props.Link} className='bigphone:w-[50%] bigphone:basis-[45%] tablet:w-[30%] tablet:basis-[30%] h-[40%] m-2  mb-4 group hover:scale-[1.03] transition-all cursor-pointer'>
    <img src={props.Image} alt='image' className='w-full h-72 object-cover phone:blur-[2px] grayscale-0 group-hover:blur-0'/>
    <p className='text-xl mt-1 font-semibold' style={{fontFamily:'Montserrat'}}>{props.title}</p>
    <p className='text-gray-400 text-sm' style={{fontFamily:'Montserrat'}}>{props.subtitle}</p>
    </Link>
  )
}

export default BlogCard