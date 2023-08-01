/* eslint-disable react/no-unescaped-entities */
"use client";
import "@/styles/globals.css";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import CircleAnim from "../AnimCircles";

const DotAnims = () => {
  return (
    <>
      <div className="absolute bottom-[18%] rotate-45 right-[calc(50%+80px)] translate-x-1/2 flex flex-col gap-4 [&>div]:shadow-md">
        <CircleAnim count={5} anim={{ duration: 0.1, delay: 0.4 }} />
      </div>
      <div className="absolute bottom-[18%] -rotate-45 right-[calc(50%-80px)] translate-x-1/2 flex flex-col gap-4 [&>div]:shadow-md">
        <CircleAnim count={5} anim={{ duration: 0.1, delay: 0.4 }} />
      </div>
      <div className="absolute top-[18%] rotate-45 right-[calc(50%-80px)] translate-x-1/2 flex gap-4 [&>div]:shadow-md flex-col-reverse">
        <CircleAnim count={5} anim={{ duration: 0.1, delay: 0.4 }} />
      </div>
      <div className="absolute top-[18%] -rotate-45 right-[calc(50%+80px)] translate-x-1/2 flex flex-col-reverse gap-4 [&>div]:shadow-md">
        <CircleAnim count={5} anim={{ duration: 0.1, delay: 0.4 }} />
      </div>
    </>
  );
};

const IntroBlock = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="h-screen relative w-full" ref={ref}>
      <motion.div
        initial={{ scale: 0, opacity: 0, translateY: "-50%", translateX: "-50%" }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.25 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-1/2 z-0 w-[80%] max-w-[900px] h-44 bg-beige-200 rounded-2xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 45, translateY: "-50%", translateX: "-50%" }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        viewport={{ once: true }}
        className="absolute z-0 h-[700px] top-1/2 left-1/2 w-28 bg-beige-200 rounded-2xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 135, translateY: "-50%", translateX: "-50%" }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-1/2 z-0 h-[700px] w-28 bg-beige-200 rounded-2xl -rotate-45"
      />

      <DotAnims />

      <div className="absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.25 }}
          viewport={{ once: true }}
          className="z-20 text-3xl font-semibold text-beige-800  text-center font-head"
        >
          Hi, I'm Byron. Nice to meet you.
        </motion.h1>

        <motion.p
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.25 }}
          viewport={{ once: true }}
          className="z-20 text-center max-w-xl mx-auto text-beige-800 text-lg mt-4 font-base font-medium"
        >
          As a developer and designer, I transform concepts into realities. Here are the skills I employ to bring ideas to life...
        </motion.p>
      </div>
    </div>
  );
});
IntroBlock.displayName = "IntroBlock";

export default IntroBlock;
