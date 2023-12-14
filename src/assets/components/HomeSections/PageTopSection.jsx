import React from 'react'
import Navbar from '../Navbar'
import Deepmind from "../../images/deepmind.jpg"

function PageTopSection(props) {
  return (
    <div className='w-full h-[130%] pb-5'>
    <Navbar activeLink={props.activeLink}/>
    <div className=" w-full h-[90%] mt-10 mx-auto bg-white items-center flex flex-col justify-between">
        <div className='w-[85%] mx-auto flex flex-row items-center justify-between'>
    <div className='w-[50%] my-2'>
     <p className='text-xl my-2 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'>{props.title}</p>
     <h3 className='text-5xl' style={{fontFamily:'Montserrat'}}>{props.firstPart}<span className='underline' style={{fontFamily:'Montserrat'}}>{props.underlined}</span> {props.lastPart}</h3>
    </div>
    <div className='w-[50%]'>
     <p>{props.content}</p>
    </div>
   
    </div>
    <div className='w-full h-[65%] bg-gray-200' style={{backgroundImage:`url(${props.Image})`,  backgroundPosition:"center center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}> </div>
    
    </div>

    </div>
  )
}

export default PageTopSection