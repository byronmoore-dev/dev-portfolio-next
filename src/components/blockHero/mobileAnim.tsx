"use client";

/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { WordCycle } from "./fadeText";
import { heroAnimate, wave1, wave2, wave3 } from "@/assets/animConstants";

export default function MobileAnim() {
  return (
    <motion.div
      variants={heroAnimate}
      initial="hidden"
      animate="show"
      className="relative mb-20 mr-[48px] flex h-24 w-4/5 rounded-2xl bg-beige-300 p-4 shadow-md md:hidden [&>div]:shadow-md"
    >
      {/*Inside */}
      <motion.section className="z-10 flex h-full w-full flex-col justify-center overflow-hidden rounded-lg bg-white/60 p-4">
        <WordCycle words={["dev.", "creator.", "innovator.", "designer.", "indiehacker."]} />
      </motion.section>

      {/* Top Side */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave1}
        className="absolute -top-20 right-1/2 aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave1}
        className="absolute -top-20 right-[calc(50%+5rem)] aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave1}
        className="absolute -top-20 right-[calc(50%-5rem)] aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave3}
        className="absolute -top-32 right-[calc(50%-4rem)] aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave3}
        className="absolute -top-32 right-[calc(50%+4rem)] aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave2}
        className="absolute -top-36 right-1/2 aspect-square h-12 rounded-xl bg-beige-300"
      />
      {/* Bottom Side */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave2}
        className="absolute -bottom-20 right-1/2 aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave2}
        className="absolute -bottom-20 right-[calc(50%+5rem)] aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave2}
        className="absolute -bottom-20 right-[calc(50%-5rem)] aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave2}
        className="absolute -bottom-32 right-[calc(50%-4rem)] aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave2}
        className="absolute -bottom-32 right-[calc(50%+4rem)] aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateX: "50%" }}
        transition={wave2}
        className="absolute -bottom-36 right-1/2 aspect-square h-12 rounded-xl bg-beige-300"
      />

      {/* Corners Side */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={wave3}
        className="absolute -bottom-12 right-1 aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={wave3}
        className="absolute -top-12 right-1 aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={wave3}
        className="absolute -bottom-12 left-1 aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={wave3}
        className="absolute -top-12 left-1 aspect-square h-8 rounded-xl bg-beige-300"
      />
    </motion.div>
  );
}
