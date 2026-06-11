"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import StoryReflection from "@/components/inquiry/StoryReflection";
import VerseCard from "@/components/inquiry/VerseCard";

import { witnessStories } from "@/content/stories/witness";
import { coreVerses } from "@/content/verses/core";

import { useProgressionStore } from "@/store/progressionStore";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1.8,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function WitnessPage() {
  const router = useRouter();

  const [stage, setStage] =
    useState(0);

  const [storyFinished, setStoryFinished] =
    useState(false);

  const completeModule =
    useProgressionStore(
      (s) => s.completeModule
    );

  const nextStage = () => {
    if (stage < 4) {
      setStage((prev) => prev + 1);

      if (stage === 1) {
        setStoryFinished(false);
      }

      return;
    }

    completeModule(
      "witness"
    );

    router.push(
      "/battlefield"
    );
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-8">

      <div className="max-w-5xl text-center">

        <div className="mb-16">
          <p className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
            Witness
          </p>
        </div>

        <AnimatePresence
          mode="wait"
        >
          <motion.div
            key={stage}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            {stage === 0 && (
              <div className="space-y-10">

                <h1 className="text-7xl md:text-8xl font-light">
                  Close your eyes.
                </h1>

                <p className="text-2xl text-zinc-500">
                  Just for a moment.
                </p>

              </div>
            )}

            {stage === 1 && (
              <div className="space-y-10">

                <h1 className="text-7xl md:text-8xl font-light">
                  Notice your thoughts.
                </h1>

                <p className="text-2xl text-zinc-500">
                  They appear and disappear.
                </p>

              </div>
            )}

            {stage === 2 && (
              <div className="space-y-16">

                <StoryReflection
                  title={
                    witnessStories[0].title
                  }
                  story=""
                />

                <motion.div
                  className="space-y-10"
                  variants={
                    containerVariants
                  }
                  initial="hidden"
                  animate="show"
                >

                  <motion.p
                    variants={
                      itemVariants
                    }
                    className="text-4xl font-light"
                  >
                    The body changed.
                  </motion.p>

                  <motion.p
                    variants={
                      itemVariants
                    }
                    className="text-4xl font-light"
                  >
                    The thoughts changed.
                  </motion.p>

                  <motion.p
                    variants={
                      itemVariants
                    }
                    className="text-4xl font-light"
                  >
                    The desires changed.
                  </motion.p>

                  <motion.p
                    variants={
                      itemVariants
                    }
                    className="text-4xl font-light"
                    onAnimationComplete={() =>
                      setStoryFinished(
                        true
                      )
                    }
                  >
                    Yet you still say:
                    <br />
                    <span className="text-white">
                      "That was me."
                    </span>
                  </motion.p>

                </motion.div>

              </div>
            )}

            {stage === 3 && (
              <VerseCard
                verse={
                  coreVerses[0]
                }
              />
            )}

            {stage === 4 && (
              <div className="space-y-10">

                <h2 className="text-6xl font-light">
                  Reflection
                </h2>

                <p className="text-3xl text-zinc-300 leading-relaxed">
                  What remained
                  through all
                  those changes?
                </p>

                <p className="text-zinc-500 text-xl">
                  Don't answer.
                  Just observe.
                </p>

              </div>
            )}

          </motion.div>
        </AnimatePresence>

        {(stage !== 2 ||
          storyFinished) && (
          <motion.button
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-20
              border
              border-zinc-700
              px-8
              py-4
              rounded-full
              hover:border-white
              transition-all
            "
            onClick={nextStage}
          >
            {stage === 4
              ? "Enter Battlefield"
              : "Continue"}
          </motion.button>
        )}

      </div>

    </main>
  );
}