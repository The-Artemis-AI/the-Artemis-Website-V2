import React from 'react'
import FaqCard from '../FaqCard'
import { Link } from 'react-router-dom'

const navigate = <Link to={""}>Our Services</Link>
function FAQSection() {
  return (
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

    <p className='text-center my-2'><Link to="/the-Artemis-Website-V2/FAQ" className='font-semibold  mx-auto self-center'>More ...</Link></p>
    </div>
    </div>
  )
}

export default FAQSection