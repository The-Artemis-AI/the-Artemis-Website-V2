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
function AboutUsPage() {
  return (
    <div className='p-0 m-0 w-full h-[100vh]'>
    <PageTopSection 
      
    activeLink="About"
    title="About Us"
    firstPart="We are a global technology company "
    underlined="specialising in AI "
    lastPart="solutions."
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    Image = {People}
    />

    <div className='w-[85%] h-[50%] tablet:h-[60%] mx-auto phone:my-10 flex flex-col tablet:flex-row items-center justify-between'>
    <div className='w-[70%] text-center tablet:text-start tablet:w-[50%] my-2  '>
    
     <h3 className='text-lg tablet:text-4xl' style={{fontFamily:'Montserrat'}}>Our vision is lorem ipsum mipsum jispum.</h3>
    </div>
    <div className='w-[90%] text-sm phone:text-[1em] tablet:w-[50%] space-y-6'>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
   
    </div>

  {/* CEO WOrd */}
  <div className='w-full  h-[40%] tablet:h-[60%] mx-auto my-10 px-5 bigphone:px-10 tablet:px-20 flex flex-col items-center justify-center space-y-10 bg-yellow-200'>
  <h3 className='text-lg tablet:text-3xl text-center' style={{fontFamily:'Montserrat'}}>“Our goal is to is lorem In eu aliquet orci ac risus lobortis aenean diam aenean. Lorem ipsum dolor sit amet consectetur.”</h3>
  <div className="flex flex-row space-center space-x-5">
    <div className="flex flex-col w-[300px] justify-around items-center">
  <img src={Samy} className="w-20 h-20 object-cover rounded-full" />
  <p className="  mx-2">Sammy Gasana </p>
  <p style={{fontFamily:'Montserrat'}} className="italic w-[70%] text-center">Co-founder & CEO</p>
  </div>
    <div className="flex flex-col w-[300px] justify-around items-center">
  <img src={Endy} className="w-20 h-20 object-cover rounded-full" />
  <p className="  mx-2">Endegenaamare Taye Alemayehu  </p>
  <p style={{fontFamily:'Montserrat'}} className="italic w-[70%] text-center">Co-founder & Product Manager</p>
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