"use client";

import {
  Hero,
  Badges,
  Projects,
  About,
  Footer,
} from "@/components/homepage-sections";
import { FloatingNav } from "@/components/ui";
import { FaHome } from "react-icons/fa";
import { FaComputer, FaIdBadge, FaUser } from "react-icons/fa6";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    // @ts-expect-error - TODO: Fix this
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative z-10 flex justify-center items-center flex-col overflow-hidden mx-auto">
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
            name: "Badges",
            link: "#badges",
            icon: <FaIdBadge />,
          },
        ]}
      />
      <Hero />
      <About />
      <Projects />
      <Badges />
      <Footer />
    </main>
  );
}
