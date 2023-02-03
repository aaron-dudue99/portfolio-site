import React from "react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import HeadingBubble from "./HeadingBubble";

const Hero = () => {
  return (
    <section className="grid grid-cols-12 gap-4 h-[calc(100vh-146px)]">
      <div className="h-full flex gap-12 flex-col justify-end items-center">
        <SiGithub color="#e6fdf9" fontSize="1.8rem" />
        <SiTwitter color="#e6fdf9" fontSize="1.8rem" />
        <SiLinkedin color="#e6fdf9" fontSize="1.8rem" />
        <div>
          <img src="./accent_group.svg" alt="accent" className="rotate-180" />
        </div>
      </div>
      <div className="col-span-11 flex gap-4">
        <div className="w-full h-full">
          <div className="mt-28">
            <HeadingBubble alignment="left" />
            <h2 className="font-serif text-4xl font-bold text-green-100 mt-2">
              fullstack
              <br /> developer
            </h2>
            <p className="font-sans text-white pt-4 text-white-text">
              Full stack developer who specializes in building software
              solutions for both the web and mobile platforms
            </p>
          </div>
        </div>
        <div
          className="w-full flex flex-col items-center justify-end bg-top bg-no-repeat mt-16 "
          style={{ backgroundImage: `url('./bg-green.svg')` }}
        >
          <img src="./headshot.png" alt="Aaron Dudue" />
        </div>
        <div className="flex flex-col w-full justify-between">
          <div className="flex justify-end w-full">
            <img src="./accent_group.svg" alt="accent" className="" />
          </div>
          <div>
            <HeadingBubble />
            <br />
            <h2 className="font-serif text-4xl font-bold text-green-100 text-right">
              ui/ux <br /> designer
            </h2>
            <p className="font-sans text-white pt-4 text-white-text text-right">
              UI/UX product designer who designs and prototypes software
              products for clients before they’re forwarded for development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
