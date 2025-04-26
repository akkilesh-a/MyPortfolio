import React from "react";

const Heading = ({ text, emoji }: { text: String; emoji?: string }) => {
  return (
    <p className="m-2 p-2 text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-3xl sm:text-5xl md:text-7xl font-bold relative z-20 bg-clip-text ">
      <span className="text-transparent">{text}</span>
      {emoji}
    </p>
  );
};

export default Heading;
