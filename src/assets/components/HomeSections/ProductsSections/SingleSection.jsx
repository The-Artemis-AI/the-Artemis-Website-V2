import {useState} from 'react'
import Image from "../../../images/media.webp"
import Hopkins from "../../../images/john_hopkins.webp"
import { FaArrowRight } from 'react-icons/fa';

function SingleSection(props) {
    const [serviceContent, setServiceContent] = useState({
        
         Image:Image,
            title:"AI Consulting",
            mainTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            impact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            solution:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            clients:[{name:"Hopkins", Logo:Hopkins}]
    })
    

  return (
    <div className='m-0 w-full min-h-[100vh] px-5 phone:px-10 bigphone:px-20'>

    <img src={Image} alt="image"  className='w-full h-[20%] object-cover'/>
    <div className='py-10 flex flex-col bigphone:flex-row justify-between'>
    <div className='w-full bigphone:w-[50%]  '>
    <div className='flex flex-col mb-5'> 
    <h3 className='text-lg text-black font-semibold' style={{fontFamily:"Montserrat"}}>{props.title}</h3>
    <p className='text-sm bigphone:text-base mt-[-5px]' style={{}}> Machine Learning</p>
    
    </div>
    <h3 className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat"}}>Brief</h3>
    <p className='text-sm bigphone:text-base my-2' style={{}}> {serviceContent.mainTitle}</p>
    <p className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat", fontWeight:500}}> Impact</p>
    <p className='text-sm bigphone:text-base  my-2' style={{}}> {serviceContent?.impact}</p>
    <h3 className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat", fontWeight:500}}> Solution and Impact</h3>
    <p className='text-sm bigphone:text-base  my-2' style={{}}> {serviceContent?.solution}</p>
    
    <h3 className='text-lg text-gray-400 my-2' style={{fontFamily:"Montserrat", fontWeight:500}}> Clients And Partners</h3>

    <div className='flex flex-row items-center space-x-5'>
    {
        serviceContent.clients?.map((item, index)=>{
            return(

            <img key={index} src={item?.Logo} alt={item?.name} className='w-32 h-10 ' style={{objectFit:"contain"}}/>
      
            )
           
        })
    }
  </div>
    </div>
    <div className='bigphone:w-[30%] bigphone:h-[300px] bg-blacky flex flex-col justify-between p-10 space-y-2'>
    <h3 className='text-lg phone:text-xl bigphone:text-2xl text-white ' style={{fontFamily:"Montserrat"}}>Get Notified Upon Release?</h3>
    <h3 className='text-lg phone:text-xl bigphone:text-2xl text-white ' style={{fontFamily:"Montserrat"}}>Share Your Email With Us</h3>
    <div className='w-full items-center justify-center rounded overflow-hidden flex flex-row my-2'>
    <input className='bg-white placeholder:text-gray-500 py-2 px-3 rounded  text-sm w-[80%]' placeholder='johndoe@gmail.com'/>
    <button className='bg-pink-400 p-2 rounded rounded-l-none rounded-b-none items-center justify-center flex w-[20%] ml-[-3px]'><FaArrowRight className='text-white text-xl -rotate-45'/></button>
    </div>
    </div>
 
    </div>
    </div>
  )
}

export default SingleSection