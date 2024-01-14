import React from 'react'
import ProductsCard from '../../ProductsCard'
import Image from "../../../images/image.webp"
import Image2 from "../../../images/media.webp"
import Image3 from "../../../images/deepmind.webp"


function OurProductSection() {
  return (
    <div className='w-full min-h-full  mt-5 p-5 bigphone:p-10 bg-red-300'>
    <h3 className='text-2xl bigphone:text-4xl mb-10'>Our Products</h3>

    <div className='flex flex-row flex-wrap w-full h-full mx-auto items-center justify-center'>
    <ProductsCard 
    Image={Image}
    title={"Servin 1.0"}
    subtitle="Machine Learning"
    Link="/products/servin"
    />
    <ProductsCard  
    Image={Image2}
    title={"Reppin 2.0"}
    subtitle="Cloud Computing"
    Link="/products/reppin"
    />
    <ProductsCard  
    Image={Image3}
    title={"Pumpin 1.0"}
    subtitle="NLP"
    Link="/products/pumpin"
    />
    <ProductsCard
    Image={Image2}
    title={"Legacy 1.0"}
    subtitle="Analytics"
    Link="/products/legacy"
    />
    <ProductsCard 
    Image={Image}
    title={"Flippin 1.0"}
    subtitle="AI"
    Link="/products/flippin"
    />
    <ProductsCard  
    Image={Image2}
    title={"Arin 2.0"}
    subtitle="Cloud Computing"
    Link="/products/arin"
    />

    </div>
    
    </div>
  )
}

export default OurProductSection