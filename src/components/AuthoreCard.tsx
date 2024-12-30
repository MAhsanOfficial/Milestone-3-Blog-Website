import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare } from 'react-icons/fa'
import { SiInstagram } from 'react-icons/si'

const AuthoreCard = () => {
  return (
    <div className='shadow-lg p-6 mt-12 bg-yellow-500 rounded-3xl cursor-pointer  hover:bg-yellow-400'>
    <div className="flex items-center animation-fadeIn">
       <Image className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-gray-500 ' src={'/images/handsome-ahsan-picture.png'} alt='my-picture-author' width={400} height={400}></Image>
       <div className="">
        <h3 className="text-3xl font-bold hover:underline cursor-pointer font-mono text-orange-600  ">Muhammad AHSAN</h3>
        <p className="text-gray-600  font-mono">I help real Website Developing Get more Clients by making highly Converting Websites || Expertise in *REACT.JS* && *NEXT.JS* || TypeScript || Tailwind || JavaScript || ES6 || Tailwind || Python || JAMStack Engineer🖥️</p>
       </div>
    </div>



    <p className="mt-4 leading-relaxed ">
    Leveraging the power of modern technologies like React.JS , Next.JS TypeScript, and Tailwind CSS , ShadCN , Python , OOPS..I strive to create elegant and efficient solutions to complex challenges. Whether its crafting intuitive user interfaces or optimizing website Performance, I am committed to delivering top-notch results that exceed Expectations.</p>

    <div className="mt-4 flex space-x-3 ">
      <Link href={'https://www.facebook.com/profile.php?id=61566688442517'} target='blank' className='px-4 py-5 gap-1 text-white bg-blue-700 flex  rounded-lg transition duration-300  hover:bg-blue-900 '>
      Facebook
      <FaFacebook className='mt-1' />

      </Link>
      <Link href={'https://www.instagram.com/ahsan__freelancer/'} target='blank' className='px-4 py-5 gap-1 text-white bg-pink-500 flex rounded-lg transition duration-300  hover:bg-pink-600 '>
      Instagram <SiInstagram className='mt-1' />


      </Link>
      <Link href={'https://github.com/MAhsanOfficial'} target='blank' className='px-4 py-5 flex gap-1 text-white  bg-orange-600 rounded-lg transition duration-300  hover:bg-orange-700 '>
      GitHub <FaGithub className='mt-1' />
      </Link>
    </div>
    </div>
  )
}

export default AuthoreCard