"use client";

import { motion } from "framer-motion";
import { Scene } from "@/types/journey";
import { useJourneyStore } from "@/store/journeyStore";

export default function TimelineScene({
  scene,
}: {
  scene: Scene;
}) {
  const nextScene = useJourneyStore(
    (s:any) => s.nextScene
  );

  return (
    <section className="min-h-screen py-24">

      <div className="max-w-4xl mx-auto">

        {scene.timeline?.map((item, index) => (
          <motion.div
            key={item.age}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            className="mb-40"
          >
            <h2 className="text-7xl font-thin">
              {item.age}
            </h2>

            <p className="text-xl text-zinc-400 mt-4">
              {item.statement}
            </p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-5xl">
            Every destination became
            another beginning.
          </h2>

          <button
            onClick={nextScene}
            className="mt-16 border px-6 py-3"
          >
            Continue
          </button>
        </motion.div>

      </div>

    </section>
  );
}