"use client";

import React from "react";
import { TypewriterEffectSmooth, MagicButton } from "../ui";
// import { Spotlight } from "../ui/spotlight";
import { FaLocationArrow } from "react-icons/fa6";

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
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="-top-40 left-0  md:left-40 md:-top-10 h-screen"
        fill="blue"
      /> */}

      {/* Grid Background */}
      <div className="absolute h-screen w-full bg-grid-white/[0.03] flex items-center justify-center"></div>

      <div className="h-screen flex justify-center flex-col items-center px-8 py-8">
        {/* <Heading text={"You are in the presence of Greatness! "} /> */}

        {/* Typewriter Animation */}
        <TypewriterEffectSmooth
          words={words}
          className="flex items-baseline "
        />

        <p className="text-xs md:text-xl">Hi, I&apos;m Akkilesh!</p>

        <a
          href="https://www.linkedin.com/in/akkilesh-a-620561275/"
          target="_blank"
          className="mt-8"
        >
          <MagicButton
            text="Connect with me"
            icon={<FaLocationArrow />}
            position={"right"}
            otherClasses={"flex gap-4"}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
