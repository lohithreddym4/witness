"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import DesireInquiry from "@/components/inquiry/DesireInquiry";
import DesireGraph from "@/components/graph/DesireGraph";

import {
  desireTrees,
} from "@/content/concepts/desireTrees";

import {
  useProgressionStore,
} from "@/store/progressionStore";

export default function DesirePage() {
  const router = useRouter();

  const [selected, setSelected] =
    useState<
      keyof typeof desireTrees | null
    >(null);

  const [showGraph, setShowGraph] =
    useState(false);

  const completeModule =
    useProgressionStore(
      (s) => s.completeModule
    );

  if (!selected) {
    return (
      <main className="p-20">

        <h1 className="text-5xl mb-12">
          Choose A Desire
        </h1>

        <div className="space-y-4">

          {Object.keys(
            desireTrees
          ).map((key) => (
            <button
              key={key}
              onClick={() =>
                setSelected(
                  key as keyof typeof desireTrees
                )
              }
              className=" block border p-4 "
            >
              {key}
            </button>
          ))}

        </div>

      </main>
    );
  }

  return (
    <main className="p-20">

      {!showGraph ? (
        <>
          <DesireInquiry
            chain={
              desireTrees[
                selected
              ]
            }
          />

          <button
            onClick={() =>
              setShowGraph(true)
            }
            className=" mt-12 border px-6 py-3"
          >
            Reveal Pattern
          </button>
        </>
      ) : (
        <>
          <DesireGraph />

          <div className="mt-12">

            <h2 className="text-4xl mb-4">
              Reflection
            </h2>

            <p>
              Does every desire
              eventually point toward
              fear?
            </p>

          </div>

          <button
            className=" mt-12 border px-6 py-3"
            onClick={() => {
              completeModule(
                "desire"
              );

              router.push(
                "/simulator"
              );
            }}
          >
            Enter Life Simulator
          </button>
        </>
      )}

    </main>
  );
}