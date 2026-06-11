import {
  chapterContent,
} from "@/content/chapters/content";
import Link from "next/link";

export default function ChaptersPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-20">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl md:text-6xl mb-4">
          Chapter Explorer
        </h1>

        <p className="text-zinc-400 mb-12">
          Explore the Bhagavad Gita through its core ideas.
        </p>

        <div className="space-y-8">

          {chapterContent.map((chapter) => (
            <div
              key={chapter.id}
              className=" border border-zinc-800 rounded-xl p-8 hover:border-zinc-600 transition-all"
            >
              <div className="mb-6">

                <p className="text-sm text-zinc-500">
                  Chapter {chapter.id}
                </p>

                <h2 className="text-3xl mt-2">
                  {chapter.title}
                </h2>

              </div>

              <div className="flex flex-wrap gap-3">
  {chapter.concepts.map((concept) => (
    <Link
      key={concept}
      href={`/concepts/${concept.toLowerCase()}`}
      className=" px-3 py-1 rounded-full border border-zinc-700 text-sm text-zinc-300 hover:border-white hover:text-white transition-all"
    >
      {concept}
    </Link>
  ))}
</div>
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}