import { coreVerses } from "@/content/verses/core";

export function getVerseByTeaching(
  teachingId: string
) {
  return coreVerses.find(
    (verse) =>
      verse.teachingId === teachingId
  );
}