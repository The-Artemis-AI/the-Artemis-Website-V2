import Image from "../../images/media.webp"
import PageTopSection from "../HomeSections/PageTopSection"
import ContactSection from "../ContactSection"
import Footer from "../Footer"
import TestimonialsSection from "../TestimonialsSection"
import FAQSection from "../HomeSections/FAQSection"
import People from "../../images/about.webp"
import Person from "../../images/person.webp"
import TeamSection from "../HomeSections/TeamSection"
import Endy from "../../images/Endy_pic.webp"
import Samy from "../../images/Sam_pic.webp"
import mission from "../../images/mission3d.png"
import vision from "../../images/vision3d.png"
function AboutUsPage() {
  return (
    <div className='p-0 m-0 w-full h-[100vh]'>
    <PageTopSection 
      
    activeLink="About"
    title="About Us"
    firstPart="We are a global technology company "
    underlined="specialising in AI "
    lastPart="solutions."
    // content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    Image = {People}
    />

    <div className='phone:w-[85%] h-[50%] tablet:h-[60%] mx-auto phone:my-10 flex flex-col tablet:flex-row items-center justify-between'>
    <div className='w-[70%] text-center tablet:text-start tablet:w-[45%] my-2 flex flex-col items-center space-y-2'>
    <img src={mission} className="w-20 h-20"/>
     <h3 className='text-lg tablet:text-3xl' style={{fontFamily:'Montserrat'}}>Our vision is To be the leading provider of AI-powered solutions that build your ideas into reality.</h3>
    </div>
    <div className='w-[70%] text-center tablet:text-start tablet:w-[45%] my-2 flex flex-col items-center space-y-2'>
    <img src={vision} className="w-20 h-20"/>
     <h3 className='text-lg tablet:text-3xl' style={{fontFamily:'Montserrat'}}>Our mission is To bring cool and positively impactful ideas to life.</h3>
    </div>
   {/* <div className='w-[90%] text-sm phone:text-[1em] tablet:w-[45%] space-y-6 '>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
  </div>*/}
   
    </div>

  {/* CEO WOrd */}
  <div className='w-full py-3 tablet:h-[60%] mx-auto my-10 px-5 bigphone:px-10 tablet:px-20 flex flex-col items-center justify-center space-y-10 bg-yellow-200'>
  <h3 className='text-lg tablet:text-3xl text-center' style={{fontFamily:'Montserrat'}}>“Our goal is to is lorem In eu aliquet orci ac risus lobortis aenean diam aenean. Lorem ipsum dolor sit amet consectetur.”</h3>
  <div className="flex flex-row space-center space-x-5 w-[80%] mx-auto self-center items-center justify-center">
    <div className="flex flex-col w-[300px]  items-center justify-center">
  <img src={Samy} className="w-20 h-20 object-cover rounded-full" />
  <p className=" mx-2 text-sm phone:text-base my-2">Sammy Gasana </p>
  <p style={{fontFamily:'Montserrat'}} className="italic w-[100%] text-center text-sm phone:text-base">Co-founder & CEO</p>
  </div>
    <div className="flex flex-col w-[300px] justify-around items-center ">
  <img src={Endy} className="w-20 h-20 object-cover rounded-full" />
  <p className=" mx-2 text-sm phone:text-base my-2">Endegenaamare Taye Alemayehu  </p>
  <p style={{fontFamily:'Montserrat'}} className="italic w-[100%] text-center text-sm phone:text-base">Co-founder & Product Manager</p>
  </div>
  </div>

  </div>

    {/* People section */}

    <TeamSection/>
    <TestimonialsSection/>
    <FAQSection/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default AboutUsPage