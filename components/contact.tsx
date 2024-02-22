"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <section id="contact" ref={ref} className="mb-28">
            <SectionHeading>Contact Me.</SectionHeading>
        </section>
    );
}
