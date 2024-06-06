import React from "react";
import { ShortenerForm } from "./shortener";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex flex-col w-screen items-center gap-3 mb-28">
      <h1 className="bg-gradient-to-r from-teal-300 via-sky-300 to-sky-600 bg-clip-text text-transparent  text-[35px] md:text-[60px] font-extrabold select-none">
        Shorten. Share. Simplify.
      </h1>
      <h1 className="text-white text-sm mx-3 md:mx-0 md:text-lg font-light text-center select-none">
        Introducing Breve - The link shortener redefined. <br /> Shorten URLs,
        generate QR codes, share links, delve into detailed analytics. <br />
        Effortlessly, All in one place. <br />
      </h1>
      {/* <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Fast",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Snappy",
          1000,
          "Seamless",
          1000,
        ]}
        wrapper="span"
        speed={20}
        className="text-white text-lg font-light"
        repeat={Infinity}
      /> */}
      <ShortenerForm />
    </div>
  );
};

export default Hero;
