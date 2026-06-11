import DesireGraph from "@/components/graph/DesireGraph";

export default function DesireGraphPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="p-8">

        <h1 className="text-5xl mb-4">
          Desire Explorer
        </h1>

        <p className="text-zinc-400 mb-8">
          Trace every desire to its root.
        </p>

      </div>

      <DesireGraph />
    </main>
  );
}