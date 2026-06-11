import { Scene } from "@/types/journey";

export default function ReflectionScene({
  scene,
}: {
  scene: Scene;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-7xl font-light">
          {scene.title}
        </h1>

        <p className="mt-8 text-zinc-500">
          {scene.subtitle}
        </p>

      </div>

    </section>
  );
}