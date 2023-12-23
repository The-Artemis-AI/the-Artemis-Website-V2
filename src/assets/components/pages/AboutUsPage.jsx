import Image from "../../images/media.png"
import PageTopSection from "../HomeSections/PageTopSection"
import ContactSection from "../ContactSection"
import Footer from "../Footer"
import TestimonialsSection from "../TestimonialsSection"
import FAQSection from "../HomeSections/FAQSection"
import People from "../../images/about.png"
import Person from "../../images/person.jpg"
import TeamSection from "../HomeSections/TeamSection"
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

    <div className='w-[85%] h-[45%] tablet:h-[60%] mx-auto my-10 flex flex-col tablet:flex-row items-center justify-between'>
    <div className='w-[70%] text-center tablet:text-start tablet:w-[50%] my-2  '>
    
     <h3 className='text-3xl tablet:text-5xl' style={{fontFamily:'Montserrat'}}>Our vision is lorem ipsum mipsum jispum.</h3>
    </div>
    <div className='w-[80%] tablet:w-[50%] space-y-6'>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
   
    </div>

  {/* CEO WOrd */}
  <div className='w-full  h-[40%] tablet:h-[60%] mx-auto my-10 px-20 flex flex-col items-center justify-center space-y-10 bg-yellow-200'>
  <h3 className='text-2xl tablet:text-3xl text-center' style={{fontFamily:'Montserrat'}}>“Our goal is to is lorem In eu aliquet orci ac risus lobortis aenean diam aenean. Lorem ipsum dolor sit amet consectetur.”</h3>
  <div className="flex flex-row space-x-5 items-center">
  <img src={Person} className="w-20 h-20 object-cover rounded-full" />
  <p>Jonathan Doe, </p>
  <p style={{fontFamily:'Montserrat'}} className="italic">CEO</p>
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