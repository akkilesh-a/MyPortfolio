"use client";

import Image from "next/image";
import React from "react";
import { projectItems } from "@/data";
import {
  CardBody,
  CardContainer,
  CardItem,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui";
// import { Heading } from "@/components/ui/heading";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { AvatarGroup, AvatarGroupTooltip } from "../animated";

export function Projects() {
  return (
    <section
      id="projects"
      className="w-screen px-8 py-8 flex flex-col gap-8 justify-center items-center h-full"
    >
      <p className="m-2 p-2 text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-3xl sm:text-5xl md:text-7xl font-bold relative z-20 bg-clip-text ">
        <span className="text-transparent">My Projects</span>
      </p>
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-6 pb-4 min-w-max px-4">
          {projectItems.map((item, index) => {
            return (
              <CardContainer key={index}>
                <CardBody className="flex flex-col relative group/card bg-transparent backdrop-blur-sm hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-opacity-10 border-white/[0.2] w-[350px] h-[550px] rounded-xl p-4 pt-6 border flex-shrink-0">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className=" text-sm max-w-sm mt-2 text-neutral-300"
                  >
                    {item.description}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    className="w-full flex-1 flex justify-center items-center"
                  >
                    <a
                      href={`${item.deployedLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={"/projects/" + item.projectImage}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </a>
                  </CardItem>
                  <CardItem className="flex justify-between w-full flex-col sm:flex-row gap-2 sm:gap-0 items-center">
                    <AvatarGroup>
                      {item.techStacks.map((avatar, index) => (
                        <Avatar key={index}>
                          <AvatarImage src={avatar.image} />
                          <AvatarFallback>{avatar.techStack}</AvatarFallback>
                          <AvatarGroupTooltip>
                            <p>{avatar.techStack}</p>
                          </AvatarGroupTooltip>
                        </Avatar>
                      ))}
                    </AvatarGroup>
                    <div className="flex">
                      <a
                        href={`${item.deployedLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 h-10 w-10 p-2"
                      >
                        <FaGlobe className="h-5 w-5" />
                      </a>
                      <a
                        href={`${item.githubLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 h-10 w-10 p-2"
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
