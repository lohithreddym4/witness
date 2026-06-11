"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import DesireInquiry from "@/components/inquiry/DesireInquiry";
import DesireGraph from "@/components/graph/DesireGraph";

import {
  desireTrees,
} from "@/content/concepts/desireTrees";

import {
  useProgressionStore,
} from "@/store/progressionStore";

const pageVariants = {
  hidden: {
    opacity: 0,
    y: 24,
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
    y: -24,
    transition: {
      duration: 0.4,
    },
  },
};

export default function DesirePage() {
  const router = useRouter();

  const [selected, setSelected] =
    useState<
      keyof typeof desireTrees | null
    >(null);

  const [showGraph, setShowGraph] =
    useState(false);

  const completeModule =
    useProgressionStore(
      (s) => s.completeModule
    );

  if (!selected) {
    return (
      <main className="min-h-screen bg-black text-white p-20">

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-5xl mb-12"
        >
          Choose A Desire
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="space-y-4 max-w-2xl"
        >
          {Object.keys(
            desireTrees
          ).map((key) => (
            <motion.button
              key={key}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() =>
                setSelected(
                  key as keyof typeof desireTrees
                )
              }
              className="block w-full border border-zinc-800 p-5 text-left hover:border-zinc-500 transition-colors"
            >
              {key}
            </motion.button>
          ))}
        </motion.div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-20">

      <AnimatePresence
        mode="wait"
      >
        {!showGraph ? (
          <motion.div
            key="inquiry"
            variants={
              pageVariants
            }
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <DesireInquiry
              chain={
                desireTrees[
                  selected
                ]
              }
            />

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() =>
                setShowGraph(true)
              }
              className="mt-12 border border-zinc-700 px-6 py-3"
            >
              Trace The Root
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="graph"
            variants={
              pageVariants
            }
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <DesireGraph />
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
            >
              <h2 className="text-4xl mb-4">
                Reflection
              </h2>

              <p className="text-xl text-zinc-300">
                Does every desire
                eventually point toward
                fear?
              </p>
            </motion.div>

            <motion.button
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.5,
              }}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="mt-12 border border-zinc-700 px-6 py-3"
              onClick={() => {
                completeModule(
                  "desire"
                );

                router.push(
                  "/simulator"
                );
              }}
            >
              Witness The Cycle
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}