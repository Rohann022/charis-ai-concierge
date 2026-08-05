"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Truck, Heart, Gift } from "lucide-react";

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F2]">

      <div className="mx-auto max-w-7xl px-8 py-12">

        <Link
          href="/recommendations"
          className="inline-flex items-center gap-2 text-[#5B1E2D]"
        >
          <ArrowLeft size={18} />
          Back to Recommendations
        </Link>

        <div className="mt-10 grid gap-16 lg:grid-cols-2">

          {/* Product Image */}

          <div className="relative h-[600px] overflow-hidden rounded-[40px]">

            <Image
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200"
              alt="Luxury Gift"
              fill
              className="object-cover"
            />

          </div>

          {/* Product Details */}

          <div>

            <p className="uppercase tracking-[0.3em] text-[#5B1E2D] text-sm">
              CHARIS SELECTION
            </p>

            <h1 className="mt-4 text-5xl font-semibold">
              Cartier Tank Watch
            </h1>

            <p className="mt-5 text-3xl font-semibold text-[#5B1E2D]">
              ₹3,45,000
            </p>

            <p className="mt-8 leading-8 text-gray-600">
              A timeless luxury timepiece chosen for someone who appreciates
              elegance, craftsmanship, and lasting memories.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">

                <Heart className="text-[#5B1E2D]" />

                <div>

                  <h3 className="font-semibold">
                    Symbolic Meaning
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Represents gratitude, legacy, and every precious moment
                    shared together.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Gift className="text-[#5B1E2D]" />

                <div>

                  <h3 className="font-semibold">
                    Why CHARIS Chose This
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Based on your conversation, this gift perfectly reflects
                    timeless appreciation and emotional value.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Truck className="text-[#5B1E2D]" />

                <div>

                  <h3 className="font-semibold">
                    Estimated Delivery
                  </h3>

                  <p className="mt-2 text-gray-600">
                    3–5 Business Days
                  </p>

                </div>

              </div>

            </div>

            <Link
              href="/gift-message"
              className="mt-12 inline-flex rounded-full bg-[#5B1E2D] px-8 py-4 text-white"
            >
              Generate Gift Message
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}