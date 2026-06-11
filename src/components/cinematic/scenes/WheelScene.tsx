"use client";

import { useState } from "react";

import { samsaraNodes } from "@/content/concepts/samsara";

export default function WheelScene({scene}: any) {
  const [selected, setSelected] =
    useState(samsaraNodes[0]);

  return (
    <section className="min-h-screen flex">

      <div className="w-1/2 flex items-center justify-center">

        <div className="space-y-6">
          {samsaraNodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setSelected(node)}
              className="block"
            >
              {node.title}
            </button>
          ))}
        </div>

      </div>

      <div className="w-1/2 flex items-center">

        <div>
          <h2 className="text-5xl">
            {selected.title}
          </h2>

          <p className="mt-4 text-zinc-400">
            {selected.description}
          </p>
        </div>

      </div>

    </section>
  );
}