// import Image from "../../images/media.webp"
// import PageTopSection from "../HomeSections/PageTopSection"
import ContactSection from "../ContactSection"
import Footer from "../Footer"
import Navbar from "../Navbar"
import FaqCard from "../FaqCard"
function FAQPage() {
  return (
    <div className='p-0 m-0 w-full h-[100vh]'>
    <Navbar activeLink="FAQ"/>
 {/*   <PageTopSection 
    activeLink="FAQ"
    title="Our FAQ"
    subtitle="Stay Up to Date with Artemis AI"
    firstPart="Stay "
    underlined="Up to Date "
    lastPart="with Artemis AI"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo natus voluptates repudi.Lorem ipsum dolor sit amet consectetur adipisicing elit"
    Image = {Image}
  /> */}

  <div className='w-full h-auto p-10 px-5 phone:px-10 bigphone:px-20  bg-white flex flex-col justify-aroun items-center'>
    <div className="faq-section">
    <h3 className='text-4xl text-center my-2 mb-5'>FAQ</h3>
    <p className='mb-5 w-[70%] text-center mx-auto'>Frequently Asked Questions. Find some common questions below about Artemis AI</p>
    </div>
    <div className='w-full'>
    <FaqCard 
    Question="How do we approach a project?"
    Response="We begin by thoroughly understanding our client's needs and creating prototypes. The full solution is then developed using agile methodologies, allowing for flexibility and continuous improvement throughout the project."
    />
    <FaqCard 
    Question="What technologies do you specialize in?"
    Response="We specialize in cutting-edge technologies including Natural Language Processing (NLP), Computer Vision (CV), and Machine Learning (ML) pipelines, leveraging these to deliver innovative and effective solutions."
    />
    <FaqCard 
    Question="Can you provide examples of previous work?"
    Response={`Please visit the`}
    Link="/the-Artemis-Website-V2/services"
    Navigate=" Our Services "
    Response2=" page for detailed examples of our previous work, showcasing our expertise and the range of projects we have completed."
    />
    <FaqCard 
    Question="What is your pricing model?"
    Response="Our pricing depends on the project's complexity, required expertise, infrastructure, delivery schedule, and the client's budget. We collaborate with clients to determine a reasonable pricing model that aligns with the project's scope and objectives."
    />
    <FaqCard 
    Question="How do you ensure the quality and security of the software"
    Response="We employ expert developers who prioritize quality and security, develop software in manageable increments for reliability, and rigorously test our software throughout the development cycle to ensure the highest standards before handover."
    />
    <FaqCard 
    Question="What Is your experience in our industry?"
    Response="With over 15 years of experience, our partners have developed software for various industries including healthcare, finance, hospitality, media, and education, demonstrating our versatility and expertise across sectors."
    />
    <FaqCard 
    Question="How do you handle project communication and reporting"
    Response="We maintain regular communication with our clients, providing frequent reports to track progress and ensure transparency regarding the project's development status."
    />
    <FaqCard 
    Question="What is your policy on Intellectual Property and confidentiality?"
    Response="We adhere to international intellectual property and confidentiality standards, ensuring that all client information and project details are handled with the utmost care and security."
    />
    <FaqCard 
    Question="What Post-Development Support Do You Offer?"
    Response="We offer comprehensive support and maintenance services post-development, ensuring that our clients receive the necessary assistance for the smooth operation and longevity of the software."
    />
    <FaqCard 
    Question="How Do You Handle Changes to the Project Scope?"
    Response="We recognize that business priorities can shift, and we are flexible in accommodating changes to the project scope. Changes are discussed with the client to find the best way to integrate them within the existing scope and budget agreement."
    />
    <FaqCard 
    Question="Can I join your team?"
    Response="We are always on the lookout for talented and passionate individuals to join our team. If you're interested in working with us, please visit the "
    Link="/the-Artemis-Website-V2/contact"
    Navigate=" Contact Us "
    Response2="page and submit your application. We welcome applicants with diverse skills and backgrounds who share our commitment to excellence."
    />

    </div>
    </div>

    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default FAQPage