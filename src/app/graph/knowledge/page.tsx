import KnowledgeGraph from "@/components/graph/KnowledgeGraph";

export default function KnowledgeGraphPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="p-8">

        <h1 className="text-5xl mb-4">
          Knowledge Graph
        </h1>

        <p className="text-zinc-400">
          Explore the teachings through concepts.
        </p>

      </div>

      <KnowledgeGraph />

    </main>
  );
}