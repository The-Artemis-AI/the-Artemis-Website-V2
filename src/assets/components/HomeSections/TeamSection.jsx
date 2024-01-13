import React from 'react'
import Image from "../../images/person.webp"
import Image2 from "../../images/woman.svg"
import Image3 from "../../images/deepmind.webp"
import PersonCard from '../PersonCard'



function TeamSection() {
  return (
    <div className='w-full min-h-full  mt-5 p-10  tablet:px-20'>
    <h3 className='text-4xl mb-10'>Our Team</h3>

    <div className='flex flex-row flex-wrap w-full h-full mx-auto justify-start'>
    <PersonCard 
    Image={Image}
    title={"Jonathan Makoma"}
    subtitle="CEO"
    Link="/the-Artemis-Website-V2/products/servin"
    />
    <PersonCard  
    Image={Image}
    title={"Umutoni Grace"}
    subtitle="COO"
    Link="/the-Artemis-Website-V2/products/reppin"
    />
    <PersonCard  
    Image={Image}
    title={"Ncuti Gaele"}
    subtitle="Marketing"
    Link="/the-Artemis-Website-V2/products/pumpin"
    />
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
    />

    </div>
    
    </div>
  )
}

export default TeamSection