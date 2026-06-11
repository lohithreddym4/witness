"use client";

import { useEffect, useState } from "react";

import { mokshaStages } from "@/content/moksha/stages";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { useProgressionStore } from "@/store/progressionStore";

export default function MokshaPage() {
  const [index, setIndex] = useState(0);

  const completeModule = useProgressionStore((s) => s.completeModule);

  const stage = mokshaStages[index];

  const isFinal = index === mokshaStages.length - 1;
  const router = useRouter();
  const [showQuestion, setShowQuestion] = useState(false);

  const [showEnding, setShowEnding] = useState(false);

  useEffect(() => {
    if (!isFinal) return;

    const questionTimer = setTimeout(() => {
      setShowQuestion(true);
    }, 5000);

    const endingTimer = setTimeout(() => {
      setShowEnding(true);
    }, 13000);

    return () => {
      clearTimeout(questionTimer);
      clearTimeout(endingTimer);
    };
  }, [isFinal]);
  return (
    <main className=" min-h-screen bg-black text-white flex items-center justify-center px-8">
      <div className="text-center max-w-3xl">
        <motion.h1
          key={stage.title}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-7xl mb-8">
          {stage.title}
        </motion.h1>
        <p className="text-2xl text-zinc-400">{stage.subtitle}</p>

        {!isFinal ? (
          <button
            className=" mt-16 border px-6 py-3"
            onClick={() => setIndex(index + 1)}>
            Let Go
          </button>
        ) : (
          <div className="mt-20">
            {!showQuestion && <p className="text-zinc-500">Remain here.</p>}

            {showQuestion && !showEnding && (
              <h2 className="text-5xl">Who is observing?</h2>
            )}

            {showEnding && (
              <div className="space-y-10">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 2,
                  }}>
                  <h2 className="text-5xl">The journey was never outside.</h2>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 2,
                  }}>
                  <p className="text-zinc-500">
                    It always pointed back to the one who was looking.
                  </p>
                </motion.div>
                <button
                  className=" border px-6 py-3"
                  onClick={() => {
                    completeModule("moksha");

                    router.push("/");
                  }}>
                  Return Home
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
