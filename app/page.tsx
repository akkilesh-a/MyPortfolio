'use client'

import { Hero, Badges, Grid, Projects } from "@/components/sections";
import { FloatingNav } from "@/components/ui";
import { FaHome } from "react-icons/fa";
import { FaComputer, FaUser } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <FloatingNav navItems={[
        {
          name: "Home",
          link: "/",
          icon: <FaHome />,
        },
        {
          name: "About",
          link: "#about",
          icon: <FaUser />,
        },
        {
          name: "Projects",
          link: "#projects",
          icon: <FaComputer />,
        },
      ]} />
      <Hero />
      <Grid />   
      <Projects />  
      <Badges />  
    </main>
  );
}
