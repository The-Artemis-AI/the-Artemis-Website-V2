import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import Image from "../../assets/images/media.webp"
import Hopkins from "../../assets/images/john_hopkins.webp"
import { FaArrowRight } from 'react-icons/fa';
import prompting from "../../assets/images/prompting.webp"
import "../../App.css"

function PrivacyPolicySection() {
    const [serviceContent, setServiceContent] = useState({
        
         Image:prompting,
            title:"AI Consulting",
            paragraph1:"The ever-dynamic realm of AI research consistently serves up innovations. Among the latest is a groundbreaking method poised to redefine the capabilities of large language models (LLMs) such as GPT-4. This method, named 'analogical prompting,' is now making waves in the tech community, and for good reason.",
            paragraph2:"Analogical prompting is predicated on a novel idea: enabling LLMs to self-generate relevant examples or knowledge before attempting a problem. To grasp the significance of this, consider how humans tackle unfamiliar challenges. We often lean on past experiences or acquired knowledge. Analogical prompting essentially empowers machines to emulate this human-like recall mechanism.",
            paragraph3:"Traditional AI techniques predominantly hinge on feeding models with predefined examples or templates. The hope is that the AI will draw parallels when faced with similar scenarios in the future. This approach, however, has its limitations, especially when machines come across new or nuanced challenges.",
            paragraph4:"With analogical prompting, the paradigm shifts. Instead of spoon-feeding LLMs with examples, they are encouraged to forge their own. This not only amplifies their computational thinking but also fosters the creation of more adaptable solutions.",
            paragraph5:`Researchers put this method to the test in diverse areas such as math problem-solving and code generation. Key takeaways include:`,
            bullets:[{title:"Math Problem Solving", content:" Benchmarks revealed that analogical prompting outstripped other techniques in both accuracy and efficiency."},{title:"Code Generation", content:"In competitive programming challenges, the method proved its mettle, particularly when it prioritized generating knowledge over examples."}],
            paragraph6:`The real genius of this method is evident in its versatility. The LLMs consistently produced examples and knowledge that were astutely relevant to the problem, underscoring the method's adaptability.`,
            summary:`In summary, analogical prompting is more than a mere buzzword. It represents a significant leap toward making machines think and reason with a semblance of human intuition. Such innovations might appear incremental, but they cumulatively drive AI research into uncharted territories. The future is tantalizing: imagine AI systems not just computing but also dispensing wisdom drawn from their vast "experiences"!`,
            authorNotes:`Author's Note: Tech aficionados should delve into the original paper ${<p><a href="https://lnkd.in/dZv_HsqQ">LInk Here  </a></p>}
            for an in-depth perspective. Its nuanced methodology and rich findings are truly captivating. And if this article resonated with you, consider sharing it and subscribing to Artemis AI's platforms. Your curiosity fuels our passion! 🚀`,
    })
    

  return (
    <div className='monte m-0 w-full min-h-[100vh] px-5 phone:px-10 bigphone:px-20' id='monte'>

    <div className='py-10 flex flex-col tablet:flex-row justify-between'>
    <div className='w-[100%] tablet:w-[80%]  flex flex-col '>

    <p style={{fontFamily:"Montserrat"}}>&#8226; Welcome to The Artemis AI! This Privacy Policy is designed to help you understand how we collect,
     use, disclose, and safeguard your personal information. By using our website
    , services, or engaging with us, you agree to the terms outlined in this policy.</p>
    
    <div className='my-2'>
    <h3 className='my-2 font-bold' style={{fontFamily:"Montserrat"}}>1. Information We Collect</h3>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    <span className='font-semibold' style={{fontFamily:"Montserrat"}}>1.1 Personal Information:</span>
     We may collect personally identifiable information, such as your name, email address, contact number,
     and other relevant details when you engage with our services, sign up for newsletters, or use our website.
     </p>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    <span className='font-semibold' style={{fontFamily:"Montserrat"}}>1.2 Usage Data:</span>
    We may collect non-personal information about how you interact with our website, 
    such as your IP address, browser type, pages visited, and referring pages.
     </p>
    </div>
    
    <div className='my-2'>
    <h3 className='my-2 font-bold' style={{fontFamily:"Montserrat"}}>2. How We Use Your Information</h3>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    <span className='font-semibold' style={{fontFamily:"Montserrat"}}>2.1 Provide Services:</span>
    We use the collected information to provide and improve our services, 
    respond to your inquiries, and offer personalized experiences.
     </p>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    <span className='font-semibold' style={{fontFamily:"Montserrat"}}>2.2 Communication:</span>
    We may use your contact information to send you updates, newsletters, marketing materials,
     or other relevant communications. You can opt-out of these communications at any time.
     </p>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    <span className='font-semibold' style={{fontFamily:"Montserrat"}}>2.3 Analytics:</span>
    We use analytics tools to understand how users interact with our website and services, 
    helping us enhance user experience and optimize our offerings.
     </p>
    </div>
    
    <div className='my-2'>
    <h3 className='my-2 font-bold' style={{fontFamily:"Montserrat"}}>3. Information Sharing and Disclosure</h3>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    <span className='font-semibold' style={{fontFamily:"Montserrat"}}>3.1 Third-Party Service Providers:</span>
    We may share your information with third-party service providers to facilitate our services, 
    conduct analysis, and improve user experience.
     </p>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    <span className='font-semibold' style={{fontFamily:"Montserrat"}}>3.2 Legal Requirements:</span>
    We may disclose your information if required by law or in response to legal requests.
     </p>
    </div>

    <div className='my-2'>
    <h3 className='my-2 font-bold' style={{fontFamily:"Montserrat"}}>4. Security</h3>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    <span className='font-semibold' style={{fontFamily:"Montserrat"}}>4.1 Data Security:</span>
    We implement industry-standard security measures to protect your personal information 
    from unauthorized access, disclosure, alteration, and destruction.
     </p>
    </div>


    <div className='my-2'>
    <h3 className='my-2 font-bold' style={{fontFamily:"Montserrat"}}>5. Your Choices</h3>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    <span className='font-semibold' style={{fontFamily:"Montserrat"}}>5.1 Opt-out:</span>
    You can opt-out of receiving marketing communications from us by following the unsubscribe
     instructions included in our emails.
     </p>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    <span className='font-semibold' style={{fontFamily:"Montserrat"}}>5.2 Access and Update:</span>
    You may access and update your personal information by contacting us at team@theartemisai.com.
     </p>
    </div>

    <div className='my-2'>
    <h3 className='my-2 font-bold' style={{fontFamily:"Montserrat"}}>6. Changes to This Privacy Policy</h3>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    <span className='font-semibold' style={{fontFamily:"Montserrat"}}>6.1 Updates: </span>
    We may update this Privacy Policy from time to time. The latest version will be posted
     on our website with the effective date.
     </p>
    </div>

    <div className='my-2'>
    <h3 className='my-2 font-bold' style={{fontFamily:"Montserrat"}}>7. Contact Us</h3>

    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at team@theartemisai.com, or fill the form below.
     </p>
    <p className='ml-4 my-4' style={{fontFamily:"Montserrat"}}>
    By using The Artemis AI's website and services, you acknowledge that you have read and understood this Privacy Policy.

     </p>
    </div>

    </div>
    </div>
    </div>
  )
}

export default PrivacyPolicySection