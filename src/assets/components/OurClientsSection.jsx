import React from 'react'
import people from "../images/people3.webp"
import ClientsComponent from './ClientsComponent'
import Academia from "../images/academia.svg"
import Government from "../images/government.svg"
import Private  from "../images/private-sector.svg"

function OurClientsSection() {
const clients = [
 { title: "Academics", Image:Academia, description:"Elevating AI Research & Learning in Africa"},
 { title: "Startups", Image:Academia, description:"Fueling Startup Innovation with Scalable MVP Development"},
 { title: "Companies", Image:Private, description:"Enhance Existing Systems with Customized AI Integration"},
 { title: "Non-profits", Image:Academia, description:"AI-Driven Solutions for a Greater Social Impact"},
 { title: "Governments", Image:Government, description:"Enhancing Public Services with Secure AI Applications"},
]


  return (
    <div className='w-full min-h-full tablet:h-full p-5 bigphone:p-10 tablet:px-20  bg-white flex flex-col tablet:flex-row justify-between items-center'>
    <div className="h-full w-full tablet:w-[50%] object-contain" style={{backgroundImage:`${people}`}}>
    <img src={people} className='w-full tablet:h-full h-[60%] object-contain'/>
    </div>
    <div className='w-full mt-5 tablet:mt-1 tablet:w-[40%] flex flex-col justify-between'>
    <div className='mb-4'>
    <h3 className='text-5xl mb-3'> Our Clients</h3>
    <p className='text-sm'>Empowering a Diverse Range of Clients Globally</p>
    </div>
    <div className='flex flex-col space-y-[3vh]'>

    {clients.map((item, index)=>{
      return(
        <ClientsComponent 
        key={index}
        Icon ={item.Image}
        title= {item.title}
        description={item.description}
        />
      )
    })

    }
   
    </div>
    </div>
    </div>
  )
}

export default OurClientsSection