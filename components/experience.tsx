"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.4);
    return (
        <section id="experience" ref={ref} className="mb-28">
            <SectionHeading>My Experience.</SectionHeading>

            <VerticalTimeline lineColor="" animate={true}>
                {experiencesData.map((experience, index) => {
                    const { ref: elementRef, inView } = useInView({
                        triggerOnce: true,
                        threshold: 0.4,
                    });
                    return (
                        <div
                            key={index}
                            ref={elementRef}
                            className="vertical-timeline-element"
                        >
                            <VerticalTimelineElement
                                visible={inView}
                                contentStyle={{
                                    background: "#f3f4f6",
                                    boxShadow: "none",
                                    border: "1px solid rgba(0,0,0,0.05)",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem",
                                }}
                                contentArrowStyle={{
                                    borderRight: "0.45rem solid #9ca3af",
                                }}
                                date={experience.date}
                                icon={experience.icon}
                                iconStyle={{
                                    background: "white",
                                    fontSize: "1.5rem",
                                }}
                            >
                                <h3 className="font-semibold capitalize">
                                    {experience.title}
                                </h3>
                                <p className="font-normal !mt-0">
                                    {experience.location}
                                </p>
                                <p className="font-normal !mt-0 text-gray-700">
                                    {experience.description}
                                </p>
                            </VerticalTimelineElement>
                        </div>
                    );
                })}
            </VerticalTimeline>
        </section>
    );
}
