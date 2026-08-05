"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  "Understanding recipient personality...",
  "Analyzing emotional intent...",
  "Matching luxury collections...",
  "Selecting perfect gifts...",
];

export default function AnalyzingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === steps.length) {
          clearInterval(interval);

          setTimeout(() => {
            router.push("/recommendations");
          }, 700);

          return prev;
        }

        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111827] px-6 text-white">
      <div className="w-full max-w-2xl rounded-[36px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl">

        <div className="flex items-center justify-center gap-3">
          <Sparkles className="h-7 w-7 animate-pulse text-amber-400" />

          <h1 className="text-3xl font-bold">
            CHARIS AI
          </h1>
        </div>

        <p className="mt-5 text-center text-gray-300">
          Preparing your private luxury collection...
        </p>

        <div className="mt-12 space-y-6">

          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-4"
            >
              {index < currentStep ? (
                <CheckCircle2 className="text-green-400" />
              ) : (
                <div className="h-6 w-6 rounded-full border border-gray-500" />
              )}

              <p
                className={
                  index <= currentStep
                    ? "text-white"
                    : "text-gray-500"
                }
              >
                {step}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </main>
  );
}