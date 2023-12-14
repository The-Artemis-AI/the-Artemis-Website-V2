import React from 'react'
import PageTopSection from '../HomeSections/PageTopSection'
import Image from "../../images/products.png"
import ContactSection from '../ContactSection'
import Footer from '../Footer'
import OurProductSection from '../HomeSections/ProductsSections/OurProductSection'
function ProductsPage() {
  return (
    <div className='p-0 m-0 w-full h-[100vh]'>

    <PageTopSection 
    activeLink ="Products"
    title="Products"
    firstPart="Explore "
    underlined="our portfolio  "
    lastPart="of work"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit"
    Image = {Image}
    />
    <OurProductSection/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default ProductsPage