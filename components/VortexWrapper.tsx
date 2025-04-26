"use client";

import React, { ReactNode } from "react";
import { Vortex } from "./ui";

const VortexWrapper = ({
  children,
  otherClasses,
}: {
  children: ReactNode;
  otherClasses?: string;
}) => {
  return (
    <Vortex
      backgroundColor="black"
      rangeY={1000}
      particleCount={100}
      baseHue={220}
      className={` ${otherClasses}`}
    >
      {children}
    </Vortex>
  );
};

export default VortexWrapper;
