"use client";

import { useState } from "react";
import { Sparkles, Copy, Check, WandSparkles } from "lucide-react";

const generatedMessage = `Dear Mom,

Thank you for being my greatest strength, my safest place, and my biggest inspiration.

Every sacrifice you've made has shaped the person I am today. I hope this small gift reminds you how deeply you are loved and appreciated.

With all my love,
Rohan ❤️`;

export default function GiftMessagePage() {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateMessage = () => {
    setLoading(true);

    setTimeout(() => {
      setMessage(generatedMessage);
      setLoading(false);
    }, 1800);
  };

  const improveMessage = () => {
    setLoading(true);

    setTimeout(() => {
      setMessage(
        message +
          "\n\nMay this gift always remind you of the countless beautiful memories we've shared together."
      );
      setLoading(false);
    }, 1500);
  };

  const copyMessage = async () => {
    await navigator.clipboard.writeText(message);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F8F5F2]">

      <section className="mx-auto max-w-4xl px-8 py-16">

        <p className="uppercase tracking-[0.35em] text-[#5B1E2D] text-sm">
          AI GIFT MESSAGE
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          Craft Something They'll Never Forget
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Let CHARIS create an elegant, heartfelt message inspired by your
          conversation.
        </p>

        <div className="mt-12 rounded-[32px] bg-white p-8 shadow-xl">

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={14}
            className="w-full resize-none rounded-2xl border p-6 outline-none focus:border-[#5B1E2D]"
            placeholder="Generate or write your message..."
          />

          {loading && (
            <div className="mt-6 flex items-center gap-3 text-[#5B1E2D] animate-pulse">
              <Sparkles />
              CHARIS is writing something beautiful...
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              onClick={generateMessage}
              className="rounded-full bg-[#5B1E2D] px-7 py-3 text-white flex items-center gap-2"
            >
              <Sparkles size={18} />
              Generate with AI
            </button>

            <button
              onClick={improveMessage}
              className="rounded-full border border-[#5B1E2D] px-7 py-3 text-[#5B1E2D] flex items-center gap-2"
            >
              <WandSparkles size={18} />
              Improve
            </button>

            <button
              onClick={copyMessage}
              className="rounded-full border border-gray-300 px-7 py-3 flex items-center gap-2"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied" : "Copy"}
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}