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
<main className="min-h-screen bg-black text-white">

<div className="max-w-4xl mx-auto px-8 py-16">

  <div className="text-center mb-16">

    <p className="text-zinc-500 uppercase tracking-[0.4em]">
      A Human Life
    </p>

    <h1 className="text-8xl font-light mt-4">
      {state.age}
    </h1>

    <p className="text-zinc-500">
      years old
    </p>

  </div>

  <div className="grid md:grid-cols-2 gap-4">

    <div className="border border-zinc-800 rounded-xl p-6">
      <p className="text-zinc-500">
        Money
      </p>

      <p className="text-3xl mt-2">
        {state.money}
      </p>
    </div>

    <div className="border border-zinc-800 rounded-xl p-6">
      <p className="text-zinc-500">
        Status
      </p>

      <p className="text-3xl mt-2">
        {state.status}
      </p>
    </div>

    <div className="border border-zinc-800 rounded-xl p-6 md:col-span-2">
      <p className="text-zinc-500">
        Relationships
      </p>

      <p className="text-3xl mt-2">
        {state.relationships}
      </p>
    </div>

  </div>

  <div className="mt-10">

    <div className="flex justify-between mb-2">
      <span>
        Health
      </span>

      <span>
        {state.health}%
      </span>
    </div>

    <div className="h-3 bg-zinc-900 rounded-full overflow-hidden">

      <div
        className="h-full bg-white transition-all duration-700"
        style={{
          width: `${state.health}%`,
        }}
      />

    </div>

  </div>

  {currentEvent && (
    <div className="mt-16 border border-zinc-800 rounded-xl p-8">

      <p className="text-zinc-500 mb-2">
        Current Event
      </p>

      <h2 className="text-4xl">
        {currentEvent.title}
      </h2>

    </div>
  )}

  {state.desires.length > 0 && (
    <div className="mt-16">

      <h2 className="text-2xl mb-4">
        Attachments
      </h2>

      <div className="flex flex-wrap gap-3">

        {state.desires.map(
          (desire) => (
            <span
              key={desire}
              className=" px-4 py-2 rounded-full border border-zinc-700"
            >
              {desire}
            </span>
          )
        )}

      </div>

    </div>
  )}

  <div className="text-center mt-20">

    <button
      className=" border border-zinc-700 px-8 py-4 rounded-xl hover:border-white transition-all"
      onClick={() =>
        setState(
          nextYear(state)
        )
      }
    >
      Live One Year →
    </button>

  </div>

</div>

</main>
  );
}