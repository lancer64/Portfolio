"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-200 my-20 h-[6rem] w-1 rounded-full hidden sm:block"
            transition={{ type: "tween", duration: 0.3, delay: 0.11 }}
        ></motion.div>
    );
}
