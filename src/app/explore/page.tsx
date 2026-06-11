import Link from "next/link";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="space-y-6">

        <Link
          href="/graph/desire"
          className="block border p-6"
        >
          Desire Graph
        </Link>

        <Link
          href="/graph/knowledge"
          className="block border p-6"
        >
          Knowledge Graph
        </Link>

        <Link
          href="/battlefield"
          className="block border p-6"
        >
          Battlefield
        </Link>

        <Link
          href="/simulator"
          className="block border p-6"
        >
          Life Simulator
        </Link>

        <Link
          href="/gallery"
          className="block border p-6"
        >
          Impermanence Gallery
        </Link>

      </div>

    </main>
  );
}