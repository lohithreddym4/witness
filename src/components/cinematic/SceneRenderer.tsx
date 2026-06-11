"use client";

import { Scene } from "@/types/journey";

import HeroScene from "./scenes/HeroScene";
import QuestionScene from "./scenes/QuestionScene";
import TimelineScene from "./scenes/TimelineScene";
import ReflectionScene from "./scenes/ReflectionScene";
import WheelScene from "./scenes/WheelScene";

interface Props {
  scene: Scene;
}

export default function SceneRenderer({
  scene,
}: Props) {
  switch (scene.type) {
    case "hero":
      return <HeroScene scene={scene} />;

    case "question":
      return <QuestionScene scene={scene} />;

    case "timeline":
      return <TimelineScene scene={scene} />;

    case "wheel":
      return <WheelScene scene={scene} />;

    case "reflection":
      return <ReflectionScene scene={scene} />;

    default:
      return null;
  }
}