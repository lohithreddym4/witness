import Link from "next/link";

export default function HomePage() {
  return (
    <main className="
      min-h-screen
      flex
      items-center
      justify-center
    ">

      <div className="text-center">

        <h1 className="text-7xl mb-6">
          Witness
        </h1>

        <p className="text-zinc-400 mb-12">
          An interactive journey into
          self inquiry.
        </p>

        <Link
          href="/witness"
          className="
            border
            px-6
            py-3
          "
        >
          Begin
        </Link>

      </div>

    </main>
  );
}