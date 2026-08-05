"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-28"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >

          <br />
          <p className="w-full block uppercase tracking-[0.4em] text-[#5B1E2D] text-sm text-center">
  ABOUT CHARIS
</p>

          <h2 className="mt-6 text-5xl leading-tight text-[#231B1B]">
            Luxury isn't about spending more.
            <br />
            It's about giving with intention.
          </h2>
          <br />

          <p className="mt-8 text-lg leading-9 text-gray-600">
            CHARIS transforms gifting into a deeply personal experience.
            Instead of scrolling through endless products,
            our AI concierge understands your recipient,
            their personality, your relationship,
            and the emotions you want to create.
          </p><br />

        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[32px] border border-gray-200 bg-[#FAF8F6] p-10 shadow-sm"
          >

            <h3 className="text-2xl font-semibold">
              Understand
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              Through a natural conversation,
              CHARIS learns what truly matters
              about the recipient.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[32px] border border-gray-200 bg-[#FAF8F6] p-10 shadow-sm"
          >

            <h3 className="text-2xl font-semibold">
              Curate
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              AI carefully selects luxury gifts
              based on meaning,
              personality,
              and emotional impact.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[32px] border border-gray-200 bg-[#FAF8F6] p-10 shadow-sm"
          >

            <h3 className="text-2xl font-semibold">
              Celebrate
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              Every recommendation includes
              a heartfelt story,
              symbolic meaning,
              and a beautifully crafted message.
            </p>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}