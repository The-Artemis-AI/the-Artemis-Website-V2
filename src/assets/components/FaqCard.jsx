import React, {useState} from 'react'
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";

function FaqCard() {

    const [showResponse, setShowResponse] = useState(false)
  return (
    <div onClick={()=>setShowResponse(!showResponse)} className='w-full  p-5 my-2 cursor-pointer transition-all' style={{backgroundColor:showResponse?"#F0FFB6": "white", border:showResponse?"none":"1px solid rgba(0,0,0,0.1)"}}>
    <div className='flex flex-row justify-between items-center transition-all'>
    <p className='font-semibold text-sm phone:text-[1em]'>Lore ipsum dolor sit amet consecteur. In eu aliquet arci lobortis aenaes ?</p>
   
   <button onClick={()=>setShowResponse(!showResponse)} className='w-[10%  flex flex-row justify-center items-center] p-1 rounded-full'> {showResponse? <FiMinus className='text-xl w-full text-yellow-600'/>:  <IoIosAdd className='text-xl w-full'/>}</button> 
    </div>
   {showResponse && <div className='w-full delay-100 ease-in-out transition-all'>
    <p className='text-sm phone:text-[1em] w-[90%] mt-2'> Lore ipsum dolor sit amet consecteur. In eu aliquet arci lobortis aenaes Lore ipsum dolor sit amet consecteur. In eu aliquet arci lobortis aenaes
    Lore ipsum dolor sit amet consecteur. In eu aliquet arci lobortis aenaes Lore ipsum dolor sit amet consecteur. In eu aliquet arci lobortis aenaes</p>
    </div>}
    </div>
  )
}

export default FaqCard