"use client";

import { motion } from "framer-motion";

const nodes = [
  "I Want More Money",
  "Security",
  "Fear of Losing",
  "Attachment",
];

export default function DesireGraph() {
  return (
    <div className="max-w-2xl mx-auto py-16">

      <h2 className="text-5xl text-center mb-16">
        Trace The Root
      </h2>

      <div className="flex flex-col items-center">

        {nodes.map(
          (node, index) => (
            <div
              key={node}
              className="flex flex-col items-center"
            >
              <motion.div
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
                  delay: index * 0.4,
                }}
                className="
                  border
                  border-zinc-800
                  rounded-xl
                  px-8
                  py-5
                  min-w-[280px]
                  text-center
                  text-xl
                  bg-zinc-950
                "
              >
                {node}
              </motion.div>

              {index <
                nodes.length - 1 && (
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
                    delay:
                      index * 0.4 +
                      0.3,
                  }}
                  className="
                    h-16
                    w-px
                    bg-zinc-700
                    origin-top
                  "
                />
              )}
            </div>
          )
        )}

      </div>

    </div>
  );
}