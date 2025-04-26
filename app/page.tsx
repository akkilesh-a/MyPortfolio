"use client";

import {
  Hero,
  Badges,
  Projects,
  CollabProjects,
  About,
  Footer,
} from "@/components/homepageSections";
import { FloatingNav } from "@/components/ui";
import { FaHome } from "react-icons/fa";
import { FaComputer, FaIdBadge, FaUser, FaUserGroup } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <FloatingNav
        navItems={[
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
          {
            name: "Collab Projects",
            link: "#collabProjects",
            icon: <FaUserGroup />,
          },
          {
            name: "Badges",
            link: "#badges",
            icon: <FaIdBadge />,
          },
        ]}
      />
      <Hero />
      <About />
      <Projects />
      <CollabProjects />
      <Badges />
      <Footer />
    </main>
  );
}
