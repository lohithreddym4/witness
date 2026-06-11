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
      <main className="p-20">
        Concept not found
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
    <main className="p-20 max-w-4xl mx-auto">

      <h1 className="text-6xl">
        {concept.title}
      </h1>

      <p className="mt-8 text-zinc-400">
        {concept.description}
      </p>

      <div className="mt-12">

        <h2 className="text-2xl mb-4">
          Teaching
        </h2>

        <p>
          {teaching?.teaching}
        </p>

      </div>

      <div className="mt-12">

        <h2 className="text-2xl mb-4">
          Reflection
        </h2>

        <p>
          {teaching?.reflection}
        </p>

      </div>

      <div className="mt-12">

        <h2 className="text-2xl mb-4">
          Related Concepts
        </h2>

        <div className="flex gap-4">

          {concept.related.map(
            (related) => (
              <Link
                key={related}
                href={`/concepts/${related}`}
                className=" border px-4 py-2"
              >
                {related}
              </Link>
            )
          )}

        </div>
        <Link
  href="/graph/knowledge"
  className=" inline-block mt-10 border px-4 py-2"
>
  Open Knowledge Graph
</Link>
      </div>

    </main>
  );
}