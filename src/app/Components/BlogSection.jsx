"use client";
import React, { useRef } from "react";
import Image from "next/image";
import MediumIcon from "../../../public/icons8-medium-240.svg";
import blogImg from "../../../public/images/blogImg.png";
import BlogCard from "./BlogCard";
import { motion, useInView } from "framer-motion";

const BlogSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { Once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    const blogData = [
        {
            id: 1,
            title:
                "Cracking the OOP Interview: Key Interview Questions and Answers - part I",
            tag: ["OOP", "Object-Oriented Programming", "Java"],
            image: "/images/articles/oopi.png",
            url: "https://medium.com/@npjsinghe/cracking-the-oop-interview-key-interview-questions-and-answers-9276fcd1a1bd",
        },
        {
            id: 2,
            title:
                "Cracking the OOP Interview: Key Interview Questions and Answers - part II",
            tag: ["OOP", "Object-Oriented Programming", "Java"],
            image: "/images/articles/oopii.png",
            url: "https://medium.com/@npjsinghe/cracking-the-oop-interview-key-interview-questions-and-answers-3cf7d4ff70e6",
        },
        {
            id: 3,
            title:
                "A Brief Guide to Object-Oriented Concepts: Simplified for Easy Learning",
            tag: ["OOP", "Object-Oriented Programming", "Java"],
            image: "/images/articles/ooc.png",
            url: "https://medium.com/ms-club-of-sliit/a-brief-guide-to-object-oriented-concepts-simplified-for-easy-learning-fb84513b6b75",
        },
        {
            id: 4,
            title: "Queue Data Structure: Here’s what you want to know all about it!",
            tag: ["Data Structures", "Queue"],
            image: "/images/articles/queue.png",
            url: "https://medium.com/@npjsinghe/queue-data-structure-heres-what-you-want-to-know-all-about-it-e44db832ecd5",
        },
        {
            id: 5,
            title: "Stack Data Structure: Here’s what you want to know all about it!",
            tag: ["Data Structures", "Stack"],
            image: "/images/articles/stack.png",
            url: "https://medium.com/@npjsinghe/stack-data-structure-heres-what-you-want-to-know-all-about-it-651e3b727b6a",
        },
    ];

    return (
        <section id="blog">
            <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
                Blog
            </h2>
            {/* Image is displayed below the heading in mobile view */}
            <Image 
                src="/images/blogImg.png" 
                width={500} 
                height={500} 
                alt="Blog Image" 
                className="block mx-auto mb-8 md:hidden" 
            />
            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center md:space-x-10">
                <div>
                    <div className="flex flex-wrap items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16 sm:flex-wrap-reverse">
                        <div className="flex flex-col h-full text-left md:mt-0">
                            <div className="flex flex-col">
                            <p className="text-base lg:text-lg">
                            Explore my collection of articles on <a href="https://medium.com/@npjsinghe"><u>Medium</u></a>, where I share insights
                            and expertise on various technology and programming topics. From
                            detailed tutorials to thought-provoking discussions, my blog aims to
                            provide valuable knowledge and practical tips for developers and
                            tech enthusiasts alike. Follow my journey as I delve into the latest
                            trends and innovations in the tech world.
                            </p>
                            <ul ref={ref} className="pl-5 mt-5">
                                {blogData.map((blog, index) => (
                                    <motion.li
                                        key={blog.id}
                                        variants={cardVariants}
                                        initial="initial"
                                        animate={isInView ? "animate" : "initial"}
                                        transition={{ duration: 0.3, delay: index * 0.4 }}
                                    >
                                        <BlogCard
                                            title={blog.title}
                                            tag={blog.tag}
                                            image={blog.image}
                                            url={blog.url}
                                        />
                                    </motion.li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        {/* Image is hidden in mobile view and displayed only on larger screens */}
                        <Image 
                            src="/images/blogImg.png" 
                            width={500} 
                            height={500} 
                            alt="Blog Image" 
                            className="hidden md:block" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
