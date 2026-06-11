"use client";

import { useState } from "react";

import {
  scenarios,
} from "@/content/battlefield/scenarios";

export default function Battlefield() {
  const [selected, setSelected] =
    useState(scenarios[0]);

  return (
    <main className="min-h-screen grid grid-cols-2 bg-black text-white">

      <div className="p-12">

        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() =>
              setSelected(scenario)
            }
            className="block mb-4"
          >
            {scenario.title}
          </button>
        ))}

      </div>

      <div className="p-12">

        <h1 className="text-5xl">
          {selected.title}
        </h1>

        <div className="mt-12">

          <h2 className="text-xl">
            Arjuna
          </h2>

          <p>{selected.arjuna}</p>

        </div>

        <div className="mt-8">

          <h2 className="text-xl">
            Teaching
          </h2>

          <p>{selected.teaching}</p>

        </div>

        <div className="mt-8">

          <h2 className="text-xl">
            Reflection
          </h2>

          <p>{selected.reflection}</p>

        </div>

      </div>

    </main>
  );
}