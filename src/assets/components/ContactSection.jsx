import { stringify } from 'postcss'
import React, {useState, useEffect} from 'react'
import { useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
import * as yup from "yup"
import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneInput, FlagImage } from 'react-international-phone';
import 'react-international-phone/style.css';
// import { yupResolver } from "@hookform/resolvers/yup";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern =/(0(7[2|3|8|9][0-9]))\d{5}/

const formSchema = yup.object().shape({
  Email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email').matches(emailPattern,"Please enter a valid email"),
  FirstName: yup
    .string()
    .required('First Name is required'),
 LastName: yup
    .string()
    .required('Last Name is required'),

    Phone: yup
    .string()
    .required('Phone is required')
    .matches(phonePattern,"Please enter a valid phone number")
    .min(10, 'Phone to small')
    .max(10, 'Phone to long'),
    
  Company: yup
    .string()
});



function ContactSection() {
  const [isValid, setIsValid] = useState(false)

  const phoneUtil = PhoneNumberUtil.getInstance();


const isPhoneNumberValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const [phone, setPhone] = useState('');
const isPhoneValid = isPhoneNumberValid(phone)

  let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/  //Capital Letter, one Small Letter, and the number of characters should be between 6 to 15
  const {
    register,handleSubmit,watch,formState: { errors }, reset
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    // alert(stringify(data))
  }
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  console.log(watch("example"))

  return (
    <div id={"contact"} className='py-20 w-full px-5 bigphone:px-10 phone:px-20 bg-white items-center flex flex-col flex-wrap justify-between tablet:flex-row'>
    <div className='w-full tablet:w-[70%] '>
    <h1 className='text-2xl bigphone:text-4xl tablet:text-5xl mb-3'>Have a Project? Reach Out</h1>
    
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='input flex flex-col bigphone:flex-row justify-between phone:my-2'>
    <div className='input flex flex-col w-[100%] bigphone:w-[45%]'>
    <p className=''>First Name</p>
    <input type="text" {...register("FirstName", { required: true})}  placeholder='John' className={errors.FirstName?'bg-gray-300 rounded-sm p-2 ring-red-500':"bg-gray-300 rounded-sm p-2"}/>
    {errors.FirstName && <p className='text-red-500 text-xs font-semibold'>{errors.FirstName?.message}First name is invalid</p>}
    </div>
    <div className='input flex flex-col w-[100%] bigphone:w-[45%]'>
    <p className=''>Last Name</p>
    <input type="text" {...register("LastName")}  placeholder='Smith' className='bg-gray-300 rounded-sm p-2'/>
    {errors.LastName && <p className='text-red-500 text-xs font-semibold'>Last Name is invalid</p>}
    </div>
    </div>
    <div className='input flex flex-col bigphone:flex-row justify-between phone:my-2'>
    <div className='input flex flex-col w-[100%] bigphone:w-[45%]'>
    <p className=''>Email</p>
    <input type="text" {...register("Email", {required:true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}  placeholder='johnsmith@gmail.com' className='bg-gray-300 rounded-sm p-2'/>
    {errors.Email && <p className='text-red-500 text-xs font-semibold'>Email is invalid</p>}
    </div>
    <div className='input flex flex-col w-[100%] bigphone:w-[45%]'>
    <p className=''>Company Name (If Applicable)</p>
    <input type="text" {...register("Company")}  placeholder='Example Company' className='bg-gray-300 rounded-sm p-2'/>
    {errors.Company && <p className='text-red-500 text-xs font-semibold'>Company name is invalidt</p>}
    </div>
    </div>
    <div className='input flex flex-col bigphone:flex-row justify-between phone:my-2'>
    <div className='input flex flex-col w-[100%] bigphone:w-[45%]'>
    <p className=''>Phone</p>
    <div>
    
    <div className='flex flex-col w-full justify-between'>
   
    <PhoneInput
        defaultCountry="rw"
        {...register("Phone",   {required:true})}
        // onChange={(phone) => setPhone(phone)}
        className='bg-white rounded-sm p-2'
      />

      {/*!isPhoneValid && <div style={{ color: 'red' }}>Phone is not valid</div>*/}
    {/*<p className='bg-gray-300 rounded-sm items-center justify-center flex flex-col p-2 w-[15%] text-xs'>+250</p>
  <input type="text" {...register("Phone",   {required:true, pattern:/(0(7[2|3|8|9][0-9]))\d{5}/})}  placeholder='555 555 555' className='bg-gray-300 rounded-sm p-2 w-[82%]'/>*/}
    </div>
    {(errors.Phone ) && <p className='text-red-500 text-xs font-semibold'>Phone number is invalid</p>}

    </div>
    </div>
   
    </div>
    <p className='important text-sm my-4'>*View our <span className='font-semibold underline'>Privacy Policy</span> for details on privacy and subscription.</p>
    <button type='submit'  className='bg-black text-gray-100 text-sm py-2 mb-5 phone:mb-1 px-10 rounded-full mt-4' style={{backgroundColor:errors.Phone && errors.Company && errors.Email&& errors.FirstName&& errors.LastName?"black": "black"}}>Submit</button>
    </form>
    </div>

    <div className='w-[100%] my-1 bigphone:my-4 tablet:w-[25%] h-[70%] bg-blacky px-5 py-10 space-y-4 flex flex-col justify-evenly'>
    <p className='text-sm text-gray-300 text-start'>Fell free to send us an email or give us a call and we would get back to you as soon as possible. </p>
    <div>
    <div className='flex flex-row space-x-1 my-1'><p className='text-sm text-gray-200 text-start font-semibold'>Email:</p><p className='text-sm text-gray-300 text-start underline'><Link to={"mailto:team@theartemisai.com"}>team@theartemisai.com</Link></p></div>
    <div className='flex flex-row space-x-1'><p className='text-sm text-gray-200 text-start font-semibold'>Phone:</p><p className='text-sm text-gray-300 text-start'><Link to="tel:+250 798 971 331"> +250 798 971 331</Link></p></div>

    </div>
    </div>
    </div>
  )
}

export default ContactSection