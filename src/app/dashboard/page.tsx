"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import {
  ArrowRight,
  Clock3,
  Gift,
  Heart,
  LogOut,
  Plus,
  Sparkles,
  User,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  const logout = () => {
    signOut({
      callbackUrl: "/",
    });
  };

  if (status === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090909] text-white">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-xl tracking-widest"
        >
          Loading Concierge...
        </motion.div>
      </main>
    );
  }

  if (!session) return null;

  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#7A273D]/30 blur-[140px]" />
        <div className="absolute right-0 top-20 h-[350px] w-[350px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-fuchsia-700/10 blur-[120px]" />
    </div>

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* HEADER */}
        <br />
        <motion.header
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[34px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl shadow-2xl"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-300">
                <Sparkles size={15} />
                CHARIS AI
              </div>

              <h6 className="mt-6 text-5xl font-bold leading-tight">
                Welcome back,
                <br />
                <span className="text-amber-200">
                  {session.user?.name}
                </span>
              </h6>

              <p className="mt-5 max-w-xl text-gray-400">
                Experience premium AI-powered luxury gifting crafted for
                every relationship and occasion.
              </p> <br />

            </div> 

            <div className="flex flex-col gap-4">

              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300/10">
                  <User className="text-amber-300" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Signed in as
                  </p>

                  <p className="font-medium">
                    {session.user?.email}
                  </p>
                </div>

              </div>

              <button
                onClick={logout}
                className="flex items-center justify-center gap-2 rounded-2xl border border-red-400/20 bg-red-500/10 px-6 py-4 text-red-300 transition hover:bg-red-500/20"
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>

          </div>
        </motion.header>

        {/* HERO */}
        <br />
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mt-10 overflow-hidden rounded-[42px] border border-[#7A273D]/30 bg-gradient-to-br from-[#7A273D]/50 via-[#181818] to-[#090909] p-10 lg:p-16"
        >
          <br />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/20 blur-[120px]" />

          <div className="relative max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-amber-300">
              <ShieldCheck size={16} />
              BESPOKE AI CONCIERGE
            </div>

            <h2 className="text-5xl font-bold leading-tight">
              Luxury gifting,
              <br />
              intelligently curated.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Let CHARIS discover extraordinary gifts through AI,
              emotional intelligence and luxury craftsmanship.
            </p>

            <Link
              href="/consultation"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-amber-300 px-8 py-5 font-semibold text-black transition hover:scale-105"
            >
              <br />
              <Plus size={18} />
              Start Consultation
              <ArrowRight size={18} />
            </Link>

          </div>
          
      
        </motion.section>

        {/* STATS */}
        <br />
        <section className="mt-10 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Luxury Gifts",
              value: "12",
              icon: Gift,
              color: "text-amber-300",
              bg: "bg-amber-400/10",
            },
            {
              title: "Consultations",
              value: "5",
              icon: Clock3,
              color: "text-sky-300",
              bg: "bg-sky-400/10",
            },
            {
              title: "Saved Gifts",
              value: "8",
              icon: Heart,
              color: "text-rose-400",
              bg: "bg-rose-400/10",
            },
          ].map((item) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={item.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <item.icon className={item.color} size={28} />
              </div>

              <h2 className="mt-6 text-5xl font-bold">
                {item.value}
              </h2>

              <p className="mt-2 uppercase tracking-[0.25em] text-gray-400 text-xs">
                {item.title}
              </p>
            </motion.div>
          ))}

        </section>

        {/* CONTENT */}
          <br />
        <section className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                    {/* Recent Consultations */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[34px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <div className="mb-8 flex items-center justify-between">

              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-amber-400/10 p-3">
                  <Clock3 className="text-amber-300" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Recent Consultations
                  </h3>

                  <p className="text-sm text-gray-400">
                    Continue where you left off
                  </p>
                </div>
              </div>

            </div>

            <div className="space-y-4">

              {[
                "Birthday Gift Consultation",
                "Luxury Anniversary Collection",
                "Executive Corporate Gift",
                "Wedding Celebration Collection",
              ].map((item) => (
                <motion.div
                  whileHover={{ x: 8 }}
                  key={item}
                  className="group flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-amber-300/30 hover:bg-white/[0.05]"
                >
                  <div>
                    <h4 className="font-medium">
                      {item}
                    </h4>

                    <p className="mt-1 text-sm text-gray-400">
                      Continue consultation
                    </p>
                  </div>

                  <ChevronRight className="text-gray-500 transition group-hover:text-amber-300" />
                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* Right Side */}

          <div className="space-y-8">

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[34px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-red-400/10 p-3">
                  <Heart className="text-red-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Saved Gifts
                  </h3>

                  <p className="text-sm text-gray-400">
                    Your luxury wishlist
                  </p>
                </div>

              </div>

              <div className="mt-8 space-y-4">

                {[
                  "Cartier Tank Watch",
                  "Montblanc Meisterstück Pen",
                  "Baccarat Rouge 540",
                  "Louis Vuitton Horizon",
                ].map((gift) => (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    key={gift}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-amber-300/20"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300/10">
                      <Gift
                        className="text-amber-300"
                        size={18}
                      />
                    </div>

                    <span className="font-medium">
                      {gift}
                    </span>

                  </motion.div>
                ))}

              </div>

            </motion.div>
                <br />
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-[34px] border border-[#7A273D]/30 bg-gradient-to-br from-[#7A273D]/30 to-[#121212] p-8"
            >

              <h3 className="text-2xl font-semibold">
                Ready for another masterpiece?
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                Describe your recipient, occasion and budget,
                and CHARIS will curate luxury gifts within
                seconds.
              </p>
                <br />
              <Link
                href="/consultation"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-amber-300 px-7 py-4 font-semibold text-black transition hover:scale-105"
              >
                Start New Consultation
                <ArrowRight size={18} />
              </Link>

            </motion.div>

          </div>

        </section>

      </div>

    </main>
  );
}