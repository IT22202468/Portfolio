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
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="pl-2 list-disc">
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
    {
        title: "Volunteering",
        id: "volunteering",
        content: (
            <ul className="pl-2 list-disc">
                <li>Volunteer at Local Community Center</li>
                <li>Mentor at Coding Bootcamp</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about nipun.png" width={500} height={500} alt="About image"/>
                <div className="flex flex-col h-full mt-4 text-left md:mt-0">
                    <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am an undergraduate student at the Sri Lanka Institute of
                        Information Technology (SLIIT), specializing in software
                        development. With a solid foundation in Java and JavaScript, I have
                        successfully completed several projects that showcase my proficiency
                        in these languages. My technical skills extend to frameworks and
                        libraries such as Express, Node.js, and Next.js, where I have
                        applied my knowledge to build robust and efficient web applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("volunteering")}
                            active={tab === "volunteering"}
                        >
                            {" "}
                            Volunteering{" "}
                        </TabButton>
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
