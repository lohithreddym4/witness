"use client";

import {
  useEffect,
  useState,
} from "react";

import { Verse } from "@/types/verse";

export default function VerseCard({
  verse,
}: {
  verse: Verse;
}) {
  const [sanskritText, setSanskritText] =
    useState("");

  const [meaningText, setMeaningText] =
    useState("");

  const [sanskritDone, setSanskritDone] =
    useState(false);

  const [meaningDone, setMeaningDone] =
    useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (
        index <
        verse.sanskrit.length
      ) {
        setSanskritText(
          verse.sanskrit.slice(
            0,
            index + 1
          )
        );

        index++;
      } else {
        clearInterval(interval);
        setSanskritDone(true);
      }
    }, 40);

    return () =>
      clearInterval(interval);
  }, [verse.sanskrit]);

  useEffect(() => {
    if (!sanskritDone) {
      return;
    }

    let index = 0;

    const interval = setInterval(() => {
      if (
        index <
        verse.meaning.length
      ) {
        setMeaningText(
          verse.meaning.slice(
            0,
            index + 1
          )
        );

        index++;
      } else {
        clearInterval(interval);
        setMeaningDone(true);
      }
    }, 25);

    return () =>
      clearInterval(interval);
  }, [
    sanskritDone,
    verse.meaning,
  ]);

  return (
    <div className="border border-zinc-800 rounded-xl p-6 mt-10">
      <div className="text-zinc-500">
        Bhagavad Gita {verse.chapter}.
        {verse.verse}
      </div>

      <p className="mt-4 italic text-xl">
        {sanskritText}

        {!sanskritDone && (
          <span className="animate-pulse">
            ▌
          </span>
        )}
      </p>

      <p className="mt-6 text-lg">
        {meaningText}

        {meaningDone && (
          <span className="animate-pulse">
            ▌
          </span>
        )}
      </p>
    </div>
  );
}