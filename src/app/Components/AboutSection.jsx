"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="pl-2 list-disc">
                <li><b>Backend Web Development</b></li>
                <li>Frontend Web Development</li>
                <li>C, C++, Python Programming</li>
                <li>Mobile App Development</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className="pl-2 list-disc">
                <li>The Web Developer Bootcamp 2023</li>
                <li>AI/ML Engineer - Stage 1 Industry Engagement Unit (SLIIT)</li>
            </ul>
        )
    },
    {
        title: "Volunteering",
        id: "volunteering",
        content: (
            <ul className="pl-2 list-disc">
                <li>MS Club of SLIIT - Open-Source Software Development/ Writer</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/about nipun.png"
                    width={500}
                    height={500}
                    alt="about image"
                />
                <div className="flex flex-col h-full mt-4 text-left md:mt-0">
                    <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
                    <p className="text-base md:text-justify lg:text-lg">
                        I am an undergraduate student at the Sri Lanka Institute of
                        Information Technology (SLIIT), specializing in software
                        development. With a solid foundation in Java and JavaScript, I have
                        successfully completed several projects that showcase my proficiency
                        in these languages. My technical skills extend to frameworks and
                        libraries such as Express, Node.js, and Next.js, where I have
                        applied my knowledge to build robust and efficient web applications.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange('certification')} active={tab === "certification"}>Certification</TabButton>
                        <TabButton selectTab={() => handleTabChange('volunteering')} active={tab === "volunteering"}>Volunteering</TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
