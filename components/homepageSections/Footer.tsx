import React from 'react'
import VortexWrapper from '../VortexWrapper'
import Image from 'next/image'
import { shinySocials } from '@/data'

const Footer = () => {
  return (
    <VortexWrapper otherClasses="w-screen px-8 py-8">
        <section id='socials' className='h-[30vh] flex gap-8 justify-center items-center'>
            {
                shinySocials.map((item,index)=>{
                    return(
                        <a key={index} href
                        ={item.url} target='_blank'>
                            <Image
                            src={`${item.icon}`}
                            alt={item.name}
                            height="50"
                            width="60"
                            className="object-contain bg-gray-400/30 rounded-xl p-2 hover:translate-y-3"
                            />
                        </a>
                    )
                }
            )
                
            }
        </section>
    </VortexWrapper>
  )
}

export default Footer