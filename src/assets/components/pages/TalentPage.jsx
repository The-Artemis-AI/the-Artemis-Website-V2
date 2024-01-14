import Image from "../../images/media.webp"
import PageTopSection from "../HomeSections/PageTopSection"
import ContactSection from "../ContactSection"
import Footer from "../Footer"
import Navbar from "../Navbar"
import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
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

    <div className="px-10 m-0 w-full h-[10%] flex flex-col space-y-2 mb-5">
    <p className="text-base bigphone:text-xl">Follow us on our social meadia platforms to get our recent updates</p>
    <div className='flex flex-row space-x-4'>
<Link to="https://www.linkedin.com/company/the-artemis-ai"><FaLinkedinIn className='text-blacky text-xl'/></Link>
<Link to="https://www.facebook.com/profile.php?id=100094257786765"><FaFacebookF className='text-blacky text-xl'/></Link>
<Link to="https://twitter.com/TheArtemis_AI"><BsTwitterX  className='text-blacky text-xl'/></Link>
<Link to="https://www.linkedin.com/company/the-artemis-ai"><RiYoutubeLine className='text-blacky text-xl'/></Link>
</div> 
    </div>
    <Footer/>
    </div>
  )
}

export default TalentPage