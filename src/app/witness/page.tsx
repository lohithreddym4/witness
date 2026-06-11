"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import StoryReflection from "@/components/inquiry/StoryReflection";
import VerseCard from "@/components/inquiry/VerseCard";
import TimedReveal from "@/components/cinematic/TimedReveal";

import { witnessStories } from "@/content/stories/witness";
import { coreVerses } from "@/content/verses/core";

import { useProgressionStore } from "@/store/progressionStore";

export default function WitnessPage() {
  const router = useRouter();

  const [stage, setStage] = useState(0);

  const completeModule =
    useProgressionStore(
      (s) => s.completeModule
    );

  const nextStage = () => {
    if (stage < 4) {
      setStage((prev) => prev + 1);
      return;
    }

    completeModule("witness");

    router.push("/battlefield");
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="max-w-4xl text-center">

        {/* Stage 0 */}
        {stage === 0 && (
          <div className="space-y-8">

            <h1 className="text-6xl font-light">
              Close your eyes.
            </h1>

            <p className="text-zinc-500">
              Just for a moment.
            </p>

          </div>
        )}

        {/* Stage 1 */}
        {stage === 1 && (
          <div className="space-y-8">

            <h1 className="text-6xl font-light">
              Notice your thoughts.
            </h1>

            <p className="text-zinc-500">
              They appear and disappear.
            </p>

          </div>
        )}

        {/* Stage 2 */}
        {stage === 2 && (
          <div className="space-y-10">

            <StoryReflection
              title={
                witnessStories[0].title
              }
              story=""
            />

            <div className="space-y-6 mt-12">

              <TimedReveal
                delay={1000}
                text="The body changed."
              />

              <TimedReveal
                delay={3000}
                text="The thoughts changed."
              />

              <TimedReveal
                delay={5000}
                text="The desires changed."
              />

              <TimedReveal
                delay={7000}
                text='Yet you still say: "That was me."'
              />

            </div>

          </div>
        )}

        {/* Stage 3 */}
        {stage === 3 && (
          <div>

            <VerseCard
              verse={coreVerses[0]}
            />

          </div>
        )}

        {/* Stage 4 */}
        {stage === 4 && (
          <div className="space-y-8">

            <h2 className="text-5xl font-light">
              Reflection
            </h2>

            <p className="text-2xl text-zinc-300">
              What remained through
              all those changes?
            </p>

            <p className="text-zinc-500">
              Don't answer immediately.
            </p>

          </div>
        )}

        <button
          onClick={nextStage}
          className=" mt-16 border border-zinc-700 px-6 py-3 hover:border-white transition-all"
        >
          {stage === 4
            ? "Enter Battlefield"
            : "Continue"}
        </button>

      </div>

    </main>
  );
}