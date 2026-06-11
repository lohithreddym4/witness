"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const concepts = [
  {
    id: "body",
    label: "Body",
  },
  {
    id: "mind",
    label: "Mind",
  },
  {
    id: "witness",
    label: "Witness",
  },
  {
    id: "action",
    label: "Action",
  },
  {
    id: "detachment",
    label: "Detachment",
  },
  {
    id: "moksha",
    label: "Moksha",
  },
];

export default function ConceptGraph() {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto py-20">

      <h2 className="text-5xl text-center mb-20">
        The Path
      </h2>

      <div className="flex flex-col items-center">

        {concepts.map(
          (concept, index) => (
            <div
              key={concept.id}
              className="flex flex-col items-center"
            >
              <motion.button
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                onClick={() =>
                  router.push(
                    `/concepts/${concept.id}`
                  )
                }
                className=" min-w-[280px] rounded-xl border border-zinc-800 bg-zinc-950 px-8 py-5 text-xl hover:border-white transition-all"
              >
                {concept.label}
              </motion.button>

              {index <
                concepts.length - 1 && (
                <motion.div
                  initial={{
                    scaleY: 0,
                  }}
                  whileInView={{
                    scaleY: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className=" h-16 w-px bg-zinc-700 origin-top"
                />
              )}
            </div>
          )
        )}

      </div>

    </div>
  );
}