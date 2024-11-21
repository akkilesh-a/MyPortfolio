import React from 'react'
import VortexWrapper from '../VortexWrapper';
import { badgesData } from '@/data';
import Image from 'next/image';
import { Heading } from '../ui';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Badges = () => {
  return (
    <VortexWrapper otherClasses="w-screen px-8 py-8">
        <section id="badges" className="text-white flex flex-col gap-16">
            <Heading text={"Badges & Certificates"}/>
            <div className='flex flex-col sm:flex-row items-center justify-center flex-wrap gap-16'>
                {badgesData.map(({href,name,description,fileName},index)=>{
                    return(
                        <div key={index} className="rounded-xl w-[80vw] sm:w-auto p-4 sm:p-10 bg-gray-400 bg-opacity-10">
                            <div className='flex justify-center'>
                                <Image
                                src={`/${fileName}`}
                                alt={name}
                                height="200"
                                width="250"
                                className="object-contain"
                                />
                            </div>
                            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            {name}
                            </p>
                    
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {description}
                            </p>
                            <a href={href}>
                                <button className="rounded-full pl-4 pr-1 py-1 text-white flex gap-2 items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                    <span>Verify</span>
                                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-4 py-3 text-white">
                                        <FaExternalLinkAlt />
                                    </span>
                                </button>
                            </a>
                        </div>
                    )
                })}
            </div>     
        </section>   
    </VortexWrapper>
  )
}

export default Badges