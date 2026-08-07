import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { recommendProducts } from "@/lib/recommendationEngine";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


const SYSTEM_PROMPT = `
You are CHARIS, an elite private luxury gift concierge.

You are elegant, warm, emotionally intelligent and premium.
You do not behave like a normal chatbot or a form.
You create a personal luxury concierge experience.

Your goal is to understand the recipient's story, emotions and preferences, then create personalized luxury gift recommendations.


You must collect these fields:

- recipient
- relationship
- occasion
- budget
- personality
- interests
- emotionalGoal


IMPORTANT CONVERSATION RULES:

1. Read the COMPLETE conversation history every time.
2. Remember all previous answers.
3. Never ask for information that has already been collected.
4. Ask ONLY ONE question at a time.
5. Never say "next question".
6. Never output placeholder text.
7. Never sound like a questionnaire.
8. Always acknowledge the user's answer emotionally before asking the next question.
9. Keep acknowledgement + question within 1-2 sentences.
10. Maintain a luxury concierge tone.
11. Make the user feel understood and valued.
12. Interests must contain EXACTLY TWO unique interests.
13. Once two interests are collected, immediately move to the next missing field.
14. If user says "no", "none", "nothing", or "that's all", skip that field.
15. Budget should be numeric whenever possible.


CONVERSATION STYLE:

Never do:

User:
girlfriend

Assistant:
What is your relationship with them?


Instead do:

User:
girlfriend

Assistant:
"That's lovely! You're looking to gift your girlfriend. What is the special occasion for this gift?"


User:
propose day

Assistant:
"That's romantic! A proposal gift should feel truly unforgettable. What budget range would you like to explore for this special moment?"


User:
10000

Assistant:
"Perfect. I'll help you discover something meaningful within that range. How would you describe her personality?"


FOLLOW THIS INFORMATION ORDER:


STEP 1: RECIPIENT + RELATIONSHIP

Understand both together.

Ask:

"Tell me about the person you would like to celebrate and your relationship with them."


If user answers something like:

"girlfriend"

Store:

recipient:
"girlfriend"

relationship:
"girlfriend"


Then continue with:

"That's lovely! You're looking to gift your girlfriend. What is the special occasion for this gift?"


STEP 2: OCCASION

Collect the occasion.

Examples:
- birthday
- anniversary
- proposal day
- wedding
- graduation
- achievement

After collecting:

Acknowledge emotionally and ask budget.

Example:

"That's a beautiful occasion! What budget range would you like to explore for this special gift?"


STEP 3: BUDGET

Collect numeric budget.

After collecting:

Acknowledge and ask personality.

Example:

"Wonderful. I'll help you find something meaningful within this range. How would you describe their personality?"


STEP 4: PERSONALITY

Collect personality traits.

Examples:
- creative
- elegant
- romantic
- adventurous
- emotional
- minimalist

After collecting:

Acknowledge and ask interests.

Example:

"That gives me a beautiful understanding of their personality. What are two things they love or are passionate about?"


STEP 5: INTERESTS

Collect exactly TWO interests.

Examples:
- art
- music
- travel
- fashion
- books
- photography

After collecting two:

Acknowledge and ask emotional goal.

Example:

"Wonderful, I can already imagine something personalized for them. What feeling should this gift create?"


STEP 6: EMOTIONAL GOAL

Collect desired emotion.

Examples:
- romantic
- memorable
- surprising
- emotional
- luxurious
- heartfelt


After all fields are collected, return complete true.


ALWAYS RETURN JSON ONLY.


IF INFORMATION IS MISSING:

Return:

{
  "complete": false,
  "message": "short emotional acknowledgement + next question",
  "preferences": {
    "recipient": "",
    "relationship": "",
    "occasion": "",
    "budget": "",
    "personality": "",
    "interests": [],
    "emotionalGoal": ""
  }
}


IF INFORMATION IS COMPLETE:

Return:

{
  "complete": true,
  "preferences": {
    "recipient": "",
    "relationship": "",
    "occasion": "",
    "budget": "",
    "personality": "",
    "interests": [],
    "emotionalGoal": ""
  }
}


IMPORTANT:

- Return valid JSON only.
- Never return markdown.
- Never return explanations.
- Never say "next question".
- Never repeat collected information.
`;

export async function POST(req: Request) {

  try {

    const { messages } = await req.json();


    const completion =
      await groq.chat.completions.create({

        model: "llama-3.3-70b-versatile",

        temperature: 0.2,

        response_format: {
          type: "json_object",
        },

        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          ...messages,
        ],

      });



    const content =
      completion.choices[0].message.content ?? "{}";



    console.log("========== GROQ ==========");
    console.log(content);
    console.log("==========================");



    let ai;


    try {

      ai = JSON.parse(content);

    } catch {

      return NextResponse.json({
        response: JSON.stringify({

          complete:false,

          message:
          "Could you tell me a little more about the person you want to celebrate?",

        }),
      });

    }



    if(!ai.preferences){

      ai.preferences = {

        recipient:"",
        relationship:"",
        occasion:"",
        budget:"",
        personality:"",
        interests:[],
        emotionalGoal:"",

      };

    }



    const preferences = ai.preferences;



    preferences.interests = [
      ...new Set(
        (preferences.interests || [])
        .map((i:string)=>i.trim())
        .filter(Boolean)
      )
    ].slice(0,2);



    // Continue consultation

    if(!ai.complete){


      if(
        preferences.interests.length >=2 &&
        (ai.message || "")
        .toLowerCase()
        .includes("interest")
      ){

        if(!preferences.emotionalGoal){

          ai.message =
          "What feeling should this gift create for them?";

        }

      }



      return NextResponse.json({

        response: JSON.stringify({

          complete:false,

          message:
          ai.message,

          preferences,

        }),

      });

    }




    // Validation before recommendation

    if(

      !preferences.recipient ||
      !preferences.relationship ||
      !preferences.occasion ||
      !preferences.budget ||
      !preferences.personality ||
      preferences.interests.length < 2 ||
      !preferences.emotionalGoal

    ){

      return NextResponse.json({

        response:JSON.stringify({

          complete:false,

          message:
          "I just need a little more information before creating your luxury recommendations.",

          preferences,

        }),

      });

    }




    // Generate products

    const recommendations =
      recommendProducts(preferences);



    const explanationPrompt = `

You are CHARIS, a luxury gifting concierge.

Explain why these gifts are emotionally perfect.

Customer profile:

${JSON.stringify(preferences,null,2)}


Products:

${JSON.stringify(recommendations,null,2)}


Return JSON ONLY.

Format:

[
{
"reason":"",
"emotionalMeaning":""
}
]


Rules:

- Mention personality.
- Mention interests.
- Mention occasion.
- Make every explanation unique.
- Sound luxurious and personal.

`;



    const explanationCompletion =
      await groq.chat.completions.create({

        model:"llama-3.3-70b-versatile",

        temperature:0.8,

        response_format:{
          type:"json_object",
        },

        messages:[
          {
            role:"user",
            content:explanationPrompt,
          }
        ],

      });



    let explanations:any[] = [];


    try{

      const parsed =
      JSON.parse(
        explanationCompletion
        .choices[0]
        .message
        .content ?? "[]"
      );


      explanations =
      Array.isArray(parsed)
      ? parsed
      : parsed.recommendations ?? [];


    }catch{

      explanations=[];

    }




    const finalRecommendations =
      recommendations.map((product,index)=>({

        ...product,


        reason:
        explanations[index]?.reason ??
        "A carefully selected luxury gift matching your recipient.",


        meaning:
        explanations[index]?.emotionalMeaning ??
        "A meaningful gift designed to create unforgettable memories.",

      }));




    return NextResponse.json({
  response: JSON.stringify({
    complete: true,
    preferences: ai.preferences,
    recommendations: finalRecommendations,
  }),
});



  } catch(error){

    console.error(error);


    return NextResponse.json(

      {
        response:JSON.stringify({

          complete:false,

          message:
          "Something went wrong.",

        }),
      },

      {
        status:500,
      }

    );

  }

}