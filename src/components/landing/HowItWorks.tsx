"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import { MessageCircle, Sparkles, Gift } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "01. Share the Story",
    description:
      "Tell CHARIS about the recipient, your relationship, the occasion, and the emotions you want your gift to create.",
  },
  {
    icon: Sparkles,
    title: "02. AI Understands",
    description:
      "CHARIS asks thoughtful follow-up questions, understands context, and builds a meaningful profile before making recommendations.",
  },
  {
    icon: Gift,
    title: "03. Receive Curated Gifts",
    description:
      "Discover elegant luxury gifts, each paired with a heartfelt explanation, symbolic meaning, and a personalized gift message.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="works"
      className="bg-[#F8F5F2] py-28"
    >
      <Container>
        <br />
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#5B1E2D]">
            HOW IT WORKS
          </p> <br />

          <h2 className="mt-5 text-5xl text-[#231B1B]">
            Three Simple Steps
          </h2>
          <br />
          <br />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          A calm thoughtful experience designed to replace endless browsing
            with meaningful conversation.
          </p>
          <br />


        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-[32px] bg-white p-10 shadow-lg"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5B1E2D] text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {step.description}
                </p>

              </motion.div>

            );
          })}

        </div>

      </Container>
    </section>
  );
}