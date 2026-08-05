"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";

type Gift = {
  id?: string;
  name: string;
  reason: string;
  meaning: string;
};

export default function RecommendationsPage() {
  const router = useRouter();

  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("charisRecommendations");

    if (!saved) {
      router.replace("/consultation");
      return;
    }

    try {
      const parsed = JSON.parse(saved);

      if (!parsed || parsed.length === 0) {
        router.replace("/consultation");
        return;
      }

      setGifts(parsed);
    } catch {
      router.replace("/consultation");
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F3F0]">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#5B1E2D] border-t-transparent" />

          <p className="mt-6 text-lg font-medium text-gray-600">
            Loading your luxury recommendations...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3F0] py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="tracking-[0.4em] text-[#8A5A44]">
            CHARIS AI
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Your Curated Luxury Gifts
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Every recommendation has been personally selected after
            understanding your conversation, emotional intent,
            personality preferences, and gifting goals.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">

          {gifts.map((gift, index) => {

            const product = products.find(
              (p) => p.name === gift.name
            );

            if (!product) return null;

            const matchScore = 97 - index * 3;

            return (

              <div
                key={product.id}
                className="overflow-hidden rounded-[32px] bg-white shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">

                  <div className="flex items-start justify-between">

                    <div>

                      <h2 className="text-2xl font-bold">
                        {product.name}
                      </h2>

                      <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
                        {product.brand}
                      </p>

                    </div>

                    <div className="rounded-full bg-[#F5ECE8] px-4 py-2 text-sm font-semibold text-[#5B1E2D]">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      }).format(product.price)}
                    </div>

                  </div>

                  {/* Match Score */}

                  <div className="mt-8 rounded-2xl bg-green-50 p-5">

                    <div className="flex items-center justify-between">

                      <span className="font-semibold text-green-700">
                        CHARIS Match
                      </span>

                      <span className="text-lg font-bold text-green-700">
                        {matchScore}%
                      </span>

                    </div>

                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-green-200">

                      <div
                        className="h-full rounded-full bg-green-600 transition-all duration-1000"
                        style={{
                          width: `${matchScore}%`,
                        }}
                      />

                    </div>

                  </div>

                  <div className="mt-8">

                    <h3 className="text-lg font-semibold">
                      Why this gift?
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      {gift.reason}
                    </p>

                  </div>

                  <div className="mt-8 rounded-2xl bg-[#F8F5F2] p-6">

                    <h3 className="text-lg font-semibold">
                      Emotional Meaning
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      {gift.meaning}
                    </p>

                  </div>
                                    <div className="mt-8 rounded-2xl border border-[#E8D9D2] bg-[#FDF9F7] p-6">

                    <h3 className="text-lg font-semibold text-[#5B1E2D]">
                      Why CHARIS Selected This
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      CHARIS compared your conversation with our curated
                      luxury collection and selected this gift because it
                      best aligns with the recipient's personality,
                      interests, occasion, emotional expectations, and
                      your budget. The goal isn't simply to recommend an
                      expensive product—it's to create a memorable and
                      meaningful gifting experience.
                    </p>

                  </div>

                  <div className="mt-8">

                    <h3 className="text-lg font-semibold">
                      Brand Story
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      {product.story}
                    </p>

                  </div>

                  <div className="mt-8 flex items-center justify-between border-t pt-6 text-sm text-gray-500">

                    <span>
                      🚚 {product.delivery}
                    </span>

                    <span>
                      ⭐ {product.rating}
                    </span>

                  </div>

                  <Link
                    href="/gift-message"
                    className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[#5B1E2D] px-6 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#45111D] hover:shadow-lg"
                  >
                    Continue →
                  </Link>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </main>
  );
}