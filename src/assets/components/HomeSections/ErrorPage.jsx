// import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useHistory } from 'react-router-dom';
import Robot from "../../images/robot-assistant-sad.webp"
import { Link } from 'react-router-dom'
import ContactSection from '../ContactSection'
import Footer from '../Footer'
import Navbar from '../Navbar'

function ErrorPage() {

  let history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <div>
    <Navbar />
    <div className='w-full bigphone:h-[120%] pb-5 flex flex-col px-5 items-center justify-center'>
    <img src={Robot} alt='sad robot' className='w-32 h-44 bigphone:w-44 bigphone:h-64 my-2 transition-all'/>
    <h3 className='text-xl bigphone:text-3xl text-center my-2'> Oh no, we can't seem to find your Page</h3>
    <p className='my-2 m-[80%] mx-auto text-xs bigphone:text-sm text-center'>Looks like our search algorith may have been underfit</p>

    <Link to="/the-Artemis-Website-V2" ><button onClick={handleClick} className="flex space-x-3 p-2 px-3 rounded-full items-center self-center bg-blacky">
<p className="text-xs font-bold text-white">Go Back</p>
<IoIosArrowRoundForward className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full w-6 h-6 -rotate-45 self-center" />
</button></Link>
    </div>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default ErrorPage