"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  story: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1.8,
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function StoryReflection({
  title,
  story,
}: Props) {
  const lines = story
    .split("\n")
    .filter(
      (line) => line.trim() !== ""
    );

  return (
    <div className="max-w-3xl">

      <motion.h2
        className="text-4xl mb-8"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {lines.map(
          (line, index) => (
            <motion.p
              key={index}
              variants={lineVariants}
              className="text-2xl leading-relaxed text-zinc-300"
            >
              {line}
            </motion.p>
          )
        )}
      </motion.div>

    </div>
  );
}