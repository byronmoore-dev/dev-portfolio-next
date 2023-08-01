/* eslint-disable react/no-unescaped-entities */
"use client";
import "@/styles/globals.css";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import AnimatedCircles from "@/components/animatedCircles";

const DotAnims = () => {
  return (
    <>
      <div className="absolute bottom-[18%] right-[calc(50%+80px)] flex translate-x-1/2 rotate-45 flex-col gap-4 [&>div]:shadow-md">
        <AnimatedCircles count={5} anim={{ duration: 0.1, delay: 0.4 }} />
      </div>

      <div className="absolute bottom-[18%] left-5 right-[calc(50%-80px)] flex translate-x-1/2 -rotate-45 flex-col gap-4 [&>div]:shadow-md">
        <AnimatedCircles count={5} anim={{ duration: 0.1, delay: 0.4 }} />
      </div>
      <div className="absolute right-[calc(50%-80px)] top-[18%] flex translate-x-1/2 rotate-45 flex-col-reverse gap-4 [&>div]:shadow-md">
        <AnimatedCircles count={5} anim={{ duration: 0.1, delay: 0.4 }} />
      </div>
      <div className="absolute right-[calc(50%+80px)] top-[18%] flex translate-x-1/2 -rotate-45 flex-col-reverse gap-4 [&>div]:shadow-md">
        <AnimatedCircles count={5} anim={{ duration: 0.1, delay: 0.4 }} />
      </div>
    </>
  );
};

const IntroBlock = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="relative h-screen w-full" ref={ref}>
      <motion.div
        initial={{ scale: 0, opacity: 0, translateY: "-50%", translateX: "-50%" }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.25 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-1/2 z-0 h-44 w-[80%] max-w-[900px] rounded-2xl bg-beige-200"
      />

      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 45, translateY: "-50%", translateX: "-50%" }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-1/2 z-0 h-[700px] w-28 rounded-2xl bg-beige-200"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 135, translateY: "-50%", translateX: "-50%" }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-1/2 z-0 h-[700px] w-28 -rotate-45 rounded-2xl bg-beige-200"
      />

      <DotAnims />

      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 ">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.25 }}
          viewport={{ once: true }}
          className="z-20 text-center font-head text-3xl  font-semibold text-beige-800"
        >
          Hi, I'm Byron. Nice to meet you.
        </motion.h1>

        <motion.p
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.25 }}
          viewport={{ once: true }}
          className="z-20 mx-auto mt-4 max-w-xl text-center font-base text-lg font-medium text-beige-800"
        >
          As a developer and designer, I transform concepts into realities. Here are the skills I
          employ to bring ideas to life...
        </motion.p>
      </div>
    </div>
  );
});
IntroBlock.displayName = "IntroBlock";

export default IntroBlock;
