"use client";

import { useState } from "react";

interface Props {
  chain: string[];
}

export default function DesireInquiry({
  chain,
}: Props) {
  const [step, setStep] =
    useState(0);

  return (
    <div className="max-w-3xl">

      <div className="space-y-6">

        {chain
          .slice(0, step + 1)
          .map((item, index) => (
            <p
              key={index}
              className="text-3xl"
            >
              {item}
            </p>
          ))}

      </div>

      {step <
        chain.length - 1 && (
        <button
          onClick={() =>
            setStep(step + 1)
          }
          className="
            mt-12
            border
            px-6
            py-3
          "
        >
          Continue
        </button>
      )}

    </div>
  );
}