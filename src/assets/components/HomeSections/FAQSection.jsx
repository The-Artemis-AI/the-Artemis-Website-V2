import React from 'react'
import FaqCard from '../FaqCard'
function FAQSection() {
  return (
    <div className='w-full  h-auto p-10 px-20  bg-white flex flex-col justify-aroun items-center'>
    <div className="faq-section">
    <h3 className='text-4xl text-center my-2 mb-5'>FAQ</h3>
    <p className='mb-5 w-[70%] text-center mx-auto'>Frequently Asked Questions. Find some common questions below about Artemis AI</p>
    </div>
    <div className='w-full'>
    <FaqCard/>
    <FaqCard/>
    <FaqCard/>
    <FaqCard/>
    </div>
    </div>
  )
}

export default FAQSection