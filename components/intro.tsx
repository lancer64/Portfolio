"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-2">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.4 }}
                    >
                        <Image
                            src={
                                //"https://www.tubetubetube.com/dmm/eriko-miura/h_086nuka00035/eriko-miura-6.jpg"
                                "https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/214819946_2011208489036418_4024902934326619707_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHd4yXJvuYZCg5gVBGO7VhGAv3dICyAIboC_d0gLIAhujFE8ka6_PorKb6KE6Q3j4v1BsKqPuh5wNOAOqXTWQpX&_nc_ohc=Tq8TLRHREbUAX_IXJrb&_nc_ht=scontent.fmex36-1.fna&oh=00_AfD5vtSAVsTu-z5vlmZnnLGMrQnqBqkMXzQqe19tQ4ljqA&oe=65C157F3"
                            }
                            alt="Daniel Alillo"
                            width={120}
                            height={150}
                            quality={95}
                            priority={true}
                            className="h-24 w-24 rounded-full border-[0.35rem] border-white
                        object-cover shadow-xl"
                        />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.2,
                            duration: 0.6,
                        }}
                        className="text-4xl absolute bottom-0 right-1"
                    >
                        👍
                    </motion.span>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]
                sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Hello, I'm <span className="font-bold">Daniel Alillo.</span> I'm
                a <span className="font-bold">Software Developer</span> with{" "}
                <span className="font-bold">4 years</span> of experience. I
                building <span className="italic"> sites and apps</span>. My
                focus is <span className="underline">React (Next.js)</span>.
            </motion.h1>
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2
                px-4 font-medium text-lg"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link
                    href={"#contact"}
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center 
                    gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                    hover:bg-gray-950 active:scale-100 transition"
                >
                    Contact me here
                    <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
                </Link>

                <a
                    href="/CV_Daniel.pdf"
                    download={true}
                    className="group bg-white rounded-full px-7 py-3 flex items-center outline-none focus:scale-110 hover:scale-110
                     active:scale-100 transition border border-black/10"
                >
                    Download CV{" "}
                    <HiDownload
                        className="opacity-60 group-hover:translate-y-1
                        transition cursor-pointer"
                    />
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jos%C3%A9-daniel-alillo-mart%C3%ADnez-45168b16b/"
                    className="bg-white px-4 py-3 flex items-center gap-2
                    rounded-full text-gray-700 border border-black/10 hover:text-gray-950
                    focus:scale-[1.15] hover:scale-[1.15] active:scale-90 transition"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/lancer64"
                    target="_blank"
                    className="bg-white px-4 py-3 flex items-center gap-2
                    rounded-full text-gray-700 border border-black/10 hover:text-gray-950
                    focus:scale-[1.15] hover:scale-[1.15] active:scale-90 transition"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
