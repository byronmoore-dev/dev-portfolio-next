/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { forwardRef, useState, Ref } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import data from "@/assets/data";

const SkillCard = ({ skill, i }: { skill: string; i: number }) => {
  const [entered, setEntered] = useState(false);
  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        inView ? setEntered(true) : null;
      }}
      root={null}
      rootMargin="0px"
      threshold={0.8}
    >
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0, transition: { delay: 0.5 + i * 0.05 } }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center shadow-md w-full aspect-[9/5] p-2 bg-beige-200/50 rounded-2xl border-[1.5px] border-beige-300/80"
      >
        <p className="text-beige-800 text-sm font-bold text-center font-base leading-5">{skill}</p>
      </motion.li>
    </InView>
  );
};

const SkillsBlock = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="w-full pt-32 pb-48" ref={ref}>
      <div className="w-full relative max-w-3xl mx-auto rounded-2xl px-20 py-4 mb-4 flex flex-col justify-center  z-0">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.25 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-beige-800  text-center font-head"
        >
          Hi, I'm Byron. Nice to meet you.
        </motion.h1>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.25 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto text-beige-800 text-lg mt-4 font-base font-medium"
        >
          As a developer and designer, I transform concepts into realities. Here are the skills I employ to bring ideas to life...
        </motion.p>
      </div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 px-6 max-w-md sm:max-w-xl sm:grid-cols-3 lg:grid-cols-3 lg:max-w-[800px] mx-auto gap-8"
      >
        {data.skills.map((skill, index) => (
          <SkillCard key={skill} skill={skill} i={index} />
        ))}
      </motion.ul>
    </div>
  );
});

SkillsBlock.displayName = "SkillsBlock";

export default SkillsBlock;
