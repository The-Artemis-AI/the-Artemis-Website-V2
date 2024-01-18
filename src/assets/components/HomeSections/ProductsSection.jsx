import {useState} from 'react'
// import ipad from "../../images/tablet2.webp"
import ipad from "../../images/tab.webp"
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ProductsSection() {
  return (
    <div className='w-full h-full bigphone:px-20 phone:p-10 p-1 mx-auto bg-gray-100 items-center flex flex-row'>
    <div className='bg-sky-200 px-5 w-full h-full tablet:h-[80%] m-auto flex flex-col-reverse tablet:flex-row justify-between '> 
    <div className='w-[80%] tablet:w-[40%] h-[40%] tablet:h-[100%] bigphone:h[120%] m-auto bg-blue-80 tablet:translate-y-[-10%]'>
        <img src={ipad} className='w-full h-[100%] tablet:h-full object-contain'/> 
    </div>
    <div className='tablet:w-[80%] bigphone:w-[60%] tablet:ht-[70%] my-auto flex flex-col items-center self-center tablet:items-start tablet:justify-center tablet:space-y-4  tablet:ml-4'>
    <h4 className='text-[1.3rem] text-center mt-5 tablet:mt-1 '>Our Products</h4>
    <h1 className='mt-5 tablet:mt-1 text-3xl bigphone:text-4xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent' style={{fontFamily:'Montserrat'}}>Seyvin</h1>
    <p className='laptop:text-[1.1em] mt-5 tablet:mt-1 tablet:w-[80%]'>Introducing our flagship AI-powered document reader, revolutionizing data interaction by allowing users to
     'chat' with their data. It seamlessly interprets and extracts valuable insights from various documents, making data analysis conversational and user-friendly. With Seyvin, 
     data becomes an engaging dialogue, unlocking new levels of understanding and accessibility. </p>
    <Link to={"/the-Artemis-Website-V2/products/Seyvin"}><button className='bg-black rounded-full px-4 py-2 text-white text-sm flex space-x-3 items-center group transition-all  ease-in-out delay-500 overflow-hidden mt-5'><p className='bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>Checkout Servin</p><FaArrowRight className='ml-2 text-sm hidden translate-x-[-200px] group-hover:translate-x-0 group-hover:flex transition-all ease-in-out delay-500 text-green-400'/> </button></Link>
    </div>
    </div>
    </div>
  )
}

export default ProductsSection