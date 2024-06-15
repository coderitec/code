import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { BsChevronDoubleDown } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";



export default function BiLine() {
  return (
    <>
      <div className='grid sm:grid-cols-2 grid-cols-1 grid-rows-[200px_200px]  sm:grid-rows-[200px] px-16 gap-4 py-2 text-xl'>

        <ul className='flex sm:items-end items-center sm:space-x-6 sm:flex-row flex-col border-t-4 space-y-3 py-1 '>
           <li><Link href='https://github.com/coderitec' target='_blank' title='GitHub Profile'><FaGithub /></Link></li>

           <li><Link href='https://www.linkedin.com/in/franc-enemuo' target='_blank' title='LinkedIn Profile'><FaLinkedin /></Link></li> 

           <li><Link href='https://www.instagram.com/@coderite_' target='_blank' title='Instagram Posts'><FaInstagramSquare /></Link></li> 
        </ul>

        <div className='border-b-4 text-justify '>
            <h2 className='hyphens-auto'>Experienced Frontend Developer and Educator with expertise in React, Next.js, and React Native. Successfully trained over 300 aspiring developers in software development.</h2>

            <button className='bg-white text-slate-950 py-4 px-4 rounded-lg shadow-xl my-3'><Link href='https://wa.me/qr/QK6LUP3XK6MYE1' target='_blank'
            className='flex items-center space-x-4'>
              <span>Let&apos;s Talk</span> 
              <MdArrowOutward />
            </Link>
            </button>
        </div>

    </div>
        <div className='h-36 flex items-center justify-center flex-col -space-y-3 animate-pulse text-2xl'>
          
          <IoIosArrowDown />
          <BsChevronDoubleDown />
        </div>
    </>
  )
}
