import React from "react";

import Image from "next/image";
import { shinySocials } from "@/data";

const Footer = () => {
  return (
    <section
      id="socials"
      className="w-screen px-8 py-8 h-[30vh] flex gap-8 justify-center items-center"
    >
      {shinySocials.map((item, index) => {
        return (
          <a key={index} href={item.url} target="_blank">
            <Image
              src={`${item.icon}`}
              alt={item.name}
              height="50"
              width="60"
              className="object-contain bg-gray-400/30 rounded-xl p-2 hover:translate-y-3"
            />
          </a>
        );
      })}
    </section>
  );
};

export default Footer;
