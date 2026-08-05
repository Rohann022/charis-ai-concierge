import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { recommendProducts } from "@/lib/recommendationEngine";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `
You are CHARIS, an elite luxury gift concierge.

Your personality:
- Elegant
- Warm
- Human
- Premium
- Emotionally intelligent

Rules:

1. Ask only ONE follow-up question at a time.
2. Never ask multiple questions together.
3. Collect ALL of the following:
   - recipient
   - relationship
   - occasion
   - budget
   - personality
   - at least two interests
   - emotional goal
4. Do NOT return "complete": true until ALL information has been collected.

IMPORTANT:
Always respond ONLY with valid JSON.

If more information is needed:

{
  "complete": false,
  "message": "Your next conversational question."
}

If enough information is available:

{
  "complete": true,
  "preferences": {
    "budget": 50000,
    "personality": "Elegant",
    "occasion": "Birthday",
    "interests": [
      "Reading",
      "Travel"
    ]
  }
}
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // STEP 1: Collect user preferences
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        ...messages,
      ],
    });

    const content = completion.choices[0].message.content || "{}";

    let ai;

    try {
      ai = JSON.parse(content);
    } catch {
      return NextResponse.json({
        response: JSON.stringify({
          complete: false,
          message: "Sorry, I couldn't understand the AI response.",
        }),
      });
    }

    // Continue conversation if information is incomplete
    if (!ai.complete) {
      return NextResponse.json({
        response: JSON.stringify(ai),
      });
    }

    // STEP 2: Find matching products
    const recommendations = recommendProducts(ai.preferences);

    // STEP 3: Generate personalized explanations
    const explanationPrompt = `
You are CHARIS, an elite luxury gifting concierge.

The customer preferences are:

${JSON.stringify(ai.preferences, null, 2)}

The selected products are:

${JSON.stringify(recommendations, null, 2)}

For EACH product return:

- reason
- emotionalMeaning

Return ONLY valid JSON.

Example:

[
  {
    "reason": "Because she appreciates timeless elegance and classic craftsmanship.",
    "emotionalMeaning": "Represents love, gratitude and lasting memories."
  },
  {
    "reason": "Because...",
    "emotionalMeaning": "..."
  }
]
`;

    const explanationCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.8,
      messages: [
        {
          role: "user",
          content: explanationPrompt,
        },
      ],
    });

    let explanations = [];

    try {
      explanations = JSON.parse(
        explanationCompletion.choices[0].message.content || "[]"
      );
    } catch {
      explanations = [];
    }

    // STEP 4: Merge explanations into products
    const finalRecommendations = recommendations.map((product, index) => ({
      ...product,
      reason: explanations[index]?.reason || product.description,
      meaning:
        explanations[index]?.emotionalMeaning || product.meaning,
    }));

    // STEP 5: Return final recommendations
    return NextResponse.json({
      response: JSON.stringify({
        complete: true,
        recommendations: finalRecommendations,
      }),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        response: JSON.stringify({
          complete: false,
          message: "Something went wrong.",
        }),
      },
      { status: 500 }
    );
  }
}