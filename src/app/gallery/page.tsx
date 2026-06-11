"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  impermanenceSequence,
} from "@/content/gallery/impermanence";

import {
  useProgressionStore,
} from "@/store/progressionStore";

export default function GalleryPage() {
  const router = useRouter();

  const [index, setIndex] =
    useState(0);

  const [finished, setFinished] =
    useState(false);

  const completeModule =
    useProgressionStore(
      (s) => s.completeModule
    );

  useEffect(() => {
    if (finished) return;

    const timer = setTimeout(() => {
      if (
        index <
        impermanenceSequence.length - 1
      ) {
        setIndex(
          (prev) => prev + 1
        );
      } else {
        setFinished(true);
      }
    }, 2500);

    return () =>
      clearTimeout(timer);
  }, [index, finished]);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-8">

      {!finished ? (
        <div className="text-center">
          <motion.h1
  key={impermanenceSequence[index]}
  initial={{
    opacity: 0,
    scale: 0.95,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  exit={{
    opacity: 0,
  }}
  transition={{
    duration: 1.2,
  }}
  className="text-7xl font-light"
>
  {impermanenceSequence[index]}

</motion.h1>
          

          <p className="mt-8 text-zinc-500">
            passes away...
          </p>

        </div>
      ) : (
        <div className="text-center max-w-3xl">

          <h1 className="text-6xl mb-12">
            Everything Changed.
          </h1>

          <p className="text-2xl text-zinc-400 mb-6">
            Body changed.
          </p>

          <p className="text-2xl text-zinc-400 mb-6">
            Possessions changed.
          </p>

          <p className="text-2xl text-zinc-400 mb-6">
            Relationships changed.
          </p>

          <p className="text-2xl text-zinc-400 mb-12">
            Dreams changed.
          </p>

          <h2 className="text-4xl mb-12">
            What remains?
          </h2>

          <button
            className=" border px-6 py-3 hover:border-white"
            onClick={() => {
              completeModule(
                "gallery"
              );

              router.push(
                "/chapters"
              );
            }}
          >
            Explore Teachings
          </button>

        </div>
      )}

    </main>
  );
}