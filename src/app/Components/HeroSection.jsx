/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Spline from '@splinetool/react-spline/next';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 text-center sm:text-left place-self-center justify-self-start">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-7xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
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
            Aspiring Software Engineer | Java & JavaScript Developer | AI & Machine Learning Enthusiast | Technical Writer on Medium
          </p>
          <div>
            <button className="w-full px-6 py-3 mr-4 text-white rounded-full bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 sm:w-fit">
              Contact me
            </button>
            <button className="w-full px-1 py-1 mt-3 text-white rounded-full bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:bg-slate-800 sm:w-fit">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="lg:w-[500px] lg:h-[500px] col-span-4 mt-4 place-self-center lg:mt-0">
          {/* <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/Hero-section.png"
              alt="hero image"
              width={500}
              height={500}
            />
          </div> */}
          <Spline
            scene="https://prod.spline.design/hocZo1haU1fpFco8/scene.splinecode"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
