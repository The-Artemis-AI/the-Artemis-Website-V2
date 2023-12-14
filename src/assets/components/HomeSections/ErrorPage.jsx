// import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Robot from "../../images/robot-assistant-sad.png"
import { Link } from 'react-router-dom'
import ContactSection from '../ContactSection'
import Footer from '../Footer'

function ErrorPage() {
  return (
    <div>
    <div className='w-full h-[120%] pb-5 flex flex-col items-center justify-center'>
    <img src={Robot} alt='sad robot' className='w-44 h-64 my-2'/>
    <h3 className='text-3xl my-2'> Oh no, we can't seem to find your Page</h3>
    <p className='my-2'>Looks like our search algorith may have been underfit</p>

    <a href="/" className="flex space-x-3 p-2 px-3 rounded-full items-center self-center mx-auto tablet:self-start my-2">
<p className="text-xs font-bold text-blacky">Go Back</p>
<IoIosArrowRoundForward className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full w-6 h-6 -rotate-45 self-center" />
</a>
    </div>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default ErrorPage