import Link from "next/link";

import {
  concepts,
} from "@/content/concepts";

import {
  teachings,
} from "@/content/teachings";

export default async function ConceptPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const concept =
    concepts.find(
      (c) => c.id === id
    );

  if (!concept) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-zinc-500">
          Concept not found
        </p>
      </main>
    );
  }

  const teaching =
    teachings.find(
      (t) =>
        t.id ===
        concept.teachingId
    );

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-4xl mx-auto px-8 py-20">

        {/* Hero */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.4em] text-zinc-600 text-sm">
            Knowledge
          </p>

          <h1 className="text-7xl md:text-8xl font-light mt-6">
            {concept.title}
          </h1>

          <p className="mt-8 text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            {concept.description}
          </p>

        </div>

        {/* Teaching */}

        <section className="mb-10">

          <div className="border border-zinc-800 rounded-2xl p-8">

            <h2 className="text-3xl mb-6">
              Teaching
            </h2>

            <p className="text-lg leading-relaxed text-zinc-300">
              {teaching?.teaching}
            </p>

          </div>

        </section>

        {/* Reflection */}

        <section className="mb-16">

          <div className="border border-zinc-800 rounded-2xl p-8">

            <h2 className="text-3xl mb-6">
              Reflection
            </h2>

            <p className="text-lg leading-relaxed text-zinc-300 italic">
              {teaching?.reflection}
            </p>

          </div>

        </section>

        {/* Related */}

        <section>

          <h2 className="text-3xl mb-8">
            Continue Exploring
          </h2>

          <div className="flex flex-wrap gap-4">

            {concept.related.map(
              (related) => (
                <Link
                  key={related}
                  href={`/concepts/${related}`}
                  className=" px-5 py-3 rounded-full border border-zinc-800 hover:border-white transition-all"
                >
                  {related}
                </Link>
              )
            )}

          </div>

        </section>

        {/* Graph CTA */}

        <div className="text-center mt-20">

          <Link
            href="/graph/knowledge"
            className=" inline-flex items-center gap-2 border border-zinc-700 px-8 py-4 rounded-xl hover:border-white transition-all"
          >
            Open Knowledge Path →
          </Link>

        </div>

      </div>

    </main>
  );
}