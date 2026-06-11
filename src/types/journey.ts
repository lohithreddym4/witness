export type SceneType =
  | "hero"
  | "question"
  | "timeline"
  | "reflection"
  | "wheel";

export interface TimelineEntry {
  age: number;
  statement: string;
}

export interface Scene {
  id: string;
  type: SceneType;

  title?: string;
  subtitle?: string;

  question?: string;

  timeline?: TimelineEntry[];

  nextLabel?: string;
}