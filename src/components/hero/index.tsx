/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import PerspectiveCard from "../perspectiveCard";
import { useState } from "react";

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

function CornerBlocks() {
  const increment = 0.1;
  let blockTime = { delay: wave2.delay, duration: wave2.duration };
  const itemCount = Array(5).fill(1);

  const updateDelay = () => {
    blockTime.delay += increment;
    return blockTime.delay;
  };

  return (
    <>
      {itemCount.map((_, index) => {
        return (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: blockTime.duration, delay: updateDelay() }}
            className={`bg-beige-300 h-6 aspect-square rounded-full`}
          />
        );
      })}
    </>
  );
}

export default function HeroBlock() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center">
      {/* 
      // Links 
      <motion.div
        initial={{ x: -100, display: "none" }}
        animate={{ x: 0, display: "flex" }}
        transition={{ delay: 1.05 }}
        className="absolute left-6 bottom-20 text-lg font-black text-neutral-700/20 gap-2 flex flex-col"
      >
        <p className="">IN</p>
        <p>LI</p>
        <p>GH</p>
      </motion.div>
      */}

      {/*
        // Old Layout
        <p className="absolute top-6 right-6 text-beige-500 font-bold text-xl">dev.</p>
        <p className="absolute bottom-6 right-6 text-beige-500 font-bold text-xl">creator.</p>
        <p className="absolute bottom-6 left-6 text-beige-500 font-bold text-xl">designer.</p>
      */}

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

      <div className="absolute bottom-6 left-6 flex gap-4 [&>div]:shadow-md">
        <CornerBlocks />
      </div>
      <div className="absolute top-6 right-6 flex gap-4 flex-row-reverse [&>div]:shadow-md">
        <CornerBlocks />
      </div>

      <motion.div
        initial={{ scale: 0, y: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.15, delay: 1 }}
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-neutral-300 h-8 aspect-square rounded-xl`}
      />

      <PerspectiveCard>
        <motion.div
          variants={coreAnimate}
          initial="hidden"
          animate="show"
          className="relative h-60 rounded-2xl aspect-square bg-beige-300 mr-[18px] p-4 shadow-md [&>div]:shadow-md"
        >
          {/*Inside */}
          <motion.section className="z-10 w-full h-full bg-beige-100 rounded-lg flex flex-col justify-center overflow-hidden p-4">
            <p className="font-bold text-neutral-600 xl:text-xl -mb-2">Hey, I'm Byron</p>
            <p className="text-neutral-600 font-medium text-xl -mb-2 mt-auto">dev.</p>
            <p className="text-neutral-600 font-medium text-xl -mb-2">creator.</p>
            <p className="text-neutral-600 font-medium text-xl">designer.</p>
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
            className="absolute bg-beige-300 h-16 aspect-square -left-20 top-[calc(50%+5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0.5, originY: 0 }}
            className="absolute bg-beige-300 h-16 aspect-square -left-20 top-[calc(50%-5rem)] rounded-xl"
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
            className="absolute bg-beige-300 h-16 aspect-square -right-20 top-[calc(50%+5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0, originY: 0 }}
            className="absolute bg-beige-300 h-16 aspect-square -right-20 top-[calc(50%-5rem)] rounded-xl"
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
            className="absolute bg-beige-300 h-8 aspect-square -bottom-11 -right-11 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -top-11 -right-11 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -bottom-11 -left-11 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -top-11 -left-11 rounded-xl"
          />
        </motion.div>
      </PerspectiveCard>
      <div className="animate-bounce absolute bottom-20 w-0 h-0 border-l-4 border-r-4 border-transparent border-b-8 border-black rounded-bl-2xl rounded-br-2xl"></div>
    </main>
  );
}
