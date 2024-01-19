import Image from "../../images/media.webp"
import PageTopSection from "../HomeSections/PageTopSection"
import ContactSection from "../ContactSection"
import Footer from "../Footer"
import TestimonialsSection from "../TestimonialsSection"
import FAQSection from "../HomeSections/FAQSection"
  import OurBlogSection from "../HomeSections/OurBlogSection"
  
function MediaPage() {
  return (
    <div className='p-0 m-0 w-full h-[100vh]'>
    <PageTopSection 
    activeLink="Media"
    title="Media"
    subtitle="Stay Up to Date with Artemis AI"
    firstPart="Stay "
    underlined="Up to Date "
    lastPart="with Artemis AI"
    // content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit"
    Image = {Image}
    />

    <OurBlogSection/>
    <TestimonialsSection/>
    <FAQSection/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default MediaPage