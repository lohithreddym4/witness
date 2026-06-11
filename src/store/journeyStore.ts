import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useJourneyStore = create(
  persist(
    (set) => ({
      currentScene: 0,

      nextScene: () =>
        set((state: any) => ({
          currentScene:
            state.currentScene + 1,
        })),

      previousScene: () =>
        set((state: any) => ({
          currentScene: Math.max(
            0,
            state.currentScene - 1
          ),
        })),

      resetJourney: () =>
        set({
          currentScene: 0,
        }),
    }),
    {
      name: "witness-progress",
    }
  )
);