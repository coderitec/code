"use client"
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Londrina_Shadow } from "next/font/google";

const lond = Londrina_Shadow({ subsets: ["latin"],weight:['400'] });




const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY

async function fetchImages(query) {
    const API_URL = `https://api.pexels.com/v1/search?query=${query}&orientation=landscape&per_page=1`; // Limit to 1 image per query
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: API_KEY
        }
      });
      return response.data.photos;
    } catch (error) {
      console.error('Error fetching images from Pexels:', error);
      return [];
    }
  }

  const initialTrainingModules = [
    {
      id: 1,
      title: {
        text: "Curriculum Development",
        imageUrl: "" // This will be updated
      },
      description: "CREATING COMPREHENSIVE AND ENGAGING FRONTEND DEVELOPMENT SYLLABI"
    },
    {
      id: 2,
      title: {
        text: "Hands-on Workshops",
        imageUrl: "" // This will be updated
      },
      description: "CONDUCTING INTERACTIVE SESSIONS AND LIVE CODING DEMOS"
    },
    {
      id: 3,
      title: {
        text: "Frontend Development Training",
        imageUrl: "" // This will be updated
      },
      description: "TEACHING HTML, CSS, TAILWINDCSS, JAVASCRIPT, AND NEXTJS REACT FRAMEWORKS"
    },
    {
      id: 4,
      title: {
        text: "Project Guidance",
        imageUrl: "" // This will be updated
      },
      description: "MENTORING STUDENTS THROUGH PRACTICAL PROJECTS AND REAL-WORLD SCENARIOS"
    }
  ];


export default function MoreAbout() {
    const [trainingModules, setTrainingModules] = useState(initialTrainingModules);
    const [changepic, setChangePic] = useState(0)

    function handlePicChange(id){
        setChangePic(id)
    }

    useEffect(() => {
        async function updateTrainingModulesWithImages() {
          const updatedModules = await Promise.all(trainingModules.map(async module => {
            const images = await fetchImages(module.title.text);
            if (images.length > 0) {
              return {
                ...module,
                title: {
                  ...module.title,
                  imageUrl: images[0].src.large // Choose the appropriate size (small, medium, large)
                }
              };
            }
            return module;
          }));
          
          setTrainingModules(updatedModules);
        }
    
        updateTrainingModulesWithImages();
      }, []);
 
  return (
    <section className='flex sm:flex-row flex-col items-start justify-start space-x-6 px-16'>
        <div className='flex flex-col space-y-6  py-8 px-4'>
    
          {trainingModules[changepic].title.imageUrl && <Image src={trainingModules[changepic].title.imageUrl} alt={trainingModules[changepic].title.text} width='600'  height='400' className='rounded-md ' style={{filter: 'sepia(66)'}}/>}
        
        <p className='sm:w-[600px] text-lg text-slate-300'>My services combine creativity and cutting-edge technology to transform your vision into an engaging, interactive web experience.</p>
        </div>

        <div>
            <div>
               {trainingModules.map(module => (
                <section key={module.id} className='flex sm:flex-row flex-col space-x-6 items-center  border-b-2 border-b-slate-300 cursor-pointer' onClick={()=>handlePicChange(module.id-1)}>
                    <div className={`sm:text-4xl ${lond.className}`}>
                        <p>0 {module.id}</p>
                    </div>
                    <div className='flex flex-col space-y-4 py-8'>
                        <h2 className='sm:text-4xl'>{module.title.text}</h2>
                        <p className='text-slate-300'>{module.description}</p>
                    </div>
                </section>

               ))} 
            </div>
        </div>
    </section>
  )
}
