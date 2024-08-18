'use client'

import React from 'react'
import {TypewriterEffectSmooth, MagicButton, Heading, Spotlight} from "../ui";
import { FaLocationArrow } from 'react-icons/fa6';
import VortexWrapper from '../VortexWrapper';
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
          {/* Radial gradient for the container to give a faded look */}
        </div>

        <div className='h-screen flex justify-center flex-col items-center'>
          <Heading text={"You are in the presence of Greatness!"}/>

          {/* Typewriter Animation */}
          <TypewriterEffectSmooth words={words} className='flex items-baseline '/>

          <p className='text-xs md:text-xl'>Hi, I&apos;m Akkilesh!</p>

          <a href='#about' >
              <MagicButton text="Connect with me" icon={<FaLocationArrow />} position={"right"} otherClasses={"flex gap-4"}/>
          </a>
        </div>
      </VortexWrapper>
    </div>
  )
}

export default Hero