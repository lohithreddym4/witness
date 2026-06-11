import { Verse } from "@/types/verse";

export default function VerseCard({
  verse,
}: {
  verse: Verse;
}) {
  return (
    <div className=" border border-zinc-800 rounded-xl p-6 mt-10">

      <div className="text-zinc-500">
        Bhagavad Gita
        {verse.chapter}.
        {verse.verse}
      </div>

      <p className="mt-4 italic">
        {verse.sanskrit}
      </p>

      <p className="mt-4">
        {verse.meaning}
      </p>

    </div>
  );
}