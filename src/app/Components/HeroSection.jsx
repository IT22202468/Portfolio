/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center sm:text-left place-self-center">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Nipun",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Full stack developer",
                1000,
                "a Java developer",
                1000,
                "a writer at Medium",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I am an undergraduate student at the Sri Lanka Institute of
            Information Technology (SLIIT), specializing in software
            development. With a solid foundation in Java and JavaScript, I have
            successfully completed several projects that showcase my proficiency
            in these languages. My technical skills extend to frameworks and
            libraries such as Express, Node.js, and Next.js, where I have
            applied my knowledge to build robust and efficient web applications.
          </p>
          <div>
            <button className="w-full px-6 py-3 mr-4 text-white rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 sm:w-fit">
              Hire Me
            </button>
            <button className="w-full px-1 py-1 mt-3 text-white rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 sm:w-fit">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/Hero-section.png"
              alt="hero image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
