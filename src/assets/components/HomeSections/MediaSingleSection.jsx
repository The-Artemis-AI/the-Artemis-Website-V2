import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import Image from "../../images/media.png"
import Hopkins from "../../images/john_hopkins.jpg"
import { FaArrowRight } from 'react-icons/fa';

function MediaSingleSection() {
    const [serviceContent, setServiceContent] = useState({
        
         Image:Image,
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
    <div className='m-0 w-full min-h-[100vh] px-20'>

    <img src={Image} alt="image"  className='w-full h-[30%] object-cover'/>
    <div className='py-10 flex flex-row justify-between'>
    <div className='w-[50%]  flex flex-col '>
    <p className='text-sm bigphone:text-lg my-2' style={{}}> {serviceContent.paragraph1}</p>
    <p className='text-sm bigphone:text-lg my-2' style={{}}> {serviceContent.paragraph2}</p>
    <p className='text-sm bigphone:text-lg my-2' style={{}}> {serviceContent.paragraph3}</p>
    <p className='text-sm bigphone:text-lg my-2' style={{}}> {serviceContent.paragraph4}</p>
    <p className='text-sm bigphone:text-lg my-2' style={{}}> {serviceContent.paragraph5}</p>
    
    <div className='flex flex-col items-start ml-10'>
    {
        serviceContent.bullets?.map((item)=>{
            return(
                <div className=''>
                
            <h3 className=' text-gray-500 my-2 ' style={{fontFamily:"Montserrat"}}>&#8226; {item.title}</h3>
                <p className='text-sm bigphone:text-lg my-2'>{item.content}</p>
                </div>
      
            )
           
        })
    }
  
  </div>
    <p className='text-sm bigphone:text-lg my-2' style={{}}> {serviceContent.summary}</p>
    <p className='text-sm bigphone:text-lg my-2' style={{}}> {serviceContent.paragraph6}</p>

  <div>
  <h3 className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat"}}>Author Notes</h3>
  <p>{serviceContent?.authorNotes}</p>
  </div>
    </div>
    <div className='w-[30%] h-[300px] bg-blacky flex flex-col justify-between p-10'>
    <h3 className='text-2xl text-white ' style={{fontFamily:"Montserrat"}}>Get Notified Upon Release?</h3>
    <h3 className='text-2xl text-white ' style={{fontFamily:"Montserrat"}}>Share Your Email With Us</h3>
    <div className='w-full items-center justify-center rounded overflow-hidden flex flex-row'>
    <input className='bg-white placeholder:text-gray-500 py-2 px-3 rounded  text-sm bigphone:text-lg w-[80%]' placeholder='johndoe@gmail.com'/>
    <button className='bg-pink-400 p-2 rounded rounded-l-none rounded-b-none items-center justify-center flex w-[20%] ml-[-3px]'><FaArrowRight className='text-white text-xl -rotate-45'/></button>
    </div>
    </div>
 
    </div>
    </div>
  )
}

export default MediaSingleSection