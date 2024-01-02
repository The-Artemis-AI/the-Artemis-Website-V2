import React, {useState} from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import Manhattan from "../images/manhattan-bg.png"
import mckinsey from "../images/mckinsey-g.png"
import johnHopkins from "../images/john_hopkins-b.png"

const content = [
{
key:0,
title:"University of Machester, UK",
description:`Conducted a whole Scale landscape assessment ot the state of NLP with respect to SDGs and ethical practices related to data collection and application of open source projects.`,
image:Manhattan,
},
{
key:1,
title:"Oxford",
description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi`,
image:johnHopkins,
},
{
key:2,
title:"Rwanda Government",
description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi`,
image:Manhattan,
},
{
key:3,
title:"The Artemis Company",
description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi`,
image:johnHopkins,
},
]
function TestimonialsSection() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
    };
  
    const handlePrevSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
    };
  
    const testimonial = content[activeIndex];
    
    return (
    <div className='w-full py-20 p-5 bigphone:p-10 tablet:px-20  bg-gray-100 flex flex-col tablet:flex-row justify-between items-center'>
    <div className='w-full tablet:w-[60%] flex flex-col justify-between'>
    <div className='space-y-10 bigphone:w-[60%]'>
        <h3 className='text-5xl '>Our Testimonials</h3>
        <p className='tablet:text-base'>The phrase beauty is in the hands of the beholder is an expression that means that what is considered beautiful is subjective and depends on individual perceptions and preferences. It suggests that different people may have different definitions of beauty and that there is no objective standard for what is considered beautiful. </p>
    </div>
    <div className='flex flex-row space-x-5'>
    <button onClick={()=>handlePrevSlide()} type='button' className='p-3 rounded-full hover:bg-gray-300 focus:bg-slate-500'>
    <FaArrowLeft className='text-black'/>
    </button>
    <button  onClick={()=>handleNextSlide()} type='button' className='p-3 rounded-full hover:bg-gray-300 focus:bg-slate-500'>
        <FaArrowRight className='text-black'/>
    </button>
    </div>
    </div>

    <div className='w-full tablet:w-[40%] flex flex-col justify-between'>
    <div className='bg-[#F0FFB6] h-[80%] p-10 flex flex-col justify-evenly space-y-7'>
    <p style={{fontFamily:"Montserrat"}}>{testimonial.description}</p>
    <p className='font-semibold' style={{fontFamily:"Montserrat"}}>{testimonial.title}</p>
    </div>
    <div className='flex flex-row justify-between h-[20%] mt-10'>
    <div className='flex space-x-1'>
    {content.map((item, index) => (
      <div key={item.key}>
        <p className='bg-yellow-600 h-2 w-2 rounded-full' style={{ backgroundColor: activeIndex === index ? "rgb(202 138 4)" : "rgb(229 231 235)" }}></p>
      </div>
    ))}
  </div>
    <div className='w-32 h-10 bg-[#1D8C89]'> 
    <img src={testimonial.image} alt={testimonial.title} className='w-full h-full object-contain grayscale-[100]'/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default TestimonialsSection