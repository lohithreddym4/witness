"use client";

import { motion } from "framer-motion";

import {
  wheelItems,
} from "@/content/concepts/samsaraWheel";

export default function SamsaraWheel() {
  return (
    <div className="flex items-center justify-center h-screen">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-[500px] h-[500px] border rounded-full"
      >
        {wheelItems.map(
          (item, index) => {
            const angle =
              (index /
                wheelItems.length) *
              Math.PI *
              2;

            const x =
              Math.cos(angle) *
                180 +
              220;

            const y =
              Math.sin(angle) *
                180 +
              220;

            return (
              <div
                key={item}
                className="absolute"
                style={{
                  left: x,
                  top: y,
                }}
              >
                {item}
              </div>
            );
          }
        )}
      </motion.div>

    </div>
  );
}