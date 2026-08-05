"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  onComplete?: () => void;
};

export default function TypingMessage({
  text,
  speed = 18,
  onComplete,
}: Props) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    setDisplayed("");

    const interval = setInterval(() => {
      index++;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);

        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <p className="whitespace-pre-line leading-8">
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  );
}