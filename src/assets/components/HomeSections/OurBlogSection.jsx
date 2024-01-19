import Image from "../../images/image.webp"
import Image2 from "../../images/media.webp"
import Image3 from "../../images/deepmind.webp"
import BlogCard from '../BlogCard'
import { IoMdArrowDropdown } from "react-icons/io";
import { VscClose } from "react-icons/vsc";


function OurBlogSection() {
  return (
    <div className='w-full min-h-full  mt-5 p-5 bigphone:p-10 flex flex-col items-center justify-center'>
    <h3 className='text-4xl mb-10'>Check Out Our Blog</h3>

    <div className='flex flex-row flex-wrap w-full h-full mx-auto items-center justify-center'>
   <div className="w-full bigphone:w-[50%] bigphone:basis-[50%] tablet:w-[30%] tablet:basis-[30%] h-[40%] basis-[100%]  m-1 mb-4 group ">
   <div className="w-[90%] tablet:w-[75%]">
     <h3 className="font-semibold mb-3 text-xl">Filter And Search</h3>

   <div className="my-2 w-full ">
   <p>News Type</p>
   <div className="bg-gray-200 w-full rounded p-2 px-3 flex justify-between items-center">
   <p className="text-gray-500">All</p>
   <IoMdArrowDropdown/>
   </div>
   </div>

   <div className="my-2">
   <p>Tags</p>
   <input placeholder="Input tag" className="bg-gray-200 rounded w-full p-2 px-3 flex justify-between items-center"/>
   <div className="flex  my-2 flex-wrap">
      <div className="bg-black m-1 mt-0 rounded-full space-x-2 p-1 px-2 flex items-center justify-between">
      <VscClose className="text-white text-xs"/>
   <p className="text-white text-xs">All</p>
   </div>
      <div className="bg-black m-1 mt-0 rounded-full space-x-2 p-1 px-2 flex items-center justify-between">
      <VscClose className="text-white text-xs"/>
   <p className="text-white text-xs">Machine Learning</p>
   </div>
   </div>

   </div>

   <div className="my-2">
   <p>Date range</p>
   <input placeholder="Input tag" type="date" className="bg-gray-200 rounded w-full p-2 px-3 flex justify-between items-center"/>
   </div>

   <div className="my-2">
   <p>Media Type</p>
   <div className="bg-gray-200 rounded p-2 px-3 flex justify-between items-center">
   <p className="text-gray-500">All, Podcast, Video</p>
   <IoMdArrowDropdown/>
   </div>
   </div>
   </div>
 
   </div>
    <BlogCard 
    Link="article1"
    Image={Image2}
    title={"Analogical Prompting: AI's New Learning Strategy"}
    subtitle="The ever-dynamic realm of AI research consistently serves up innovations. Among the latest is a groundbreaking..."
    />
    <BlogCard 
    Link="article1"
    Image={Image3}
      title={"Analogical Prompting: AI's New Learning Strategy"}
    subtitle="The ever-dynamic realm of AI research consistently serves up innovations. Among the latest is a groundbreaking..."
    />
    <BlogCard
    Link="article1"
    Image={Image2}
      title={"Analogical Prompting: AI's New Learning Strategy"}
    subtitle="The ever-dynamic realm of AI research consistently serves up innovations. Among the latest is a groundbreaking..."
    />
    <BlogCard
    Link="article1"
    Image={Image}
      title={"Analogical Prompting: AI's New Learning Strategy"}
    subtitle="The ever-dynamic realm of AI research consistently serves up innovations. Among the latest is a groundbreaking..."
    />
    <BlogCard 
    Link="article1"
    Image={Image2}
      title={"Analogical Prompting: AI's New Learning Strategy"}
    subtitle="The ever-dynamic realm of AI research consistently serves up innovations. Among the latest is a groundbreaking..."
    />

    </div>
    
    </div>
  )
}

export default OurBlogSection