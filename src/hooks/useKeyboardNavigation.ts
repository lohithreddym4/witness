"use client";

import { useEffect } from "react";
import { useJourneyStore } from "@/store/journeyStore";

export function useKeyboardNavigation() {
  const nextScene = useJourneyStore(
    (state) => state.nextScene
  );

  const previousScene = useJourneyStore(
    (state) => state.previousScene
  );

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      switch (event.key) {
        case "ArrowRight":
        case "Enter":
        case " ":
          nextScene();
          break;

        case "ArrowLeft":
          previousScene();
          break;
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [nextScene, previousScene]);
}