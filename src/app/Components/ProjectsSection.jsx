"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
// import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "The Official Website of Mini Hackathon - 2024",
    description: "Open-Source Project by MS Club of SLIIT (Ongoing project). Contributed to implement the Rules Section.",
    image: "/images/projects/minihackathon.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "The Official Website of Computer Science and Networking Engineering Student Community of SLIIT 2024",
    description: "Open-Source Project by MS Club of SLIIT (Ongoing project). Contributed to fix issues in frontend.",
    image: "/images/projects/csne2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Web Application for Genius Restaurant (Restaurant Management System) – 2024",
    description: "Developed a web application using MERN stack for Genius Restaurant to manage their restaurant tasks easily.",
    image: "/images/projects/itp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Event Management System",
    description: "Developed a web application using Java as backend for Object Oriented Programming module Year 2 Semester 1.",
    image: "/images/projects/oop.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "'Kōdō' task manager mobile app",
    description: "Developed a simple android game using Kotlin created for Mobile Application Development module Year 2 Semester 2",
    image: "/images/projects/todo.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Tuk Tuk",
    description: "Developed a simple android game using Kotlin for Mobile Application Development module Year 2 Semester 2",
    image: "/images/projects/tuktuk.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

//   const cardVariants = {
//     initial: { y: 50, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//   };

  return (
    <section id="projects" className="mb-20">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
        //   <motion.li
        //     key={index}
        //     variants={cardVariants}
        //     initial="initial"
        //     animate={isInView ? "animate" : "initial"}
        //     transition={{ duration: 0.3, delay: index * 0.4 }}
        //   >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        //   </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
