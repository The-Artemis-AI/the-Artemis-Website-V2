import {useState} from 'react'
import Image from "../../images/products.webp"
import Image2 from "../../images/hero1.webp"
import Image3 from "../../images/media.webp"
import MinICT from "../../images/MINICT.webp"
import apiday from "../../images/apiday.webp"
import seyvin from "../../images/seyvin.webp"
import CMU from "../../images/CMU.webp"
import oxford from "../../images/oxford.svg"
import stealth from "../../images/stealth.webp"
import ai_blockchain from "../../images/Ai-blockchain2.webp"


function ExploreServisesSection() {
    const [service, setServise] = useState("service1")
    const serviceData = [
        {
            Image:Image,
            title:"Data Analytics",
            description:"Artemis AI specializes in transforming raw data into actionable insights by utilizing advanced analytical techniques and AI algorithms. Through this service, businesses can gain valuable intelligence and make informed decisions to drive growth and innovation in their environment.",
            impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            clients:[{name:"Rwandan Ministry of ICT & Innovation", Logo:MinICT, country:"Rwanda"}]
        },
        {
            Image:Image2,
            title:"Generative AI Solutions",
            description:"We offer custom generative AI solutions tailored to meet specific business needs. These solutions leverage the power of generative AI to produce unique and creative outputs, such as images, text, and music, to enhance product development, content creation, and user experience.",
            impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            clients:[{name:"Apiday", Logo:apiday, country:"France"}]
        },
        {
            Image:Image3,
            title:"AI Software Development",
            description:"With a focus on customization, Artemis AI develops AI software to address the unique requirements of each business. By leveraging cutting-edge AI technologies, they build tailored software solutions that automate processes, optimize operations, and drive efficiency across various industry domains.",
            impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            clients:[{name:"Seyvin", Logo:seyvin, country:"Rwanda"}]
        },
        {
            Image:Image,
            title:"AI Training & Consultancy",
            description:"We empower teams with AI knowledge and expertise through comprehensive training and consultancy services. Businesses can enhance their internal capabilities and understanding of AI, enabling them to effectively integrate AI into their operations and develop AI-focused strategies.",
            impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            clients:[{name:"Carnegie Mellon University", Logo:CMU, country:"USA"}]
        },
        {
            Image:Image2,
            title:"Web & Mobile App Development",
            description:"We specializes in building web and mobile applications integrated with AI capabilities. By incorporating AI into app development, businesses can deliver intelligent and personalized user experiences, automate tasks, and leverage data-driven insights to drive better user engagement and business outcomes.",
            impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            clients:[{name:"Stealth Startup", Logo:stealth, country:"USA"}]
        },
        {
            Image:ai_blockchain,
            title:"AI in Blockchain & Cryptocurrency",
            description:"Cutting-edge AI Research for Tomorrow's Technological Breakthroughs",
            impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            clients:[{name:"Stealth Startup", Logo:stealth, country:"USA"}]
        },
        {
            Image:Image3,
            title:"Research",
            description:"Revolutionizing Blockchain & Crypto with Advanced AI Solutions",
            impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            clients:[{name:"University of Manchester University of Oxford", Logo:oxford, country:"USA"}]
        },
        

    ]
    const [serviceContent, setServiceContent] = useState(serviceData[0])

    const setAll =(content)=>{
        setServiceContent(content)
    }

 
 
  return (
    <div className='w-full min-h-full  mt-5 p-10 tablet:px-20'>
    <h3 className='text-3xl phone:text-4xl my-2 mb-10'>Explore Our<br></br> Services</h3>
    <div className='flex flex-col tablet:flex-row justify-between'>
    <div className='w-[90%] tablet:w-[30%] mb-4 tablet:mb-1 space-y-1 tablet:space-y-4'>
    {serviceData.map((item, index)=>{
        return(
            <p key={index} onClick={()=>{setServise(`service${index+1}`);setAll(item)}} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service"+(index+1))? "black":"gray" ,fontWeight:(service === "service"+(index+1))? 600:400, fontFamily:"Montserrat"}}>{item.title}</p>
        )
    })

    }
{/*    <p onClick={()=>{setServise("service1"); }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service1")? "black":"gray" ,fontWeight:(service === "service1")? 600:400, fontFamily:"Montserrat"}}>Automated Machine Learning</p>
    <p onClick={()=>{setServise("service2");setService2() }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service2")? "black":"gray" ,fontWeight:(service === "service2")? 600:400, fontFamily:"Montserrat"}}>Predictive Analytics</p>
    <p onClick={()=>{setServise("service3");setService3() }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service3")? "black":"gray" ,fontWeight:(service === "service3")? 600:400, fontFamily:"Montserrat"}}>Generative AI</p>
    <p onClick={()=>{setServise("service4");setService4() }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service4")? "black":"gray" ,fontWeight:(service === "service4")? 600:400, fontFamily:"Montserrat"}}>AI Consulting</p>
    <p onClick={()=>{setServise("service5");setService5() }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service5")? "black":"gray" ,fontWeight:(service === "service5")? 600:400, fontFamily:"Montserrat"}}>Cloud Solutions</p>
    <p onClick={()=>{setServise("service6");setService6() }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service6")? "black":"gray" ,fontWeight:(service === "service6")? 600:400, fontFamily:"Montserrat"}}>AI Software</p>
    <p onClick={()=>{setServise("service7");setService7() }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service7")? "black":"gray" ,fontWeight:(service === "service7")? 600:400, fontFamily:"Montserrat"}}>Research</p>
    <p onClick={()=>{setServise("service8");setService8() }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service8")? "black":"gray" ,fontWeight:(service === "service8")? 600:400, fontFamily:"Montserrat"}}>Data Science</p>
*/}
    </div>
    <div className='w-[100%] tablet:w-[65%]  '>
    <img src={serviceContent.Image} alt="service picture" className='mb-3 h-[300px] w-full' style={{resize:"contain", objectFit:"cover"}}/>
    <h3 className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat"}}>{serviceContent.title}</h3>
    <p className='text-sm tablet:text-base my-2' style={{}}> {serviceContent.description}</p>
    <p className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat", fontWeight:500}}> Impact</p>
    <p className='text-sm tablet:text-base  my-2' style={{}}> {serviceContent.impact}</p>
    <h3 className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat", fontWeight:500}}> Solution and Impact</h3>
    <p className='text-sm tablet:text-base  my-2' style={{}}> {serviceContent.solution}</p>
    
    <h3 className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat", fontWeight:500}}> Clients And Partners</h3>

    <div className='flex flex-row items-center space-x-5'>
    {
        serviceContent.clients.map((item, index)=>{
            return(
                    <div  key={index}>
                     <img src={item.Logo} alt={item.name} className='w-32 h-10 ' style={{objectFit:"contain"}}/>
                    <div className='flex flex-row space-x-2 ml-3 my-1'>
                    <p className='text-blacky text-xs '>{item.name},</p>
                    <p className='text-blacky text-xs '>{item.country}</p>
                    </div>
                     
                    </div>
      
            )
           
        })
    }
  </div>
    </div>
    </div>
    </div>
  )
}

export default ExploreServisesSection