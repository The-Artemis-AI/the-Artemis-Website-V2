import React, {useState, useEffect} from 'react'

function ContactSection() {
  return (
    <div className='py-20 w-full px-10 phone:px-20 bg-white items-center flex flex-col flex-wrap justify-between tablet:flex-row'>
    <div className='w-full tablet:w-[70%] '>
    <h1 className='text-2xl bigphone:text-4xl tablet:text-5xl mb-3'>Have a Project? Reach Out</h1>
    <form>
    <div className='input flex flex-col bigphone:flex-row justify-between phone:my-2'>
    <div className='input flex flex-col w-[100%] bigphone:w-[45%]'>
    <p className=''>First Name</p>
    <input type="text" name="" id="" placeholder='John' className='bg-gray-300 rounded-sm p-2'/>
    </div>
    <div className='input flex flex-col w-[100%] bigphone:w-[45%]'>
    <p className=''>Last Name</p>
    <input type="text" name="" id="" placeholder='Smith' className='bg-gray-300 rounded-sm p-2'/>
    </div>
    </div>
    <div className='input flex flex-col bigphone:flex-row justify-between phone:my-2'>
    <div className='input flex flex-col w-[100%] bigphone:w-[45%]'>
    <p className=''>Email</p>
    <input type="text" name="" id="" placeholder='johnsmith@gmail.com' className='bg-gray-300 rounded-sm p-2'/>
    </div>
    <div className='input flex flex-col w-[100%] bigphone:w-[45%]'>
    <p className=''>Company Name (If Applicable)</p>
    <input type="text" name="" id="" placeholder='Example Company' className='bg-gray-300 rounded-sm p-2'/>
    </div>
    </div>
    <div className='input flex flex-col bigphone:flex-row justify-between phone:my-2'>
    <div className='input flex flex-col w-[100%] bigphone:w-[45%]'>
    <p className=''>Phone</p>
    <div className='flex flex-row w-full justify-between'>
    <p className='bg-gray-300 rounded-sm items-center justify-center flex flex-col p-2 w-[15%] text-xs'>+250</p>
    <input type="text" name="" id="" placeholder='johnsmith@gmail.com' className='bg-gray-300 rounded-sm p-2 w-[82%]'/>
    </div>
    </div>
   
    </div>
    <p className='important text-sm my-4'>*View our <span className='font-semibold underline'>Privacy Policy</span> for details on privacy and subscription.</p>
    <button type='submit' className='bg-black text-gray-100 text-sm py-2 mb-5 phone:mb-1 px-10 rounded-full mt-4'>Submit</button>
    </form>
    </div>
    <div className='w-[100%] my-1 bigphone:my-4 tablet:w-[25%] h-[70%] bg-blacky px-5 py-10 space-y-4 flex flex-col justify-evenly'>
    <p className='text-sm text-gray-300 text-start'>Fell free to send us an email or give us a call and we would get back to you as soon as possible. </p>
    <div>
    <div className='flex flex-row space-x-1'><p className='text-sm text-gray-200 text-start font-semibold'>Email:</p><p className='text-sm text-gray-300 text-start'>info.artemis.com</p></div>
    <div className='flex flex-row space-x-1'><p className='text-sm text-gray-200 text-start font-semibold'>Phone:</p><p className='text-sm text-gray-300 text-start'>+2507453678</p></div>

    </div>
    </div>
    </div>
  )
}

export default ContactSection