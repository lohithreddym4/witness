"use client";

import Link from "next/link";

import {
  JOURNEY_PATH,
} from "@/config/journey";

import {
  useProgressionStore,
} from "@/store/progressionStore";

export default function JourneyPage() {
  const completed =
    useProgressionStore(
      (s) => s.completed
    );

  const isUnlocked =
    useProgressionStore(
      (s) => s.isUnlocked
    );

  return (
    <main className="p-20">

      <h1 className="text-6xl mb-12">
        Journey Map
      </h1>

      <div className="space-y-6">

        {JOURNEY_PATH.map(
          (module) => {
            const unlocked =
              isUnlocked(module);

            return (
              <div
                key={module}
                className="
                  border
                  p-6
                "
              >
                <div>
                  {completed.includes(
                    module
                  )
                    ? "✓"
                    : "○"}
                </div>

                {unlocked ? (
                  <Link
                    href={`/${module}`}
                  >
                    {module}
                  </Link>
                ) : (
                  <span
                    className="
                      text-zinc-500
                    "
                  >
                    Locked
                  </span>
                )}
              </div>
            );
          }
        )}

      </div>

    </main>
  );
}