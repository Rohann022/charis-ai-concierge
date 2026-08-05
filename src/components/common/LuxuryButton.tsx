"use client";

import { motion } from "framer-motion";

interface Props{
    title:string;
}

export default function LuxuryButton({title}:Props){

    return(

        <motion.button

        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}

        className="bg-[#5B1E2D] text-white px-8 py-3 rounded-full transition-all hover:bg-[#3B121C]"

        >

            {title}

        </motion.button>

    )

}