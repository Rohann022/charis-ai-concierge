import { products } from "@/data/products";

type Preferences = {
  budget: number | string;
  interests: string[];
  personality: string;
  occasion: string;
};

export function recommendProducts(preferences: Preferences) {
  // Convert budget safely
  const budget =
    typeof preferences.budget === "number"
      ? preferences.budget
      : Number(
          String(preferences.budget).replace(/[^\d]/g, "")
        ) || 0;

  const scoredProducts = products.map((product) => {
    let score = 0;

    // Budget Match
    if (product.price <= budget) {
      score += 30;
    }

    // Interest Match
    if (preferences.interests?.length) {
      preferences.interests.forEach((interest) => {
        if (
          product.interests
            .map((i) => i.toLowerCase())
            .includes(interest.toLowerCase())
        ) {
          score += 20;
        }
      });
    }

    // Personality Match
    if (
      preferences.personality &&
      product.personalities
        .map((p) => p.toLowerCase())
        .includes(preferences.personality.toLowerCase())
    ) {
      score += 25;
    }

    // Occasion Match
    if (
      preferences.occasion &&
      product.occasions
        .map((o) => o.toLowerCase())
        .includes(preferences.occasion.toLowerCase())
    ) {
      score += 25;
    }

    return {
      ...product,
      score,
    };
  });

  return scoredProducts
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}