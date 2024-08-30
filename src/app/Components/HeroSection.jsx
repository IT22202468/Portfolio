/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline/next";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import FacebookIcon from "../../../public/facebook-icon.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left place-self-center justify-self-start"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-7xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Nipun Jayasinghe",
                1000,
                "a full-stack developer",
                1000,
                "a Java developer",
                1000,
                "UI/UX designer",
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
            Aspiring Software Engineer | Java & JavaScript Developer | AI &
            Machine Learning Enthusiast | Technical Writer on Medium
          </p>
          <div>
            <Link href="#contact">
              <button className="w-full px-6 py-3 mr-4 text-white rounded-full bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 sm:w-fit">
                Contact me
              </button>
            </Link>
            <button className="w-full px-1 py-1 mt-3 text-white rounded-full bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:bg-slate-800 sm:w-fit">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download CV
              </span>
            </button>
            <br />
            <div className="flex flex-row justify-center w-full mt-10 sm:justify-start">
              <Link
                href="https://github.com/IT22202468"
                className="flex items-center gap-2"
              >
                <Image src={GithubIcon} alt="Github Icon" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nipunjayasinghe/"
                className="flex items-center gap-2"
              >
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </Link>
              <Link
                href="https://wa.me/94704435850?text=Hello%20Nipun!"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={WhatsappIcon} alt="Whatsapp Icon" />
              </Link>
              <Link
                href="https://www.instagram.com/nipun_pj/"
                className="flex items-center gap-2"
              >
                <Image src={InstagramIcon} alt="Instagram Icon" />
              </Link>
              <Link
                href="https://www.facebook.com/nipun.jayasinghe.142/"
                className="flex items-center gap-2"
              >
                <Image src={FacebookIcon} alt="Facebook Icon" />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block lg:w-[500px] lg:h-[500px] col-span-4 mt-4 place-self-center lg:mt-00"
        >
          <Spline scene="https://prod.spline.design/mph90IOJiIePxRK1/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
