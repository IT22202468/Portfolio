"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";


const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {};

  return (
    <div>
      <h2 className="mt-10 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        Contact
      </h2>
      <section
        id="contact"
        className="relative grid gap-4 pb-12 my-12 md:grid-cols-2 md:my-12"
      >
        <div className="z-10">
          <h5 className="my-2 text-xl font-bold text-white">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="flex flex-col socials">

            <div className="flex flex-row gap-2 socials">
              <Link href="https://github.com/NipunPJ27" className="flex items-center gap-2">
                <Image src={GithubIcon} alt="Github Icon" />
                <span className="mt-5">NipunPJ27</span>
              </Link>
            </div>

            <div className="flex flex-row gap-2 socials">
              <Link href="https://www.linkedin.com/in/nipunjayasinghe/" className="flex items-center gap-2">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
                <span className="mt-5">Nipun Jayasinghe</span>
              </Link>
            </div>

          </div>
        </div>
        <div>
          <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EmailSection;
