/* eslint-disable react/no-unescaped-entities */
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12">
      <div>
        <h5 className="my-2 text-xl font-bold text-white">Let's Connect</h5>
        <p className="text-[ABD7BE] mb-4 max-w-md">
          {" "}
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me.
        </p>
        <div className="flex flex-row gap-2 socials">
          <Link href="https://github.com/NipunPJ27">
            <Image src={GithubIcon} alt="github icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/nipunjayasinghe/">
            <Image src={LinkedinIcon} alt="linkedin icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="mark@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
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
              type="text"
              id="subject"
              required
              placeholder="Hello there!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
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
              placeholder="Hey Nipun, I would like to discuss a project with you."
            />
          </div>
            <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
