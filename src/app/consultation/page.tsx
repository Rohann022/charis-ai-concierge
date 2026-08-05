"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  SendHorizontal,
  Home,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

import TypingIndicator from "@/components/TypingIndicator";
import TypingMessage from "@/components/chat/TypingMessage";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ConsultationPage() {
  const router = useRouter();

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Every unforgettable gift begins with understanding the story behind it.\n\nI'm CHARIS, your private luxury gift concierge. Tell me about the person you'd like to celebrate.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const updated: Message[] = [
      ...messages,
      {
        role: "user",
        content: input.trim(),
      },
    ];

    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updated,
        }),
      });

      const data = await res.json();

      let ai;

      try {
        ai = JSON.parse(data.response);
      } catch {
        setMessages([
          ...updated,
          {
            role: "assistant",
            content:
              "I couldn't understand the response. Please try again.",
          },
        ]);
        setLoading(false);
        return;
      }

      if (!ai.complete) {
        setMessages([
          ...updated,
          {
            role: "assistant",
            content: ai.message,
          },
        ]);
        setLoading(false);
        return;
      }

      localStorage.setItem(
        "charisRecommendations",
        JSON.stringify(ai.recommendations)
      );

      setMessages([
        ...updated,
        {
          role: "assistant",
          content:
            "Your private consultation is complete.\n\nI'm now curating a collection of luxury gifts specially selected for your recipient.",
        },
      ]);

      setTimeout(() => {
        router.push("/analyzing");
      }, 2000);

    } catch (error) {
      console.error(error);

      setMessages([
        ...updated,
        {
          role: "assistant",
          content:
            "Something went wrong while preparing your consultation.",
        },
      ]);
    }

    setLoading(false);
  }


  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">

      <div className="fixed inset-0 -z-10">
        <div className="
          absolute left-1/2 top-[-250px]
          h-[550px] w-[550px]
          -translate-x-1/2
          rounded-full
          bg-[#7A273D]/25
          blur-[160px]
        "/>

        <div className="
          absolute bottom-[-150px] right-[-100px]
          h-[400px] w-[400px]
          rounded-full
          bg-amber-400/10
          blur-[140px]
        "/>
      </div>


      <div className="relative mx-auto max-w-6xl px-6 py-6">


        {/* TOP RIGHT NAV */}

        <div className="
          absolute
          right-6
          top-6
          flex
          gap-3
        ">

          <Link
            href="/"
            className="
              flex items-center gap-2
              rounded-full
              border border-white/10
              bg-white/5
              px-4 py-2
              text-sm
              backdrop-blur-xl
              hover:bg-white/10
            "
          >
            <Home size={15}/>
            Home
          </Link>


          <Link
            href="/dashboard"
            className="
              flex items-center gap-2
              rounded-full
              border border-white/10
              bg-white/5
              px-4 py-2
              text-sm
              backdrop-blur-xl
              hover:bg-white/10
            "
          >
            <LayoutDashboard size={15}/>
            Dashboard
          </Link>

        </div>


        {/* HERO */}

        <motion.section
          initial={{opacity:0,y:-15}}
          animate={{opacity:1,y:0}}
          className="
            mx-auto
            max-w-3xl
            pt-14
            text-center
          "
        >

          <div className="
            mx-auto
            flex h-16 w-16
            items-center justify-center
            rounded-2xl
            bg-gradient-to-br
            from-[#7A273D]
            to-amber-400
          ">
            <Sparkles size={28}/>
          </div>


          <div className="
            mt-4
            text-xs
            tracking-[0.5em]
            text-amber-300
          ">
            CHARIS
          </div>

          <br />

          <div className="
            mt-3
            text-3xl
            font-medium
          ">
            Private Luxury Gift Concierge
          </div>
          <br />


          <div className="
            mx-auto
            mt-3
            max-w-xl
            text-sm
            text-gray-400 
          ">
            A personalized AI concierge that understands
            relationships, emotions and unforgettable occasions.
          </div> <br />

        </motion.section>
                {/* CONSULTATION */}

        <motion.section
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="
            mx-auto
            mt-8
            max-w-4xl
            rounded-[30px]
            border border-white/10
            bg-white/[0.04]
            p-6
            backdrop-blur-xl
          "
        >

          {/* Header */}

          <div className="
            flex
            items-center
            gap-3
            border-b
            border-white/10
            pb-4
          ">

            <div className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-amber-400
              text-black

            ">
              <Sparkles size={18}/>
            </div>


            <div>

              <div className="text-lg font-semibold">
                Consultation
              </div>
              

              <div className="text-sm text-gray-400">
                Start your private AI gifting journey.
              </div>
              <br />

            </div>
            

          </div>
          <br />



          {/* Messages */}

          <div className="
            min-h-[260px]
            max-h-[350px]
            overflow-y-auto
            space-y-4
            py-5
          ">

            {
              messages.map((m,index)=>(
                <motion.div
                  key={index}
                  initial={{opacity:0,y:10}}
                  animate={{opacity:1,y:0}}
                  className={`
                    flex
                    ${m.role==="user"
                      ?"justify-end"
                      :"justify-start"
                    }
                  `}
                >

                  <div
                    className={`
                      max-w-[75%]
                      rounded-3xl
                      px-5
                      py-3
                      text-sm
                      whitespace-pre-line
                      shadow-lg

                      ${
                        m.role==="assistant"
                        ?
                        "bg-[#f7f1e8] text-black"
                        :
                        "bg-gradient-to-r from-amber-300 to-yellow-400 text-black"
                      }
                    `}
                  >

                    {
                      m.role==="assistant"
                      ?
                      <TypingMessage text={m.content}/>
                      :
                      m.content
                    }

                  </div>

                </motion.div>
              ))
            }


            {
              loading &&
              <TypingIndicator/>
            }


          </div>



          {/* INPUT */}

          <div className="
            flex
            gap-3
            border-t
            border-white/10
            pt-4
          ">

            <input
              value={input}
              disabled={loading}
              autoFocus
              onChange={(e)=>setInput(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key==="Enter" && !loading){
                  sendMessage();
                }
              }}
              placeholder="Describe the recipient, occasion and personality..."
              className="
                h-12
                flex-1
                rounded-xl
                border
                border-white/10
                bg-black/40
                px-5
                text-sm
                outline-none
                placeholder:text-gray-500
                focus:border-amber-400
              "
            />


            <button
              onClick={sendMessage}
              disabled={loading}
              className="
                flex
                h-10
                w-12
                items-center
                justify-center
                rounded-xl
                bg-amber-400
                text-black
                transition
                hover:scale-105
          
              "
            >
              <SendHorizontal size={20}/>
            </button>


          </div>


        </motion.section>




        {/* FOOTER */}
        <br />
        <footer className="
          mt-5
          text-center
          text-xs
          text-gray-500
        ">
          Powered by

          <span className="
            ml-2
            font-semibold
            text-amber-300
          ">
            CHARIS AI Concierge
          </span>

        </footer>


      </div>

    </main>
  );
}