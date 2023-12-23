import {useState} from 'react'
import Image from "../../images/products.png"
import Image2 from "../../images/hero1.png"
import Birmingham from "../../images/birmingham.png"
import Hopkins from "../../images/john_hopkins.jpg"
import Manhattan from "../../images/manhattan.png"
import Mckinsey from "../../images/mckinsey.png"
import Nhgri from "../../images/nhgri.svg"
import Image3 from "../../images/media.png"

function ExploreServisesSection() {
    const [service, setServise] = useState("service1")
    const [serviceContent, setServiceContent] = useState({
        Image:Image,
        title:"Automated Machine Learning",
        mainTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        clients:[{name:"Birmingham", Logo:Birmingham}, {name:"Hopkins", Logo:Hopkins}]
    })

    const setService2 =()=>{
        setServiceContent({
            Image:Image2,
            title:"Predictive Analytics",
            mainTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            clients:[{name:"Manhattan", Logo:Manhattan},{name:"Nhgri", Logo:Nhgri}, {name:"Hopkins", Logo:Hopkins}]
        })
    }
    const setService3 =()=>{
        setServiceContent({
            Image:Image3,
            title:"Generative AI",
            mainTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            clients:[{name:"Mckinsey", Logo:Mckinsey},{name:"Nhgri", Logo:Nhgri}]
        })
    }
    const setService4 =()=>{
        setServiceContent({
            Image:Image,
            title:"AI Consulting",
            mainTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            clients:[{name:"Hopkins", Logo:Hopkins}]
        })
    }

  return (
    <div className='w-full min-h-full  mt-5 p-10 tablet:px-20'>
    <h3 className='text-3xl phone:text-4xl my-2 mb-10'>Explore Our<br></br> Services</h3>
    <div className='flex flex-col tablet:flex-row justify-between'>
    <div className='w-[90%] tablet:w-[30%] mb-4 tablet:mb-1 space-y-1 tablet:space-y-4'>
    <p onClick={()=>{setServise("service1"); }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service1")? "black":"gray" ,fontWeight:(service === "service1")? 600:400, fontFamily:"Montserrat"}}>Automated Machine Learning</p>
    <p onClick={()=>{setServise("service2");setService2() }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service2")? "black":"gray" ,fontWeight:(service === "service2")? 600:400, fontFamily:"Montserrat"}}>Predictive Analytics</p>
    <p onClick={()=>{setServise("service3");setService3() }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service3")? "black":"gray" ,fontWeight:(service === "service3")? 600:400, fontFamily:"Montserrat"}}>Generative AI</p>
    <p onClick={()=>{setServise("service4");setService4() }} className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service4")? "black":"gray" ,fontWeight:(service === "service4")? 600:400, fontFamily:"Montserrat"}}>AI Consulting</p>
    <p className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service5")? "black":"gray" ,fontWeight:(service === "service5")? 600:400, fontFamily:"Montserrat"}}>Cloud Solutions</p>
    <p className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service6")? "black":"gray" ,fontWeight:(service === "service6")? 600:400, fontFamily:"Montserrat"}}>AI Software</p>
    <p className='tablet:text-lg hover:scale-105 delay-450 ease-in-out transition-all cursor-pointer' style={{color:(service === "service7")? "black":"gray" ,fontWeight:(service === "service7")? 600:400, fontFamily:"Montserrat"}}>Data Engineering</p>
    </div>
    <div className='w-[100%] tablet:w-[65%]  '>
    <img src={serviceContent.Image} alt="service picture" className='mb-3 h-[200px] w-full' style={{resize:"contain", objectFit:"cover"}}/>
    <h3 className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat"}}>{serviceContent.title}</h3>
    <p className='text-sm my-2' style={{}}> {serviceContent.mainTitle}</p>
    <p className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat", fontWeight:500}}> Impact</p>
    <p className='text-sm  my-2' style={{}}> {serviceContent.impact}</p>
    <h3 className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat", fontWeight:500}}> Solution and Impact</h3>
    <p className='text-sm  my-2' style={{}}> {serviceContent.solution}</p>
    
    <h3 className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat", fontWeight:500}}> Clients And Partners</h3>

    <div className='flex flex-row items-center space-x-5'>
    {
        serviceContent.clients.map((item)=>{
            return(

            <img src={item.Logo} alt={item.name} className='w-32 h-10 ' style={{objectFit:"contain"}}/>
      
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