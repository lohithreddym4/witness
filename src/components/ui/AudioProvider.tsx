"use client";

import { useEffect } from "react";
import { ambientAudio } from "@/lib/audio";

export default function AudioProvider() {
  useEffect(() => {
    const startAudio = () => {
      ambientAudio.play();

      window.removeEventListener(
        "click",
        startAudio
      );
    };

    window.addEventListener(
      "click",
      startAudio
    );

    return () =>
      window.removeEventListener(
        "click",
        startAudio
      );
  }, []);

  return null;
}