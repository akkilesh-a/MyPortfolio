"use client";

import Image from "next/image";
import React from "react";
import { projectItems } from "@/data";
import { CardBody, CardContainer, CardItem, AnimatedTooltip, Heading } from "@/components/ui";
import Link from "next/link";
import VortexWrapper from "../VortexWrapper";

export function Projects() {
  return (
    <VortexWrapper otherClasses="w-screen px-8 py-8">
      <section id="projects" className="flex flex-col gap-8 justify-center items-center w-full h-full ">
        <Heading text={"Recent Projects"}/>
        <div className="flex flex-col items-center sm:flex-row sm:pl-96 gap-x-16 w-[90vw] overflow-x-auto no-scrollbar justify-center">
          {projectItems.map((item,index)=>{
            if(index<4){return(
              <CardContainer key={index}>
                <CardBody className="flex flex-col relative group/card bg-gray-400 hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-opacity-10 border-white/[0.2] w-[80vw] sm:w-[25rem] h-[550px] rounded-xl p-4 pt-6 border  ">
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
                  <CardItem translateZ="100" className="w-full flex-1 flex justify-center items-center">
                    <a href={`${item.deployedLink}`} target="__blank">
                      <Image
                        
                        src={"/projects/"+item.projectImage}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </a>
                  </CardItem>
                  <CardItem className="flex justify-between w-full flex-col sm:flex-row gap-2 sm:gap-0 items-center">
                    <div>
                      <AnimatedTooltip items={item.techStacks} />
                    </div>
                    <div className="flex gap-2">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={`${item.deployedLink}`}
                        target="__blank"
                        className="font-bold"
                      >
                        <Image alt="link_icon" height={40} width={40} src="/icons/world-www.svg" />
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={`${item.githubLink}`}
                        target="__blank"
                        className="font-bold"
                      >
                        <Image alt="github_icon" height={40} width={40} src="/icons/github.svg" />
                      </CardItem>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            )}
          })}
        </div>
      </section>
    </VortexWrapper>
  );
}
