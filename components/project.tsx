"use client";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

// type ProjectProps = {
//     title: string;
//     description: string;
//     tags: string[];
//     imageUrl: StaticImageData;
// };

export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section
                className="bg-gray-100 max-w-[42rem] border border-black/5 relative overflow-hidden
                sm:pr-8 sm:h-[22rem] hover:bg-gray-200 transition group-even:pl-6 rounded-lg"
            >
                <div
                    className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex
                    h-full flex-col group-even:ml-[22rem]"
                >
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase
                            tracking-wider text-white rounded-full"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                    group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3
                    group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-120
                    group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2"
                    src={imageUrl}
                    alt={title}
                    quality={90}
                />
            </section>
        </motion.div>
    );
}
