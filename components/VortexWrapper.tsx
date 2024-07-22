'use client'

import React, { ReactNode } from 'react'
import {Vortex} from "./ui";

const VortexWrapper = ({children}:{children:ReactNode}) => {
  return (
    <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={100}
        baseHue={220}
        className=""
    >
        {children}
    </Vortex>
  )
}

export default VortexWrapper