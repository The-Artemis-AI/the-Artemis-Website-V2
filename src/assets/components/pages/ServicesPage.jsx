import React from 'react'

import PageTopSection from '../HomeSections/PageTopSection'
import Image from "../../../assets/images/sproduct2.webp"
import Footer from '../Footer'
import ContactSection from '../ContactSection'
import ExploreServisesSection from '../HomeSections/ExploreServisesSection'
function ServicesPage() {
  return (
    <div className='p-0 m-0 w-full h-[100vh]'>
    <PageTopSection 
    activeLink="Services"
    title="Services" 
    firstPart="We offer "
    underlined="a variety "
    lastPart="of services"
    content="World-class AI development at affordable rates."
    Image = {Image}
    />
   <ExploreServisesSection/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default ServicesPage