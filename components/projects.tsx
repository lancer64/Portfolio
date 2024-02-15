"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

// type ProjectProps = {
//     title: string;
//     description: string;
//     tags: string[];
//     imageUrl: StaticImageData;
// };

export default function Projects() {
    return (
        <section>
            <SectionHeading>Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
