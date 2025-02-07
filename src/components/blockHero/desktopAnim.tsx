"use client";

/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { WordCycle } from "./fadeText";
import { heroAnimate, wave1, wave2, wave3 } from "@/assets/animConstants";

export default function DesktopAnim() {
  return (
    <motion.div
      variants={heroAnimate}
      initial="hidden"
      animate="show"
      className="relative mr-[50px] hidden aspect-square h-60 rounded-2xl bg-beige-300 p-4 shadow-md md:flex [&>div]:shadow-md"
    >
      {/*Inside */}
      <motion.section className="z-10 flex h-full w-full flex-col justify-center overflow-hidden rounded-lg bg-white/60 p-4">
        <WordCycle words={["dev.", "creator.", "chef.", "designer.", "indiehacker."]} />
      </motion.section>

      {/* Left Side */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave1}
        className="absolute -left-20 top-1/2 aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave1}
        style={{ originX: 0.5, originY: 0 }}
        className="absolute -left-20 top-[calc(50%+5rem)] aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave1}
        style={{ originX: 0.5, originY: 0 }}
        className="absolute -left-20 top-[calc(50%-5rem)] aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave3}
        className="absolute -left-32 top-[calc(50%-4rem)] aspect-square h-8 -translate-y-1/2 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave3}
        className="absolute -left-32 top-[calc(50%+4rem)] aspect-square h-8 -translate-y-1/2 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave2}
        className="absolute -left-36 top-1/2 aspect-square h-12 -translate-y-1/2 rounded-xl bg-beige-300"
      />

      {/* Right Side */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave1}
        style={{ originX: 0, originY: 0 }}
        className="absolute -right-20 top-1/2 aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave1}
        style={{ originX: 0, originY: 0 }}
        className="absolute -right-20 top-[calc(50%+5rem)] aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave1}
        style={{ originX: 0, originY: 0 }}
        className="absolute -right-20 top-[calc(50%-5rem)] aspect-square h-16 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave3}
        className="absolute -right-32 top-[calc(50%-4rem)] aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave3}
        className="absolute -right-32 top-[calc(50%+4rem)] aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, translateY: "-50%" }}
        transition={wave2}
        className="absolute -right-36 top-1/2 aspect-square h-12 rounded-xl bg-beige-300"
      />
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
        className="absolute -bottom-11 -right-11 aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={wave3}
        className="absolute -right-11 -top-11 aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={wave3}
        className="absolute -bottom-11 -left-11 aspect-square h-8 rounded-xl bg-beige-300"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={wave3}
        className="absolute -left-11 -top-11 aspect-square h-8 rounded-xl bg-beige-300"
      />
    </motion.div>
  );
}
