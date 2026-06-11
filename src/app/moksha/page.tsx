"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { mokshaStages } from "@/content/moksha/stages";
import { useProgressionStore } from "@/store/progressionStore";

export default function MokshaPage() {
  const [index, setIndex] = useState(0);

  const [showQuestion, setShowQuestion] =
    useState(false);

  const [showEnding, setShowEnding] =
    useState(false);

  const router = useRouter();

  const completeModule =
    useProgressionStore(
      (s) => s.completeModule
    );

  const stage =
    mokshaStages[index];

  const isFinal =
    index ===
    mokshaStages.length - 1;

  useEffect(() => {
    if (!isFinal) {
      setShowQuestion(false);
      setShowEnding(false);
      return;
    }

    const questionTimer =
      setTimeout(() => {
        setShowQuestion(true);
      }, 5000);

    const endingTimer =
      setTimeout(() => {
        setShowEnding(true);
      }, 13000);

    return () => {
      clearTimeout(
        questionTimer
      );
      clearTimeout(
        endingTimer
      );
    };
  }, [isFinal]);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-8">

      <div className="max-w-4xl text-center">

        {!isFinal && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="mb-12"
          >
            <p className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
              Layer {index + 1} of{" "}
              {
                mokshaStages.length
              }
            </p>
          </motion.div>
        )}

        <AnimatePresence
          mode="wait"
        >
          <motion.div
            key={index}
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
              duration: 1,
            }}
          >
            <motion.h1
              className="text-7xl md:text-8xl font-light mb-8"
            >
              {stage.title}
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 1,
              }}
              className="text-2xl text-zinc-400 max-w-2xl mx-auto"
            >
              {stage.subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {!isFinal ? (
          <motion.button
            whileHover={{
              opacity: 0.8,
            }}
            whileTap={{
              scale: 0.97,
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
            onClick={() =>
              setIndex(
                (prev) =>
                  prev + 1
              )
            }
          >
            Let Go
          </motion.button>
        ) : (
          <div className="mt-24">

            {!showQuestion && (
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="text-zinc-600 text-xl"
              >
                Remain here.
              </motion.p>
            )}

            {showQuestion &&
              !showEnding && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <h2 className="text-5xl md:text-6xl font-light">
                    Before thought...
                  </h2>

                  <p className="mt-6 text-zinc-500 text-xl">
                    who remains?
                  </p>
                </motion.div>
              )}

            {showEnding && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 2,
                }}
                className="space-y-12"
              >
                <h2 className="text-5xl md:text-6xl font-light">
                  The journey was
                  never outside.
                </h2>

                <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed text-lg">
                  Every question,
                  every desire,
                  every struggle,
                  pointed back to
                  the one who was
                  looking.
                </p>

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
                  className="
                    border
                    border-zinc-700
                    px-8
                    py-4
                    rounded-full
                    hover:border-white
                    transition-all
                  "
                  onClick={() => {
                    completeModule(
                      "moksha"
                    );

                    router.push(
                      "/"
                    );
                  }}
                >
                  Begin Again
                </motion.button>
              </motion.div>
            )}

          </div>
        )}

      </div>

    </main>
  );
}