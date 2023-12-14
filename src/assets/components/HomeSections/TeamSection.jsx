import React from 'react'
import Image from "../../images/person.jpg"
import Image2 from "../../images/woman.svg"
import Image3 from "../../images/deepmind.jpg"
import PersonCard from '../PersonCard'



function TeamSection() {
  return (
    <div className='w-full min-h-full  mt-5 p-10 px-20'>
    <h3 className='text-4xl mb-10'>Our Products</h3>

    <div className='flex flex-row flex-wrap w-full h-full mx-auto justify-start'>
    <PersonCard 
    Image={Image}
    title={"Jonathan Makoma"}
    subtitle="CEO"
    Link="/products/servin"
    />
    <PersonCard  
    Image={Image2}
    title={"Umutoni Grace"}
    subtitle="COO"
    Link="/products/reppin"
    />
    <PersonCard  
    Image={Image}
    title={"Ncuti Gaele"}
    subtitle="Marketing"
    Link="/products/pumpin"
    />
    <PersonCard
    Image={Image2}
    title={"John Trovolta"}
    subtitle="Data Analist"
    Link="/products/legacy"
    />
    <PersonCard 
    Image={Image}
    title={"Mucyo Greyson"}
    subtitle="AI Scientist"
    Link="/products/flippin"
    />
    <PersonCard  
    Image={Image2}
    title={"Roline Umwiza"}
    subtitle="Software Developer"
    Link="/products/arin"
    />
    <PersonCard  
    Image={Image2}
    title={"Roline Umwiza"}
    subtitle="Software Developer"
    Link="/products/arin"
    />
    <PersonCard  
    Image={Image}
    title={"Mugabo Jeofrey"}
    subtitle="Software Developer"
    Link="/products/arin"
    />

    </div>
    
    </div>
  )
}

export default TeamSection