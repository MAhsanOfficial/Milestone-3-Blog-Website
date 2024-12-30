'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { IoLogoLinkedin } from "react-icons/io5";


const Navbar = () => {
  const [currentDateTime,setCurrentDateTime]= useState(``)

  useEffect(()=>{
    const updateDateTime= ()=>{
      const now = new Date()
      const options : Intl.DateTimeFormatOptions ={
   year:'numeric',
   month:'long',
   weekday:'long',
   day:'numeric',
   hour:'2-digit',
   hour12:false,
   minute:'2-digit',
   second:'2-digit'
      }
      setCurrentDateTime(now.toLocaleDateString('en-US',options)+''+now.toLocaleTimeString('en-US',{hour12:false}))
    }

   updateDateTime();
   const interValId = setInterval(updateDateTime,1000);
   return ()=>clearInterval(interValId)
  },[]);
  return (

    <>
     <header className='text-gray-500 rounded-lg shadow-lg body-font'>
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">

    <div className="flex-1 text-slate-900 ">
   <span className='font-mono text-lg underline bg-yellow-500 rounded-lg' >{currentDateTime}</span>
    </div>




    <nav className="md:ml-auto  flex flex-wrap items-center justify-center text-black">
      <Link href={'/'} className='font-mono hover:text-orange-500 transform hover:scale-105 hover:underline transition-colors duration-300   mr-5 '>HOME</Link>
      <Link href={'/pricing'} className='font-mono hover:text-orange-500 transform hover:scale-105 hover:underline transition-colors duration-300  mr-5 '>Pricing</Link>
      <Link href={'/#blog'} className='font-mono hover:text-orange-500 transform hover:scale-105 hover:underline transition-colors duration-300  mr-5 '>BLOG</Link>
      <Link href={'/contact'} className='font-mono hover:text-orange-500 transform hover:scale-105 hover:underline transition-colors duration-300  mr-5 '>CONTACT</Link>
    </nav>


   <Link href={'https://www.linkedin.com/in/muhammad-ahsan-b26317296/'} target='blank'><button className='inline-flex border-0 py-1 px-3 focus:outline-none  items-center hover:bg-blue-600 mt-4 md:ml-0 bg-blue-700 transform hover:scale-105 hover:underline transition-colors duration-300 text-white rounded-lg'>LINKEDIN  <IoLogoLinkedin/>   </button></Link>

      </div>
     </header>
     
    
    </>
  )
}

export default Navbar