import React from 'react'
import ServiceCard from './ServiceCard'
import { SiAtom } from "react-icons/si";
import { Link } from 'react-router-dom';
function OfferSection() {

  const data = [
    {
      title:"Data",
      title2:"Analytics",
      content:"Artemis AI specializes in transforming raw data into actionable insights by utilizing advanced analytical techniques and AI algorithms. Through this service, businesses can gain valuable intelligence and make informed decisions to drive growth and innovation in their environment.",
    },
    {
      title:"Generative AI",
      title2:"Solutions",
      content:" We offer custom generative AI solutions tailored to meet specific business needs. These solutions leverage the power of generative AI to produce unique and creative outputs, such as images, text, and music, to enhance product development, content creation, and user experience.",
    },
    {
      title:"AI Software",
      title2:"Development",
      content:"With a focus on customization, Artemis AI develops AI software to address the unique requirements of each business. By leveraging cutting-edge AI technologies, they build tailored software solutions that automate processes, optimize operations, and drive efficiency across various industry domains.",
    },
    {
      title:"AI Training &",
      title2:"Consultancy",
      content:"We empower teams with AI knowledge and expertise through comprehensive training and consultancy services. Businesses can enhance their internal capabilities and understanding of AI, enabling them to effectively integrate AI into their operations and develop AI-focused strategies.",
    },
    {
      title:"Web & Mobile",
      title2:"App Development",
      content:"We specializes in building web and mobile applications integrated with AI capabilities. By incorporating AI into app development, businesses can deliver intelligent and personalized user experiences, automate tasks, and leverage data-driven insights to drive better user engagement and business outcomes.",
    },
  ]

  return (
    <div className='w-full bigphone:px-20 p-5 phone:p-10 mx-auto min-h-full bg-gray-100 flex flex-row flex-wrap justify-center'>
    <div className='w-[30%] basis-[100%]  phone:basis-[45%] tablet:basis-[30%] h-[60%] p-5 flex flex-col items-start justify-between m-1 rounded '>
    <h3 className='text-4xl mb-2 w-[60%]'>What we offer?</h3>
    <p className='text-sm'>Tailored AI Solutions for Your Needs</p>
    <Link to="/the-Artemis-Website-V2/services"><button className='bg-black rounded-full p-4 py-2 text-white mt-10 text-sm'>Browse Services</button></Link>
    </div>

    {data.map((item, index)=>{
      return(
        <ServiceCard
        key={index}
        title= {item.title}
       title2={item.title2} content={item.content}/>
      )
    })}

{/*
    <ServiceCard
     title="Data
    " title2="Analytics" content="Transforming Data into Actionable Insights"/>

    <ServiceCard
     title="Generative  " title2="AI Solutions " content="Adopting Generative AI for Your Business Needs "/>

    <ServiceCard
     title="AI Software " title2=" Development" content="Customizing AI Software to Your Unique Requirements"/>

    <ServiceCard 
    title="AI Training &" title2=" Consultancy" content="Empowering Teams with AI Knowledge and Expertise"/>

    <ServiceCard
     title= {"Web & Mobile "} title2=" App Development" content="Building AI-Integrated Web and Mobile Applications"/>
  */}

    </div>
  )
}

export default OfferSection