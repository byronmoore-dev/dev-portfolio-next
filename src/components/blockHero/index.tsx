"use client";

/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import PerspectiveCard from "../perspectiveCard";
import { WordCycle } from "./fadeText";
import DownArrow from "@/assets/arrow";
import CircleAnim from "../AnimCircles";

const coreAnimate = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { delay: 0.34 },
  },
};

const wave1 = { delay: 0.6, duration: 0.05 };
const wave2 = { delay: 0.65, duration: 0.09 };
const wave3 = { delay: 0.69, duration: 0.12 };

export default function HeroBlock({ handleClick }: { handleClick: () => void }) {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center">
      {/*Noise Filter */}
      <div className="fixed z-10 opacity-50 left-0 top-0 noise w-full h-screen pointer-events-none bg-white/10" />

      {/* Blurred purple */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bg-teal-300/20 h-56 aspect-square right-20 top-40 rounded-full blur-[80px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bg-teal-300/20 h-56 aspect-square left-20 bottom-40 rounded-full blur-[80px]"
      />

      <div className="absolute top-6 px-8 flex w-full gap-8 ">
        <div className="flex flex-col">
          <div className="mb-1 h-1 w-48 bg-beige-300 rounded-xl" />
          <p className="font-medium text-beige-300 brightness-[60%] text-sm font-base">Byron Moore</p>
        </div>
        <div className="flex flex-col ml-auto">
          <div className="mb-1 h-1 w-48 bg-beige-300 rounded-xl" />
          <p className="font-medium text-beige-300 brightness-[60%] text-sm font-base">Projects</p>
        </div>
        <div className="flex flex-col">
          <div className="mb-1 h-1 w-48 bg-beige-300 rounded-xl" />
          <p className="font-medium text-beige-300 brightness-[60%] text-sm font-base">Photography</p>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 flex md:flex-row flex-col-reverse gap-4 [&>div]:shadow-md">
        <CircleAnim count={5} anim={wave2} />
      </div>
      <div className="absolute bottom-6 right-6 flex md:flex-row-reverse flex-col-reverse gap-4 [&>div]:shadow-md">
        <CircleAnim count={5} anim={wave2} />
      </div>

      <motion.div
        initial={{ scale: 0, y: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.15, delay: 1 }}
        onClick={() => handleClick()}
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 h-8 aspect-square rounded-xl`}
      >
        <DownArrow className="fill-beige-300/90 brightness-75 animate-bounce cursor-pointer" />
      </motion.div>

      <PerspectiveCard>
        <motion.div
          variants={coreAnimate}
          initial="hidden"
          animate="show"
          className="relative h-20 md:h-60 rounded-2xl aspect-square bg-beige-300 mr-[52px]  md:mr-[18px] p-4 shadow-md [&>div]:shadow-md"
        >
          {/*Inside */}
          <motion.section className="z-10 w-full h-full bg-white/60 rounded-lg flex flex-col justify-center overflow-hidden p-4">
            <WordCycle words={["dev.", "creator.", "innovator.", "designer."]} />
          </motion.section>

          {/* Left Side */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            className="absolute bg-beige-300 h-16 aspect-square -left-20 top-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0.5, originY: 0 }}
            className="absolute hidden md:block bg-beige-300 h-16 aspect-square -left-20 top-[calc(50%+5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0.5, originY: 0 }}
            className="absolute hidden md:block bg-beige-300 h-16 aspect-square -left-20 top-[calc(50%-5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -left-32 top-[calc(50%-4rem)] -translate-y-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -left-32 top-[calc(50%+4rem)] -translate-y-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-12 aspect-square -left-36 top-1/2 -translate-y-1/2 rounded-xl"
          />

          {/* Right Side */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0, originY: 0 }}
            className="absolute bg-beige-300 h-16 aspect-square -right-20 top-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0, originY: 0 }}
            className="absolute hidden md:block bg-beige-300 h-16 aspect-square -right-20 top-[calc(50%+5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0, originY: 0 }}
            className="absolute hidden md:block bg-beige-300 h-16 aspect-square -right-20 top-[calc(50%-5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -right-32 top-[calc(50%-4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -right-32 top-[calc(50%+4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-12 aspect-square -right-36 top-1/2 rounded-xl"
          />
          {/* Top Side */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave1}
            className="absolute bg-beige-300 h-16 aspect-square -top-20 right-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave1}
            className="absolute bg-beige-300 h-16 aspect-square -top-20 right-[calc(50%+5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave1}
            className="absolute bg-beige-300 h-16 aspect-square -top-20 right-[calc(50%-5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -top-32 right-[calc(50%-4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -top-32 right-[calc(50%+4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-12 aspect-square -top-36 right-1/2 rounded-xl"
          />
          {/* Bottom Side */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-16 aspect-square -bottom-20 right-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-16 aspect-square -bottom-20 right-[calc(50%+5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-16 aspect-square -bottom-20 right-[calc(50%-5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-8 aspect-square -bottom-32 right-[calc(50%-4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-8 aspect-square -bottom-32 right-[calc(50%+4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-12 aspect-square -bottom-36 right-1/2 rounded-xl"
          />

          {/* Corners Side */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={wave3}
            className="absolute bg-beige-100 md:bg-beige-300 h-8 aspect-square -bottom-16 -right-14 md:-bottom-11 md:-right-11 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={wave3}
            className="absolute bg-beige-100 md:bg-beige-300 h-8 aspect-square -top-16 -right-14 md:-top-11 md:-right-11 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={wave3}
            className="absolute bg-beige-100 md:bg-beige-300 h-8 aspect-square -bottom-16 -left-14 md:-bottom-11 md:-left-11 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={wave3}
            className="absolute bg-beige-100 md:bg-beige-300 h-8 aspect-square -top-16 -left-14 md:-top-11 md:-left-11 rounded-xl"
          />
        </motion.div>
      </PerspectiveCard>
      <div className="animate-bounce absolute bottom-20 w-0 h-0 border-l-4 border-r-4 border-transparent border-b-8 border-black rounded-bl-2xl rounded-br-2xl"></div>
    </main>
  );
}
