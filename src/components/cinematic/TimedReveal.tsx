"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  delay: number;
}

export default function TimedReveal({
  text,
  delay,
}: Props) {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setVisible(true),
      delay
    );

    return () =>
      clearTimeout(timer);
  }, [delay]);

  if (!visible) {
    return null;
  }

  return (
    <p className="text-3xl">
      {text}
    </p>
  );
}