"use client";

import { Scene } from "@/types/journey";
import { useJourneyStore } from "@/store/journeyStore";

export default function QuestionScene({
  scene,
}: {
  scene: Scene;
}) {
  const nextScene = useJourneyStore(
    (state:any) => state.nextScene
  );

  return (
    <section className="min-h-screen flex items-center justify-center">

      <div className="max-w-3xl text-center">

        <h2 className="text-5xl font-light">
          {scene.question}
        </h2>

        <button
          onClick={nextScene}
          className="mt-12 border px-6 py-3"
        >
          {scene.nextLabel}
        </button>

      </div>

    </section>
  );
}