interface Props {
  desires: string[];
}

export default function DeathScreen({
  desires,
}: Props) {
  return (
    <div className="max-w-3xl text-center">

      <h1 className="text-7xl mb-8">
        Death
      </h1>

      <p className="text-zinc-500">
        The body has dissolved.
      </p>

      <div className="mt-12">

        <h2 className="text-3xl mb-6">
          Remaining Desires
        </h2>

        {desires.length === 0 ? (
          <p className="text-green-400">
            None
          </p>
        ) : (
          <ul className="space-y-2">
            {desires.map((desire) => (
              <li key={desire}>
                {desire}
              </li>
            ))}
          </ul>
        )}

      </div>

    </div>
  );
}