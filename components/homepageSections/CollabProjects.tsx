"use client";

import Image from "next/image";
import React from "react";
import { collabProjectItems } from "@/data";
import { CardBody, CardContainer, CardItem, AnimatedTooltip, Heading } from "@/components/ui";
import Link from "next/link";
import VortexWrapper from "../VortexWrapper";

export function CollabProjects() {
  return (
    <VortexWrapper otherClasses="w-screen px-8 py-8">
      <section id="collabProjects" className="flex flex-col gap-16">
        <Heading text={"Collaborative Ventures"}/>
        <div className="flex flex-col items-center sm:flex-row gap-16 flex-wrap justify-center">
          {collabProjectItems.map((item,index)=>{
            if(index<3){return(
              <CardContainer key={index} className="">
                <CardBody className=" relative group/card bg-gray-400 hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-opacity-10 border-white/[0.2] w-[80vw] sm:w-[25rem] h-auto rounded-xl p-4 pt-6 border  ">
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
                  <CardItem translateZ="100" className="w-full mt-4">
                    <a href={`${item.deployedLink}`} target="__blank">
                      <Image
                        
                        src={"/collabProjects/"+item.projectImage}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </a>
                  </CardItem>
                  <div className="flex justify-center flex-col sm:flex-row gap-2 sm:gap-0 items-center mt-4">
                    
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
                  </div>
                </CardBody>
              </CardContainer>
            )}
          })}
        </div>
      </section>
    </VortexWrapper>
  );
}
