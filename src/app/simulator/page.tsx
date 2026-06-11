"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  LifeState,
  nextYear,
  initialLifeState,
} from "@/engine/lifeSimulator";

import {
  evaluateLife,
} from "@/engine/rebirthEngine";

import {
  lifeEvents,
} from "@/content/simulator/lifeEvents";

import DeathScreen from "@/components/simulator/DeathScreen";

import {
  useProgressionStore,
} from "@/store/progressionStore";

export default function Simulator() {
  const router = useRouter();

  const [state, setState] =
    useState<LifeState>(
      initialLifeState
    );

  const completeModule =
    useProgressionStore(
      (s) => s.completeModule
    );

  const isDead =
    state.age >= 85 ||
    state.health <= 0;

  const rebirthResult =
    evaluateLife(
      state.desires
    );

  const currentEvent =
    lifeEvents.find(
      (event) =>
        event.age === state.age
    );

  if (isDead) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white p-8">

        <div>

          <DeathScreen
            desires={
              rebirthResult.remainingDesires
            }
          />

          <div className="text-center mt-12">

            <h2 className="text-3xl mb-6">
              {rebirthResult.rebirth
                ? "Rebirth Required"
                : "Liberation"}
            </h2>

            <button
              className="
                border
                px-6
                py-3
              "
              onClick={() => {
                completeModule(
                  "simulator"
                );

                router.push(
                  "/gallery"
                );
              }}
            >
              Continue
            </button>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-12">

      <h1 className="text-6xl mb-10">
        Age {state.age}
      </h1>

      <div className="space-y-3">

        <p>
          Money: {state.money}
        </p>

        <p>
          Status: {state.status}
        </p>

        <p>
          Relationships:
          {" "}
          {state.relationships}
        </p>

        <p>
          Health: {state.health}
        </p>

      </div>

      {state.desires.length > 0 && (
        <div className="mt-10">

          <h2 className="text-2xl mb-4">
            Desires
          </h2>

          <div className="flex gap-3 flex-wrap">

            {state.desires.map(
              (desire) => (
                <span
                  key={desire}
                  className="
                    border
                    px-3
                    py-1
                  "
                >
                  {desire}
                </span>
              )
            )}

          </div>

        </div>
      )}

      {currentEvent && (
        <div
          className="
            border
            border-zinc-700
            p-6
            mt-12
          "
        >
          <h2 className="text-3xl">
            {currentEvent.title}
          </h2>
        </div>
      )}

      <button
        className="
          mt-12
          border
          px-6
          py-3
        "
        onClick={() =>
          setState(
            nextYear(state)
          )
        }
      >
        Live One Year
      </button>

    </main>
  );
}