import React from 'react'
import Image from "../../images/sproduct2.webp"
import SingleSection from '../HomeSections/ProductsSections/SingleSection'
import ContactSection from '../ContactSection'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import PrivacyPolicySection from '../PrivacyPolicySection'
import { Link } from 'react-router-dom'

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function PrivacyPolicy
() {
  return (
    <div className='p-0 m-0 w-full h-[100vh] monte'>

    <div className='w-full  pb-5'>
    <Navbar activeLink={"PrivacyPolicy"}/>
    <div className=" w-full bigphone:h-[90%] mt-10 mx-auto items-center flex flex-col justify-between">
        <div className='w-[85%] mx-auto flex flex-col items-start justify-between'>
    <div className='tablet:w-[60%] my-2'>
  {/*<p className='text-xl my-2 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'> {capitalize(mediaId )}</p> */}
     <h3 className='text-3xl bigphone:text-5xl' style={{fontFamily:'Montserrat'}}>Our  
      <span className='underline text-3xl bigphone:text-5xl' style={{fontFamily:'Montserrat'}}> Privacy Policy</span></h3>
    </div>
    </div>
    </div>
    </div>
    <div className=" w-full  my-2   flex flex-col px-5 phone:px-10 bigphone:px-20">
    <p style={{fontFamily:"Montserrat"}}>Last Updated: <span className='font-semibold' style={{fontFamily:"Montserrat"}}>23/January/2023</span></p>
    
    </div>

    <PrivacyPolicySection/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default PrivacyPolicy
