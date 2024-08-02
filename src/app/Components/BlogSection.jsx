"use client";
import React from "react";
import Image from "next/image";
import MediumIcon from "../../../public/icons8-medium-240.svg";
import BlogCard from "./BlogCard";

const BlogSection = () => {

    const blogData = [
        {
            id: 1,
            title: "Cracking the OOP Interview: Key Interview Questions and Answers - part I",
            tag: ["OOP", "Object-Oriented Programming", "Java"],
            image: "/images/articles/oopi.png",
            url: "https://medium.com/@npjsinghe/cracking-the-oop-interview-key-interview-questions-and-answers-9276fcd1a1bd",
        },
        {
            id: 2,
            title: "Cracking the OOP Interview: Key Interview Questions and Answers - part II",
            tag: ["OOP", "Object-Oriented Programming", "Java"],
            image: "/images/articles/oopii.png",
            url: "https://medium.com/@npjsinghe/cracking-the-oop-interview-key-interview-questions-and-answers-3cf7d4ff70e6",
        },
        {
            id: 3,
            title: "A Brief Guide to Object-Oriented Concepts: Simplified for Easy Learning",
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
            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center md:space-x-10">
                <div>
                    <p className="text-base text-left md:text-justify lg:text-lg">
                        Here are some of my articles which I have written on <a href="https://medium.com/@npjsinghe"><u>Medium</u></a>. I publish content related to IT and technology.
                    </p>
                    <ul className="pl-5 mt-5 list-disc">
                        {blogData.map((blog) => (
                            <BlogCard key={blog.id} title={blog.title} tag={blog.tag} image={blog.image} url={blog.url} />
                        ))}
                    </ul>
                </div>
                <Image
                    src={MediumIcon}
                    width={300}
                    height={300}
                    alt="Medium Icon"
                    className="hidden mb-4 md:block md:mb-0"
                />
            </div>
        </section>
    );
};

export default BlogSection;
