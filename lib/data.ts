import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Intern and Junior Developer",
        location: "Naucalpan, Estado de México",
        description:
            "I worked as an intern for 1 year for a company called Recurso Confiable." +
            "After that I was hired as a Full-Stack Junior Developer." +
            "I used technologies like PostgreSQL, Python and React.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2021",
    },
    {
        title: "Front-End Developer",
        location: "Polanco, Cd. México",
        description:
            "I worked as a front-end developer for nearly 2 years for a company called Duns and Bradstreet",
        icon: React.createElement(FaReact),
        date: "2021 - 2022",
    },
    {
        title: "Back-End Developer",
        location: "Benito Juárez, Cd. México",
        description:
            "I worked as a back-end developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - 2023",
    },
] as const;

export const projectsData = [
    {
        title: "Recurso Confiable",
        description:
            "I worked as a full-stack developer for this company that provides consultancy services for 2 years." +
            " Truck drivers can update the status of their shipments.",
        tags: ["React", "Pyhton", "PostgreSQL", "Javascript"],
        imageUrl: corpcommentImg,
    },
    {
        title: "Enapsys",
        description:
            "Worked for a client base in Austin, Texas. I was the front-end developer. My team and I redid the wole Front-End of a website." +
            " It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Storybook", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Serena and Lily",
        description:
            "A web app for customizing and purchasing furniture." +
            " I helped in the development of email sending to notify the clients about their purshcases.",
        tags: [
            "React",
            "Javascript",
            "Postgresql",
            "DotNet",
            "MsTest",
            "Netsuite",
            "Mulesoft",
        ],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
    "DotNet",
    "Jest",
] as const;
