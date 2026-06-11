import { create } from "zustand";

interface JourneyState {
  currentScene: number;

  nextScene: () => void;
  previousScene: () => void;
}

export const useJourneyStore = create<JourneyState>(
  (set) => ({
    currentScene: 0,

    nextScene: () =>
      set((state) => ({
        currentScene: state.currentScene + 1,
      })),

    previousScene: () =>
      set((state) => ({
        currentScene: Math.max(
          state.currentScene - 1,
          0
        ),
      })),
  })
);