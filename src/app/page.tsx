"use client";

import { AnimatePresence, motion } from "framer-motion";
import SceneRenderer from "@/components/cinematic/SceneRenderer";
import { witnessJourney } from "@/content/journeys/witness";
import { useJourneyStore } from "@/store/journeyStore";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

export default function HomePage() {
  const currentScene = useJourneyStore(
    (state) => state.currentScene
  );

  const scene = witnessJourney[currentScene];

  
  useKeyboardNavigation();

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <SceneRenderer scene={scene} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}