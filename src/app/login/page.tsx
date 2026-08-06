"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-pink-500/20 blur-[100px]" />
      </div>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative z-10 
          w-full max-w-lg
          rounded-3xl
          border border-white/10
          bg-white/[0.08]
          p-8 sm:p-12
          shadow-[0_20px_80px_rgba(0,0,0,0.5)]
          backdrop-blur-2xl
        "
      >

        {/* Logo */}
        <div className="flex flex-col items-center gap-4">

          <div
            className="
            flex h-16 w-16 items-center justify-center
            rounded-2xl
            bg-gradient-to-br from-purple-500 to-pink-500
            shadow-lg
            "
          >
            <Sparkles className="text-white" size={30}/>
          </div>


          <h1 className="text-3xl font-semibold tracking-wide text-white">
            CHARIS
          </h1>


          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            AI Concierge
          </p>

        </div>



        {/* Content */}

        <div className="mt-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Welcome Back
          </h2>


          <p className="mt-4 text-gray-400 leading-relaxed">
            Your personal luxury gifting assistant
            <br />
            is waiting for you.
          </p>

        </div>
        <br />




        {/* Login button */}

        <div className="mt-10 flex justify-center">
  <button
    onClick={() =>
      signIn("google", {
        callbackUrl: "/consultation",
      })
    }
    className="
      flex items-center justify-center gap-3
      rounded-2xl
      bg-white
      px-8 py-4
      w-[250px]
      font-medium
      text-black
      transition-all duration-300
      hover:scale-[1.02]
      hover:shadow-xl
    "
  >
    <FcGoogle size={25} />
    Continue with Google
  </button>
</div> <br />



        <p className="mt-8 text-center text-xs text-gray-500">
          By continuing, you agree to our terms and privacy policy.
        </p>


      </motion.div>

    </main>
  );
}