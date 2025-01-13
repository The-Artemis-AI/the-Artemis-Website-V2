import React from 'react'
import Image from "../../images/person.webp"
import Image2 from "../../images/woman.svg"
import Image3 from "../../images/deepmind.webp"
import charles_yusuf from "../../images/charles_yusuf.jpeg"
import PersonCard from '../PersonCard'
import Endy from "../../images/Endy_pic.webp"
import Samy from "../../images/Sam_pic.webp"

function TeamSection() {
  return (
    <div className='w-full min-h-full  mt-5 p-10  tablet:px-20'>
    <h3 className='text-4xl mb-10'>Our Team</h3>

    <div className='flex flex-row flex-wrap w-full h-full mx-auto justify-start'>
    <PersonCard 
    Image={Samy}
    title={"Sammy Gasana"}
    subtitle="Co-founder & CEO"
    Link="/the-Artemis-Website-V2/products/servin"
    />
    <PersonCard  
    Image={Endy}
    title={"Endegenaamare Taye Alemayehu (Endy)"}
    subtitle="Co-founder & Product Manager"
    Link="/the-Artemis-Website-V2/products/reppin"
    />
    <PersonCard  
    Image={charles_yusuf}
    title={"Charles Yusuf"}
    subtitle="NLP, Machine learning"
    Link="/the-Artemis-Website-V2/products/pumpin"
    />
{  /*  
    <PersonCard
    Image={Image}
    title={"John Trovolta"}
    subtitle="Data Analist"
    Link="/the-Artemis-Website-V2/products/legacy"
    />
    <PersonCard 
    Image={Image}
    title={"Mucyo Greyson"}
    subtitle="AI Scientist"
    Link="/the-Artemis-Website-V2/products/flippin"
    />
    <PersonCard  
    Image={Image}
    title={"Roline Umwiza"}
    subtitle="Software Developer"
    Link="/the-Artemis-Website-V2/products/arin"
    />
    <PersonCard  
    Image={Image}
    title={"Roline Umwiza"}
    subtitle="Software Developer"
    Link="/the-Artemis-Website-V2/products/arin"
    />
    <PersonCard  
    Image={Image}
    title={"Mugabo Jeofrey"}
    subtitle="Software Developer"
    Link="/the-Artemis-Website-V2/products/arin"
/>*/}

    </div>
    
    </div>
  )
}

export default TeamSection
