import {useState} from 'react'
// import ipad from "../../images/tablet2.png"
import ipad from "../../images/tab.png"
import { FaArrowRight } from 'react-icons/fa'

function ProductsSection() {
  return (
    <div className='w-full h-full px-20 p-10 mx-auto bg-gray-100 items-center flex flex-row'>
    <div className='bg-sky-200 w-full h-full tablet:h-[80%] m-auto flex flex-col-reverse tablet:flex-row justify-between '> 
    <div className='w-[40%] tablet:w-[40%] h-[120%] tablet:[120%] m-auto bg-blue-80 tablet:translate-y-[-10%]'>
        <img src={ipad} className='w-full h-full object-contain'/> 
    </div>
    <div className='w-[60%] h-[60%] my-auto flex flex-col items-center self-center tablet:items-start tablet:justify-between'>
    <h4 className='text-xl text-center mt-5 tablet:mt-1 '>Our Products</h4>
    <h1 className='mt-5 tablet:mt-1 text-6xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent' style={{fontFamily:'Montserrat'}}>Servin 1.0</h1>
    <p className='mt-5 tablet:mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus </p>
    <button className='bg-black rounded-full px-4 py-2 text-white text-sm flex space-x-3 items-center group transition-all  ease-in-out delay-500 overflow-hidden '><p className='bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>Checkout Servin</p><FaArrowRight className='ml-2 text-sm hidden translate-x-[-200px] group-hover:translate-x-0 group-hover:flex transition-all ease-in-out delay-500 text-green-400'/> </button>
    </div>
    </div>
    </div>
  )
}

export default ProductsSection