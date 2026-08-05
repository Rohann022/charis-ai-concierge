"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Container from "../common/Container";

export default function Navbar() {
  const { status } = useSession();

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <Container>
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/40 bg-white/80 px-8 py-4 shadow-xl backdrop-blur-xl">

          <Link
            href="/"
            className="text-2xl font-bold tracking-[0.25em] text-[#231B1B]"
          >
            CHARIS
          </Link>

          <nav className="hidden items-center gap-10 text-sm text-[#231B1B] md:flex">
            <a
              href="#about"
              className="transition hover:text-[#5B1E2D]"
            >
              About
            </a>

            <a
              href="#works"
              className="transition hover:text-[#5B1E2D]"
            >
              How it Works
            </a>

            <a
              href="#contact"
              className="transition hover:text-[#5B1E2D]"
            >
              Contact
            </a>
          </nav>

          <Link
            href={status === "authenticated" ? "/consultation" : "/login"}
            className="rounded-full bg-[#5B1E2D] px-9 py-3 text-white transition duration-300 hover:bg-[#42131f] hover:scale-105"
          >
            Start Consultation
          </Link>

        </div>
      </Container>
    </motion.header>
  );
}