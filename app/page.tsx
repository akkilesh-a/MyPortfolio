'use client'

import {Hero, Grid} from "@/components";
import { FloatingNav } from "@/components/ui";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto">
      <FloatingNav navItems={[
        {
          name: "Home",
          link: "/",
          icon: <FaHome />,
        },
        {
          name: "About",
          link: "/about",
          icon: <FaUser />,
        },
      ]} />
      <Hero />
      <Grid />

    </main>
  );
}
