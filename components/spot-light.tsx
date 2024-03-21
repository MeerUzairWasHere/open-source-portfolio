"use client";
import React from "react";
type Props = {
  pageName: string;
  pageDescription: string;
};
import { motion } from "framer-motion";
export default function SpotlightHero({ pageName, pageDescription }: Props) {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      className="h-[13rem] w-full rounded-md flex md:items-center md:justify-center dark:bg-black/[0.96] bg-white/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}>
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-16 md:pt-0">
        <motion.h1
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 dark:from-neutral-50 to-neutral-400 bg-opacity-50">
          {pageName}
        </motion.h1>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-4 font-normal text-base text-onyx max-w-lg text-center mx-auto">
          {pageDescription}
        </motion.p>
      </div>
    </motion.div>
  );
}
