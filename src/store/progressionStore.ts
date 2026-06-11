import { create } from "zustand";
import { JOURNEY_PATH } from "@/config/journey";

interface ProgressionState {
  completed: string[];

  completeModule: (
    moduleId: string
  ) => void;
  isUnlocked: (
    moduleId: string
  ) => boolean;
}

export const useProgressionStore =
  create<ProgressionState>(
    (set) => ({
      completed: [],
      isUnlocked: (moduleId) => {
        const index =
          JOURNEY_PATH.indexOf(moduleId);
      
        if (index === 0) {
          return true;
        }
      
        const previousModule =
          JOURNEY_PATH[index - 1];
      
        return get().completed.includes(
          previousModule
        );
      },

      completeModule: (
        moduleId
      ) =>
        set((state) => ({
          completed: [
            ...new Set([
              ...state.completed,
              moduleId,
            ]),
          ],
        })),
    })
  );