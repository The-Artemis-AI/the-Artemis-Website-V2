import { useState } from 'react'

import "../../../App.css"
import HeroSection from '../HomeSections/HeroSection'
import Footer from '../Footer'
import ContactSection from '../ContactSection'
import TestimonialsSection from '../TestimonialsSection'
import OurClientsSection from '../OurClientsSection'
import OfferSection from '../OfferSection'
import ProductsSection from '../HomeSections/ProductsSection'
import AboutUsSection from '../HomeSections/AboutUsSection'
import FAQSection from '../HomeSections/FAQSection'
import PageTopSection from '../HomeSections/PageTopSection'
function HomePage() {

  return (
    <div className='p-0 m-0 w-full h-[100vh]'>
    <HeroSection/>
    <AboutUsSection/>
    <ProductsSection/>
    <OfferSection/>
    <OurClientsSection/>
    <TestimonialsSection/>
    <FAQSection/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default HomePage
