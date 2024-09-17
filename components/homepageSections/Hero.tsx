'use client'

import React from 'react'
import {TypewriterEffectSmooth, MagicButton, Heading, Spotlight} from "../ui";
import { FaLocationArrow } from 'react-icons/fa6';
import VortexWrapper from '../VortexWrapper';
import Image from 'next/image';
const Hero = () => {

    const words = [
        {
          text: "Web Developer,",
          className: " text-white",
        },
        {
          text: "Tech Enthusiast",
            className: " text-white",
        },
        {
          text: "and",
            className: " text-white",
        },
        {
          text: "Human.",
          className: " text-blue-500",
        },
      ];

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-white' >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 h-screen"
        fill="white"
      />
       <Spotlight
        className="-top-40 left-0  md:left-40 md:-top-10 h-screen"
        fill="blue"
      />
      <div className='fixed p-8 rounded text-white bg-black-100 z-50 text-xl bottom-10 right-10'>
        <h1>Building in progress!😊</h1>
      </div>
      <VortexWrapper>
        {/* Grid Backgorund */}
        <div className="absolute h-screen w-full bg-grid-white/[0.03] flex items-center justify-center">
        </div>

        <div className='h-screen flex justify-center flex-col items-center'>
          <Heading text={"You are in the presence of Greatness! "} emoji='🤗'/>

          {/* Typewriter Animation */}
          <TypewriterEffectSmooth words={words} className='flex items-baseline '/>

          <p className='text-xs md:text-xl'>Hi, I&apos;m Akkilesh!</p>

          <a href='https://www.linkedin.com/in/akkilesh-a-620561275/' target='_blank' >
              <MagicButton text="Connect with me" icon={<FaLocationArrow />} position={"right"} otherClasses={"flex gap-4"}/>
          </a>
        </div>
       <div className='md:block hidden'>
          <p className='text-xs md:text-xl  absolute bottom-40 right-80 md:right-96 rotate-45 md:bottom-36 z-30'>This is Me! 😁</p>
          <Image 
            src="/arrow.gif" 
            alt="avatar" 
            width={100} 
            height={10} 
            className=' absolute bottom-40 right-80 md:right-80 rotate-45 md:bottom-40 z-30'
            />
          <Image
            src="/ProfilePic.png"
            alt="avatar"
            height="400"
            width="400"
            className="rounded-full  absolute bottom-0 right-0 md:right-10 md:bottom-20 "
          />      
       </div>
        </VortexWrapper>
    </div>
  )
}

export default Hero