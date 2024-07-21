'use client'

import React from 'react'
// import { Spotlight } from './ui/Spotlight'
// import { Vortex } from './ui/vortex'
import {TypewriterEffectSmooth, MagicButton, Vortex, Spotlight} from "./ui";
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {

    const words = [
        {
          text: "Web Developer,",
          className: "text-lg md:text-5xl text-white",
        },
        {
          text: "Tech Enthusiast",
            className: "text-lg md:text-5xl text-white",
        },
        {
          text: "and",
            className: "text-lg md:text-5xl text-white",
        },
        {
          text: "Human.",
          className: "text-lg md:text-5xl text-blue-500",
        },
      ];


  return (
    <div className='w-screen h-screen overflow-hidden text-white' >
        <Spotlight className='overflow-hidden -top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='overflow-hidden top-50 left-[80%] h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='overflow-hidden top-100 left-[10%] h-[80vh] w-[50vw]' fill='blue' />
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={100}
          baseHue={220}
          className="justify-center h-screen p-4 md:p-0 overflow-hidden flex flex-col items-center"
        >
            {/* Grid Backgorund */}
            <div className="absolute h-screen w-full bg-grid-white/[0.03] flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
            </div>

            <p className="text-center text-3xl sm:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
                You are in the presence of Greatness!
            </p>

            {/* Typewriter Animation */}
            <TypewriterEffectSmooth words={words} className='flex items-baseline'/>

            <p className='text-xs md:text-xl'>Hi, I&apos;m Akkilesh!</p>

            <a href='#about' >
                <MagicButton text="Connect with me" icon={<FaLocationArrow />} position={"right"} otherClasses={"flex gap-4"}/>
            </a>

        </Vortex>
    </div>
  )
}

export default Hero