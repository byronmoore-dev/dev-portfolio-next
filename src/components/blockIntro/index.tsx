/* eslint-disable react/no-unescaped-entities */
"use client";
import "@/styles/globals.css";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import AnimatedCircles from "@/components/animatedCircles";

const Anim = ({ count, decreateRate }: { count: number; decreateRate: number }) => {
  const increment = 0.03;
  let blockTime = { delay: 0.05, duration: 0.3 };
  const itemCount = Array(count).fill(1);

  const updateDelay = () => {
    blockTime.delay += increment;
    return blockTime.delay;
  };

  return (
    <>
      {itemCount.map((_, index) => {
        const opacityVal = 0.5 - (index * 0.1) / decreateRate;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: opacityVal }}
            viewport={{ once: true }}
            transition={{ duration: blockTime.duration, delay: updateDelay() }}
            className={`aspect-square h-full w-4 rounded-md bg-beige-300 md:h-auto`}
          />
        );
      })}
    </>
  );
};

const DotAnims = () => {
  return (
    <>
      <div className="absolute bottom-[18%] right-[calc(50%+80px)] flex translate-x-1/2 rotate-45 flex-col gap-4 [&>div]:shadow-md">
        <AnimatedCircles count={5} anim={{ duration: 0.1, delay: 0.4 }} />
      </div>

      <div className="absolute bottom-[18%] right-[calc(50%-80px)] flex translate-x-1/2 -rotate-45 flex-col gap-4 [&>div]:shadow-md">
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
    <div className="relative my-20 w-full py-20" ref={ref}>
      <div className="absolute left-1/2 top-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.25 }}
          viewport={{ once: true }}
          className="z-20 px-2 text-center font-head text-2xl font-semibold text-beige-800  md:px-0 md:text-3xl"
        >
          Hi, I'm Byron. I bring ideas to life.
        </motion.h1>

        <motion.h6
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.25 }}
          viewport={{ once: true }}
          className="z-20 mx-auto mt-3 max-w-3xl px-2 text-center font-head text-lg text-beige-800 md:px-0 md:text-2xl md:leading-9"
        >
          I’m a Frontend Engineer who specializes in turning ideas into high-quality, user-friendly
          digital experiences. Whether it’s a web app, mobile platform, or interactive dashboard, I
          focus on delivering clean, scalable, and intuitive interfaces.
        </motion.h6>
      </div>
      <div className="flex w-screen flex-col items-center justify-center gap-2">
        <div className="flex h-20 gap-2">
          <Anim count={40} decreateRate={9} />
        </div>
        <div className="flex h-28 flex-row-reverse gap-2">
          <Anim count={40} decreateRate={9} />
        </div>
        <div className="flex h-20 gap-2">
          <Anim count={40} decreateRate={9} />
        </div>
      </div>
    </div>
  );
});
IntroBlock.displayName = "IntroBlock";

export default IntroBlock;

/*
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.25 }}
          viewport={{ once: true }}
          className="h-4 max-w-[955px] rounded-full bg-gradient-to-r from-beige-300 to-red-300"
        />

        
   soft x or + anim
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 45, translateY: "-50%", translateX: "-50%" }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-1/2 z-0 h-[700px] w-24 rounded-3xl bg-beige-100 brightness-[98%]"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 135, translateY: "-50%", translateX: "-50%" }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-1/2 z-0 h-[700px] w-24  rounded-3xl bg-beige-100 brightness-[98%]"
      />

*/
