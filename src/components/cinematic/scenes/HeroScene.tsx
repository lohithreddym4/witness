"use client";

import { motion } from "framer-motion";
import { Scene } from "@/types/journey";
import { useJourneyStore } from "@/store/journeyStore";

export default function HeroScene({
  scene,
}: {
  scene: Scene;
}) {
  const nextScene = useJourneyStore(
    (state:any) => state.nextScene
  );

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-7xl font-light"
        >
          {scene.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
          className="mt-4 text-zinc-500"
        >
          {scene.subtitle}
        </motion.p>

        <button
          onClick={nextScene}
          className="mt-12 border px-6 py-3"
        >
          {scene.nextLabel}
        </button>

      </div>
    </section>
  );
}