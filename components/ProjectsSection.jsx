import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const personalProjects = [
  {
    name: "Trello Board Clone",
    description:
      "A Trello inspired web app for efficient project management and task organization.",
    image: "/trello-clone.png",
    github: "https://github.com/PratikValvi/trello-clone",
    link: "https://trello-todo-board-clone.vercel.app/",
  },
  {
    name: "CodeGPT",
    description:
      "A ChatGPT inspried web app that allows users to chat with AI model using Google's API.",
    image: "/codegpt.png",
    github: "https://github.com/PratikValvi/codegpt",
    link: "https://codegpt-chat.vercel.app/",
  },
];

const careerProjects = [
  {
    name: "SASS Cloud Management Platform",
    description:
      "A cloud management platform that helps businesses save money and improve efficiency.",
    image: "/cloud.jpg",
    github: "#",
    link: "#",
  },
  {
    name: "E-BOOK Writing Web Application",
    description:
      "This product helps authors to write e-books with interactive content like Image, Audio and Video.",
    image: "/ebook.jpg",
    github: "#",
    link: "#",
  },
];

const ProjectsSection = () => {
  const projects = [...personalProjects, ...careerProjects];
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div
                      className={`${
                        project.github === "#" || project.link === "#"
                          ? "hidden"
                          : ""
                      } flex flex-row align-bottom space-x-4`}
                    >
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
