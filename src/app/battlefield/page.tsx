"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import StoryReflection from "@/components/inquiry/StoryReflection";
import VerseCard from "@/components/inquiry/VerseCard";

import {
  scenarios,
} from "@/content/battlefield/scenarios";

import {
  battlefieldStories,
} from "@/content/stories/battlefield";

import {
  teachings,
} from "@/content/teachings";

import {
  getVerseByTeaching,
} from "@/lib/getVerseByTeaching";

import {
  useProgressionStore,
} from "@/store/progressionStore";

const pageVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
    },
  },
};

export default function BattlefieldPage() {
  const router = useRouter();

  const [selected, setSelected] =
    useState(scenarios[0]);

  const [stage, setStage] =
    useState(0);

  const completeModule =
    useProgressionStore(
      (s) => s.completeModule
    );

  const teaching =
    teachings.find(
      (t) =>
        t.id === selected.teachingId
    );

  const verse =
    getVerseByTeaching(
      selected.teachingId
    );

  const story =
    battlefieldStories[
      selected.teachingId as keyof typeof battlefieldStories
    ];

  const nextStage = () => {
    if (stage < 4) {
      setStage((s) => s + 1);
      return;
    }

    completeModule(
      "battlefield"
    );

    router.push(
      "/graph/desire"
    );
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">

        <AnimatePresence
          mode="wait"
        >
          {stage === 0 && (
            <motion.div
              key="selection"
              variants={
                pageVariants
              }
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="text-5xl mb-8">
                Choose Your Battlefield
              </h1>

              <div className="space-y-4">
                {scenarios.map(
                  (
                    scenario
                  ) => (
                    <motion.button
                      key={
                        scenario.id
                      }
                      whileHover={{
                        scale:
                          1.02,
                      }}
                      whileTap={{
                        scale:
                          0.98,
                      }}
                      onClick={() => {
                        setSelected(
                          scenario
                        );

                        setStage(
                          1
                        );
                      }}
                      className="block border border-zinc-800 p-4 w-full text-left hover:border-zinc-500 transition-colors"
                    >
                      {
                        scenario.title
                      }
                    </motion.button>
                  )
                )}
              </div>
            </motion.div>
          )}

          {stage === 1 &&
            story && (
              <motion.div
                key="story"
                variants={
                  pageVariants
                }
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <StoryReflection
                  title={
                    story.title
                  }
                  story={
                    story.story
                  }
                />
              </motion.div>
            )}

          {stage === 2 &&
            teaching && (
              <motion.div
                key="arjuna"
                variants={
                  pageVariants
                }
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-4xl mb-6">
                  Arjuna
                </h2>

                <p className="text-xl leading-relaxed text-zinc-300">
                  {
                    teaching.arjuna
                  }
                </p>
              </motion.div>
            )}

          {stage === 3 &&
            verse && (
              <motion.div
                key="verse"
                variants={
                  pageVariants
                }
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <VerseCard
                  verse={verse}
                />
              </motion.div>
            )}

          {stage === 4 &&
            teaching && (
              <motion.div
                key="teaching"
                variants={
                  pageVariants
                }
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-4xl mb-6">
                  Teaching
                </h2>

                <p className="mb-8 text-xl leading-relaxed">
                  {
                    teaching.teaching
                  }
                </p>

                <h3 className="text-2xl mb-4">
                  Reflection
                </h3>

                <p className="text-zinc-400">
                  {
                    teaching.reflection
                  }
                </p>
              </motion.div>
            )}
        </AnimatePresence>

        {stage > 0 && (
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
            onClick={nextStage}
            className="mt-12 border border-zinc-700 px-6 py-3"
          >
            {stage === 4
              ? "Explore Desire"
              : "Continue"}
          </motion.button>
        )}
      </div>
    </main>
  );
}