"use client"
import React, {useEffect,  useContext } from 'react'
import styles from './main.module.css'
import Link from 'next/link'
import { MdArrowOutward } from "react-icons/md";
import { Londrina_Shadow } from "next/font/google";
import { SidebarContext } from '../providers';

const lond = Londrina_Shadow({ subsets: ["latin"],weight:['400'] });



export default function MainAbout() {
  const {scrollPosition, setScrollPosition,windowWidth, setWindowWidth} = useContext(SidebarContext)
 

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateWindowWidth);
    // Set initial window width
    setWindowWidth(window.innerWidth);
    }
    return () => {
      if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWindowWidth);
      }
    };
  }, [setScrollPosition,setWindowWidth]);

  const translateX = (scrollPosition / 3) % windowWidth;
  return (
    <div>

    <section className={`px-16 ${styles.main}`}>
        <div>

        </div>
        <div className='px-4 flex flex-col items-start justify-center space-y-10'>

            <h2 className='sm:text-5xl text-2xl sm:leading-[60px]'>Empowering Developers to Build <span className='border-b-8 border-fuchsia-800 '>Engaging</span> Web Experiences.</h2>

            <p className='text-xl text-slate-200'>Focus your energy on mastering your frontend development skills, while I guide you in effectively showcasing your talents in the digital world. Together, we&apos;ll ensure your work stands out from the competition and captures the attention of potential clients and employers.</p>

            <button className='bg-white text-slate-950 py-4 px-4 rounded-lg shadow-xl my-3'><Link href='https://wa.me/qr/QK6LUP3XK6MYE1' target='_blank'
            className='flex items-center space-x-4'>
              <span>About me</span> 
              <MdArrowOutward />
            </Link>
            </button>
        </div>

    </section>
    <div className='text-8xl flex flex-col text-start justify-center h-80 overflow-hidden'>
        <h2    className={`uppercase ${lond.className}`} 
        style={{
          letterSpacing: '20px',
          transform: `translateX(${translateX}px)`
        }}>about me</h2>
    </div>
    <div className='h-screen sm:text-6xl text-xl flex px-16'>
        <h2 className='sm:leading-[70px]'>I offer <span className='border-b-2 sm:border-b-8 border-fuchsia-800 '>creative</span> guidance to help you <span className='border-b-2 sm:border-b-8 border-fuchsia-800 '>master</span> frontend development and meet your business needs.</h2>
    </div>
    </div>
  )
}
