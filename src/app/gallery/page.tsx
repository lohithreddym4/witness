"use client";

import { useState } from "react";

export default function Gallery() {
  const [fade, setFade] =
    useState(false);

  const items = [
    "Body",
    "Money",
    "Status",
    "Relationships",
    "Dreams",
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">

      <button
        onClick={() =>
          setFade(true)
        }
        className="mb-20 border px-6 py-3"
      >
        Fast Forward 100 Years
      </button>

      <div className="space-y-8">

        {items.map((item) => (
          <div
            key={item}
            className={`text-4xl transition-all duration-[3000ms]
            ${
              fade
                ? "opacity-0"
                : "opacity-100"
            }`}
          >
            {item}
          </div>
        ))}

      </div>

    </main>
  );
}