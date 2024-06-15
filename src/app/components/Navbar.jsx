"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaHamburger } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { SidebarContext } from '../providers';



export default function Navbar() {
    const {nav,setNav} = useContext(SidebarContext)

    function handleNav(){
        setNav(!nav)
    }
  return (
    <div>
        <nav className='hidden sm:flex justify-between items-center px-16 capitalize text-2xl py-6'>
        <ul className='flex justify-evenly space-x-7'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>about</Link></li>
            <li><Link href='/works'>works</Link></li>
        </ul>
        <ul className='flex justify-evenly'>
            <li><Link href='/'  className='text-4xl'>Fr
            <span style={{textDecorationStyle: 'dotted',textDecorationLine:'overline', textDecorationColor:'fuchsia'}}>a</span>nc<span className='text-fuchsia-700 text-[4rem]'>.</span></Link></li>
        </ul>
        <ul className='flex justify-evenly space-x-7'>
            <li><Link href='/blog'>blog</Link></li>
            <li><Link href='/contact'>contact</Link></li>
        </ul>
        </nav>

        <nav className='sm:hidden text-2xl flex flex-col justify-between py-8'>
        {!nav &&
        <ul className='flex justify-between px-16 items-center'>
        <li><Link href='/'  className='text-2xl'>Fr
        <span style={{textDecorationStyle: 'dotted',textDecorationLine:'overline', textDecorationColor:'fuchsia'}}>a</span>nc<span className='text-fuchsia-700 text-[2rem]'>.</span></Link></li>
            <li onClick={handleNav} className='rounded-full p-2 border-white border-4 border-solid cursor-pointer'><FaHamburger /></li>
        </ul>
        }

        {nav && 
        <ul className='flex justify-between px-16 items-center'>
        <li><Link href='/'  className='text-2xl'>Fr
        <span style={{textDecorationStyle: 'dotted',textDecorationLine:'overline', textDecorationColor:'fuchsia'}}>a</span>nc<span className='text-fuchsia-700 text-[2rem]'>.</span></Link></li>
            <li onClick={handleNav} className='rounded-full p-1 text-4xl cursor-pointer'><MdOutlineCancel /></li>
        </ul>
        }
        {nav &&
        <ul className={nav && 'px-16 flex flex-col justify-evenly h-screen capitalize scale-y-90 duration-200 delay-500'}>
            <li><Link href='/about'>about</Link></li>
            <li><Link href='/works'>works</Link></li>
            <li><Link href='/blog'>blog</Link></li>
            <li><Link href='/contact'>contact</Link></li>
        </ul>
        }
        </nav>
    </div>
  )
}
