import React, {useState} from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import Manhattan from "../images/manhattan-bg.webp"
import mckinsey from "../images/mckinsey-g.webp"
import johnHopkins from "../images/john_hopkins-b.webp"
import MinICT from "../images/MINICT.webp"
import oxford from "../images/oxford.webp"
import machester from "../images/manchester.webp"
import apiday from "../images/apiday.webp"


const content = [
{
key:0,
title:"University of Machester, UK",
description:`Our collaboration with this AI firm was transformative. They conducted a comprehensive assessment of NLP's state concerning Sustainable Development Goals (SDGs) and scrutinized ethical practices in data collection and the use of open-source projects. Their insights were profound and actionable, paving the way for more ethical and impactful AI applications in our projects.`,
image:machester,
},
{
key:1,
title:"University of Oxford",
description:`This team’s expertise in NLP and AI ethics is unparalleled. They performed an extensive landscape assessment focused on NLP, aligning with SDGs and ethical data practices. Their analysis and recommendations have been crucial in guiding our open-source projects, ensuring they are innovative and ethically sound.`,
image:oxford,
},
{
key:2,
title:"Rwanda Ministry of ICT & Innovation",
description:`Their data-driven approach was a game-changer for our environmental project. They meticulously analyzed recycling habits and then crafted strategies that have significantly boosted our recycling initiatives. Their insights and recommendations were not just data-centric but also incredibly practical and effective in driving real-world changes.`,
image:MinICT,
},
{
key:3,
title:"APIDAY",
description:`Creating a chatbot with their team has revolutionized our customer support. The bot’s ability to swiftly retrieve information from our support documents has enhanced our agents' capabilities in assisting clients. It's not just a tool; it's like having an extra, highly efficient team member who's always ready to help.`,
image:apiday,
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
        <div>
                <p className='tablet:text-base'>Client Success Stories Powered by Our AI Expertise</p>
        <p className='tablet:text-base'>Our success is defined not just by completed projects but by the impact we bring to the world. With unwavering determination, we see AI as a force to reshape industries, solve global challenges, and improve lives, and we're dedicated to pushing the boundaries of innovation for a more sustainable and equitable future.</p>
        </div>

    </div>
    <div className='flex flex-row space-x-5 my-2'>
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
    <p style={{fontFamily:"Montserrat"}} className='text-sm bigphone:text-base'>{testimonial.description}</p>
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
    <div className='w-32 h-10 border border-[#1D8C89] bg-white'> 
    <img src={testimonial.image} alt={testimonial.title} className='w-full h-full object-contain grayscale-[100]'/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default TestimonialsSection