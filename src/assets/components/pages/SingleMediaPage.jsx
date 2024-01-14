import React from 'react'
import Image from "../../images/sproduct2.webp"
import SingleSection from '../HomeSections/ProductsSections/SingleSection'
import ContactSection from '../ContactSection'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import MediaSingleSection from '../HomeSections/MediaSingleSection'
import { Link } from 'react-router-dom'

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function SingleMediaPage
() {
  const { mediaId } = useParams();
  return (
    <div className='p-0 m-0 w-full h-[100vh]'>

    <div className='w-full  pb-5'>
    <Navbar activeLink={"Media"}/>
    <div className=" w-full bigphone:h-[90%] mt-10 mx-autoitems-center flex flex-col justify-between">
        <div className='w-[85%] mx-auto flex flex-row items-center justify-between'>
    <div className='tablet:w-[60%] my-2'>
  {/*<p className='text-xl my-2 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'> {capitalize(mediaId )}</p> */}
     <h3 className='text-3xl bigphone:text-5xl' style={{fontFamily:'Montserrat'}}>Analogical Prompting: 
     <span className='underline text-3xl bigphone:text-5xl' style={{fontFamily:'Montserrat'}}> AI's New Learning Strategy</span></h3>
    </div>
   
    </div>
    <div className=' w-full h-[100px] bigphone:h-[30vh] grayscale-[100] bg-gray-200 my-3 bigphone:my-10' style={{backgroundImage:`url(${Image})`,  backgroundPosition:"center center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}> </div>
    </div>
    </div>
    <Link to= "/the-Artemis-Website-V2/media" className='flex flex-row items-center py-1 space-x-5 my-3 bigphone:my-10 px-5 bigphone:px-20 '>
    <FaArrowLeft/>
    <p className=' text-sm bigphone:text-xl  '>Back to Media Page</p>
    </Link>
    <MediaSingleSection/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default SingleMediaPage
