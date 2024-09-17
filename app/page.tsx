'use client'

import { Hero, Badges, Projects, CollabProjects, About } from "@/components/homepageSections";
import { BentoGrid, FloatingNav } from "@/components/ui";
import { FaHome } from "react-icons/fa";
import { FaComputer, FaIdBadge, FaRegIdBadge, FaUser, FaUserGroup } from "react-icons/fa6";
import { Analytics } from "@vercel/analytics/react"
import VortexWrapper from "@/components/VortexWrapper";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <FloatingNav navItems={[
        {
          name: "Home",
          link: "/",
          icon: <FaHome />,
        },
        {
          name: "Projects",
          link: "#projects",
          icon: <FaComputer />,
        },
        {
          name: "Collab Work",
          link: "#collabWork",
          icon: <FaUserGroup />,
        },
        {
          name: "Badges",
          link: "#badges",
          icon: <FaIdBadge />,
        },
      ]} />
      <Hero />
      <About />
      <Projects /> 
      <CollabProjects />
      <Badges />  
    </main>
  );
}
