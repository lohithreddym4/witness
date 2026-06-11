"use client";

import { useState } from "react";

const prompts = [
  "Close your eyes.",
  "Notice your breath.",
  "Notice your thoughts.",
  "Notice your emotions.",
  "Who notices them?",
];

export default function WitnessMode() {
  const [index, setIndex] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="text-center">

        <h1 className="text-5xl">
          {prompts[index]}
        </h1>

        <button
          onClick={() =>
            setIndex((v) =>
              Math.min(
                prompts.length - 1,
                v + 1
              )
            )
          }
          className="mt-12 border px-6 py-3"
        >
          Continue
        </button>

      </div>

    </main>
  );
}