"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import MediumIcon from "../../../public/icons8-medium-240.svg";
// import BlogCard from "./BlogCard";
// import { motion, useInView } from "framer-motion";

const BlogSection = () => {
    return (
        <section id="blog">
            <h2 className="mb-8 text-4xl font-bold text-center text-white mt-25 md:mb-12">Blog</h2>
            <div className="flex flex-row gap-5">
                <p className="text-base md:text-justify lg:text-lg">Here are some of my artcles which I have written on <a href="https://medium.com/@npjsinghe"><u>Medium</u></a>. I publish content related to IT and technology.</p>
                <Image
                    src={MediumIcon}
                    width={250}
                    height={250}
                    alt="about image"
                />
            </div>
        </section>
    );
};

export default BlogSection;
