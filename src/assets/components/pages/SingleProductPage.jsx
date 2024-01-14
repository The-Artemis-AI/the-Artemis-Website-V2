import React from 'react'
import Image from "../../images/sproduct2.webp"
import SingleSection from '../HomeSections/ProductsSections/SingleSection'
import ContactSection from '../ContactSection'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import Image2 from "../../images/deepmind.webp"
import { Link } from 'react-router-dom'
 
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function SingleProductPage() {
  const { productId } = useParams();
  // const productId  = "servin";
  return (
    <div className='p-0 m-0 w-full h-[100vh]'>

    <div className='w-full h-[80%] pb-5'>
    <Navbar activeLink={"Products"}/>
    <div className=" w-full h-[90%] mt-10 mx-auto bg-white items-center flex flex-col justify-betwee">
        <div className=' bigphone:w-[85%] mx-auto flex flex-col bigphone:flex-row items-center justify-between'>
    <div className='w-full bigphone:w-[50%] my-2 px-5 bigphone:px-1'>
     <p className='text-xl tablet:text-2xl my-2 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'> {capitalize(productId)}</p>
     <h3 className='text-3xl big-phone:text-5xl' style={{fontFamily:'Montserrat'}}>{capitalize(productId)}, Our<span className='underline' style={{fontFamily:'Montserrat'}}> First Official Product</span></h3>
    </div>
    <div className='w-full bigphone:w-[50%] px-5 bigphone:px-1 my-2'>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
    </div>
    <div className='w-full h-[20%] grayscale-[100] bg-gray-200 my-10' style={{backgroundImage:`url(${Image})`,  backgroundPosition:"center center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}> </div>
    </div>
    </div>
    <Link to= "/the-Artemis-Website-V2/products" className='flex flex-row items-center space-x-5 my-10 px-5 bigphone:px-20'>
    <FaArrowLeft/>
    <p className=' text-sm bigphone:text-xl '>Back to Product Page</p>
    </Link>
    <SingleSection 
    title={capitalize(productId)}
    Image={Image2}
    />
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default SingleProductPage