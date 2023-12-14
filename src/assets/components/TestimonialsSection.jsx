import React, {useState} from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

const content = [
{
key:1,
title:"University of Machester, UK",
description:`Conducted a whole Scale landscape assessment ot the state of NLP with respect to SDGs and ethical practices related to data collection and application of open source projects.`,
img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mintformations.co.uk%2Fblog%2Fsmall-business-logo-design%2F&psig=AOvVaw0ipfUazNJEIpqVQ2yKeDMs&ust=1702069028686000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCa97yb_oIDFQAAAAAdAAAAABAD",
},
{
key:2,
title:"Oxford",
description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi`,
img:"https://images.pexels.com/photos/326947/pexels-photo-32",
},
{
key:3,
title:"Rwanda Government",
description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi`,
img:"https://images.pexels.com/photos/326947/pexels-photo-32",
},
{
key:3,
title:"The Artemis Company",
description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi`,
img:"https://images.pexels.com/photos/326947/pexels-photo-32",
},
]
function TestimonialsSection() {
    let i=0;
    const [testimonial, setTestimonial] = useState(content[i])
 
    const handleNextSlide = ()=>{
        setTestimonial((prevSlide) => (prevSlide + 1) % content.length)
    }
    const handlePrevSlide = ()=>{
        setTestimonial((prevSlide) => (prevSlide - 1 + content.length) % content.length)
    }
    
    return (
    <div className='w-full py-20 p-10 px-20  bg-gray-100 flex flex-col tablet:flex-row justify-between items-center'>
    <div className='w-full tablet:w-[60%] flex flex-col justify-between'>
    <div className='space-y-10 w-[60%]'>
        <h3 className='text-5xl '>Our Testimonials</h3>
        <p className='text-sm'>The phrase beauty is in the hands of the beholder is an expression that means that what is considered beautiful is subjective and depends on individual perceptions and preferences. It suggests that different people may have different definitions of beauty and that there is no objective standard for what is considered beautiful. </p>
    </div>
    <div className='flex flex-row space-x-5'>
    <button onClick={()=>handleNextSlide()} type='button' className='p-3 rounded-full hover:bg-gray-300'>
    <FaArrowLeft className='text-black'/>
    </button>
    <button  onClick={()=>handleNextSlide()} type='button' className='p-3 rounded-full hover:bg-gray-300'>
        <FaArrowRight className='text-black'/>
    </button>
    </div>
    </div>

    <div className='w-full tablet:w-[40%] flex flex-col justify-between'>
    <div className='bg-[#F0FFB6] h-[80%] p-10 flex flex-col justify-evenly space-y-7'>
    <p>{testimonial.description}</p>
    <p className='font-semibold'>{testimonial.title}</p>
    </div>
    <div className='flex flex-row justify-between h-[20%] mt-10'>
    <div className='flex space-x-1'>
    {content.map((item,index)=>{
        return(
            <div>
             <p className='bg-yellow-600 h-2 w-2 rounded-full' style={{backgroundColor:index == item.key ?"rgb(202 138 4)": "rgb(229 231 235)"}}></p>
            </div>
   

        )

    })}
   
    </div>
    <div className='w-32 h-10 bg-blue-800'></div>
    </div>
    </div>
    </div>
  )
}

export default TestimonialsSection