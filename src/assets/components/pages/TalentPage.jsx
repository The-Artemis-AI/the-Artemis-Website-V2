import Image from "../../images/media.webp"
import PageTopSection from "../HomeSections/PageTopSection"
import ContactSection from "../ContactSection"
import Footer from "../Footer"
import Navbar from "../Navbar"
function TalentPage() {
  return (
    <div className='p-0 m-0 w-full h-[100vh]'>
    <Navbar activeLink="Talent"/>
 {/*   <PageTopSection 
    activeLink="Talent"
    title="Our Talent"
    subtitle="Stay Up to Date with Artemis AI"
    firstPart="Stay "
    underlined="Up to Date "
    lastPart="with Artemis AI"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit"
    Image = {Image}
  /> */}

    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default TalentPage