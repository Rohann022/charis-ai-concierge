"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Container from "../common/Container";
import Link from "next/link";

export default function Hero() {
  const { status } = useSession();

  return (
    <section className="relative overflow-hidden bg-[#F8F5F2] py-32">

      {/* Background Glow */}
      <div className="absolute left-[-180px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#5B1E2D]/10 blur-[170px]" />

      <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#C7A55C]/20 blur-[150px]" />

      <Container className="relative">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-block rounded-full border border-[#5B1E2D]/20 bg-white px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#5B1E2D] shadow-sm">
              Luxury AI Concierge
            </span>

            <h1 className="mt-8 text-6xl font-semibold leading-tight text-[#231B1B] xl:text-7xl">
              Every
              <br />
              unforgettable
              <br />
              gift begins
              <br />
              with
              <span className="text-[#5B1E2D]">
                {" "}
                understanding.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              CHARIS learns about your loved one through an elegant AI
              conversation and curates meaningful luxury gifts that create
              unforgettable memories.
            </p>

            <div className="mt-12 flex gap-5">

              <Link
                href={
                  status === "authenticated"
                    ? "/consultation"
                    : "/login"
                }
                className="flex items-center gap-3 rounded-full bg-[#5B1E2D] px-8 py-4 text-white transition hover:scale-105"
              >
                Begin Journey
                <ArrowRight size={18} />
              </Link>

              <button className="rounded-full border border-[#5B1E2D] px-8 py-4 text-[#5B1E2D] transition hover:bg-[#5B1E2D] hover:text-white">
                Learn More
              </button>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="rounded-[42px] border border-white/40 bg-white/80 p-10 shadow-[0_35px_90px_rgba(0,0,0,0.08)] backdrop-blur-xl">

              <div className="flex items-start justify-between">

                <div className="pl-2">

                  {/* Fixed CHARIS Alignment */}
                  <p className="ml-1 text-xs uppercase tracking-[0.38em] text-[#5B1E2D]">
                    CHARIS
                  </p>

                  <h3 className="mt-2 ml-1 text-4xl font-semibold text-[#231B1B]">
                    Concierge Preview
                  </h3>

                </div>

                <div className="mt-3 h-3.5 w-3.5 rounded-full bg-green-500 animate-pulse" />

              </div>

              <div className="mt-10 space-y-6">
                                {/* AI Message */}

                <div className="rounded-3xl bg-[#F4F4F4] p-6">

                  <p className="ml-2 text-xs uppercase tracking-widest text-gray-500">
                    AI
                  </p>

                  <p className="mt-3 ml-2 leading-7 text-[#231B1B]">
                    Tell me about the person you'd love to surprise.
                  </p>

                </div>

                {/* User Message */}

                <div className="ml-auto max-w-sm rounded-3xl bg-[#5B1E2D] p-6 text-white">

                  <p className="ml-2 text-xs uppercase tracking-widest opacity-70">
                    YOU
                  </p>

                  <p className="mt-3 ml-2 leading-7">
                    My mother. She never buys anything for herself.
                  </p>

                </div>

                {/* AI Message */}

                <div className="rounded-3xl bg-[#F4F4F4] p-6">

                  <p className="ml-2 text-xs uppercase tracking-widest text-gray-500">
                    AI
                  </p>

                  <p className="mt-3 ml-2 leading-7 text-[#231B1B]">
                    Beautiful. What kind of memory would you like this gift to
                    create for her?
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}