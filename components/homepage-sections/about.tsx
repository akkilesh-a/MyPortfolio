"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem, Globe, IconCloud } from "@/components/ui";
// import { Heading } from "@/components/ui/heading";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaGlobeAfrica, FaSuitcase } from "react-icons/fa";
import { FaCode, FaGithub, FaUser } from "react-icons/fa6";
import { techStacks } from "@/data";
import GitHubCalendar from "react-github-calendar";
import { IconPoint } from "@tabler/icons-react";

const currentProjects: string[] = [];

export function About() {
  return (
    <section id="about" className="w-screen px-8 py-8 flex flex-col gap-16">
      <p className="m-2 p-2 text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-3xl sm:text-5xl md:text-7xl font-bold relative z-20 bg-clip-text ">
        <span className="text-transparent">About Me</span>
      </p>
      <BentoGrid className="  mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div className="relative flex justify-center size-full items-center overflow-hidden">
      <Image
        src="/me.jpg"
        alt="My profile pic"
        height="150"
        width="200"
        className="rounded-xl "
      />
    </div>
  );
};
const SkeletonTwo = () => {
  return (
    <div className="relative flex justify-center size-full items-center overflow-hidden">
      <IconCloud iconSlugs={techStacks} />
    </div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="p-4 space-y-2">
        {currentProjects.map((project, i) => (
          <div
            key={i}
            className="flex items-center text-sm font-semibold text-white"
          >
            <IconPoint />
            <p>{project}</p>
          </div>
        ))}
      </div>
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <div className="hidden md:flex justify-center items-center pt-8">
        <GitHubCalendar
          username="Akkilesh-A"
          colorScheme="dark"
          blockSize={10}
          errorMessage="Refresh the page to see the calendar"
          hideColorLegend
        />
      </div>
      <div className="hidden sm:flex sm:justify-center md:hidden">
        <GitHubCalendar
          username="Akkilesh-A"
          colorScheme="dark"
          blockSize={6}
          errorMessage="Refresh the page to see the calendar"
          hideColorLegend
        />
      </div>
      <div className="flex justify-center sm:hidden">
        <GitHubCalendar
          username="Akkilesh-A"
          colorScheme="dark"
          blockSize={3.5}
          errorMessage="Refresh the page to see the calendar"
          hideColorLegend
          hideMonthLabels
          hideTotalCount
        />
      </div>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div className="relative flex justify-center size-full items-center overflow-hidden">
      <Globe />
    </div>
  );
};

const items = [
  {
    title: "Yes! this is me",
    description: (
      <span className="text-sm">
        It&apos;s me Akkilesh, the creator of this website.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <FaUser className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "What I code with",
    description: (
      <span className="text-sm">
        I code with a lot of stuff, but here are some of the things i use
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <FaCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Currently working on",
    description: (
      <span className="text-sm">
        Personal and professional projects that are in progress.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <FaSuitcase className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "GitHub Contributions",
    description: <span className="text-sm">The greenery i like 🌲</span>,
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Globe? Why not?",
    description: (
      <span className="text-sm">
        Liked the component, Couldnt find a better place to put it 🤗
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <FaGlobeAfrica className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "Text Summarization",
  //   description: (
  //     <span className="text-sm">
  //       Summarize your lengthy documents with AI technology.
  //     </span>
  //   ),
  //   header: <SkeletonSix />,
  //   className: "md:col-span-1",
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Text Summarization",
  //   description: (
  //     <span className="text-sm">
  //       Summarize your lengthy documents with AI technology.
  //     </span>
  //   ),
  //   header: <SkeletonSeven />,
  //   className: "md:col-span-2",
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
