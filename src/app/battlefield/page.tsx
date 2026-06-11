"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import StoryReflection from "@/components/inquiry/StoryReflection";
import VerseCard from "@/components/inquiry/VerseCard";

import {
  scenarios,
} from "@/content/battlefield/scenarios";

import {
  battlefieldStories,
} from "@/content/stories/battlefield";

import {
  teachings,
} from "@/content/teachings";

import {
  getVerseByTeaching,
} from "@/lib/getVerseByTeaching";

import {
  useProgressionStore,
} from "@/store/progressionStore";

export default function BattlefieldPage() {
  const router = useRouter();


  const [selected, setSelected] =
    useState(scenarios[0]);
    console.log("Selected scenario:", selected);

  const [stage, setStage] =
    useState(0);

  const completeModule =
    useProgressionStore(
      (s) => s.completeModule
    );

  const teaching =
    teachings.find(
      (t) =>
        t.id === selected.teachingId
    );

  const verse =
    getVerseByTeaching(
      selected.teachingId
    );

  const story =
    battlefieldStories[
      selected.teachingId as keyof typeof battlefieldStories
    ];

  const nextStage = () => {
    if (stage < 4) {
      setStage(stage + 1);
      return;
    }

    completeModule(
      "battlefield"
    );

    router.push(
      "/graph/desire"
    );
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-4xl mx-auto">

        {stage === 0 && (
          <>
            <h1 className="text-5xl mb-8">
              Choose Your Battlefield
            </h1>

            <div className="space-y-4">

              {scenarios.map(
                (scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => {
                      setSelected(
                        scenario
                      );

                      setStage(1);
                    }}
                    className=" block border p-4 w-full text-left"
                  >
                    {scenario.title}
                  </button>
                )
              )}

            </div>
          </>
        )}

        {stage === 1 && story && (
          <StoryReflection
            title={story.title}
            story={story.story}
          />
        )}

        {stage === 2 && teaching && (
          <div>

            <h2 className="text-4xl mb-6">
              Arjuna
            </h2>

            <p>
              {teaching.arjuna}
            </p>

          </div>
        )}

        {stage === 3 &&
          verse && (
            <VerseCard
              verse={verse}
            />
          )}

        {stage === 4 &&
          teaching && (
            <div>

              <h2 className="text-4xl mb-6">
                Teaching
              </h2>

              <p className="mb-8">
                {teaching.teaching}
              </p>

              <h3 className="text-2xl">
                Reflection
              </h3>

              <p>
                {
                  teaching.reflection
                }
              </p>

            </div>
          )}

        {stage > 0 && (
          <button
            onClick={nextStage}
            className=" mt-12 border px-6 py-3"
          >
            {stage === 4
              ? "Explore Desire"
              : "Continue"}
          </button>
        )}

      </div>

    </main>
  );
}