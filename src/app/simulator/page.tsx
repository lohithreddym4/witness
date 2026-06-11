"use client";

import { useState } from "react";

import {
  nextYear,
  LifeState,
} from "@/engine/lifeSimulator";

export default function Simulator() {
  const [state, setState] =
    useState<LifeState>({
      age: 0,
      money: 0,
      status: 0,
      relationships: 0,
      health: 100,
    });

  return (
    <main className="p-20">

      <h1 className="text-5xl">
        Age {state.age}
      </h1>

      <div className="mt-10">
        Money: {state.money}
      </div>

      <div>
        Status: {state.status}
      </div>

      <div>
        Relationships:
        {state.relationships}
      </div>

      <div>
        Health: {state.health}
      </div>

      <button
        className="mt-10 border px-4 py-2"
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