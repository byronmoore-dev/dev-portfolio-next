/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { forwardRef, useState, Ref } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import data from "@/assets/data";
import Image from "next/image";

type SkillProps = {
  name: string;
  logo: string;
  size: "xs" | "sm" | "md" | "lg";
};

const SkillCard = ({ skill, i }: { skill: SkillProps; i: number }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
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
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative flex flex-col justify-center items-center w-full aspect-square md:aspect-[9/3]"
      >
        <motion.div
          animate={{ y: isHover ? -10 : 0, opacity: isHover ? 0 : 1, transition: { delay: isHover ? 0 : 0.15, duration: 0.2 } }}
          className="absolute h-full w-full flex justify-center items-center"
        >
          <Image
            src={skill.logo}
            height="100"
            width="100"
            alt={`${skill.name} logo`}
            className={`${skill.size == "xs" ? "w-36 md:w-32 h-auto" : ""} ${skill.size == "sm" ? "w-18 md:w-16 h-auto" : ""} ${
              skill.size == "md" ? "w-14 md:w-[52px] h-auto" : ""
            } ${skill.size == "lg" ? "w-12 md:w-9 h-auto" : ""}`}
          />
        </motion.div>
        <motion.div
          animate={{ y: !isHover ? -10 : 0, opacity: !isHover ? 0 : 1, transition: { delay: !isHover ? 0 : 0.15, duration: 0.2 } }}
          className="absolute h-full w-full flex justify-center items-center"
        >
          <p className="text-beige-800 text-lg font-medium text-center font-base leading-5">{skill.name}</p>
        </motion.div>
      </motion.li>
    </InView>
  );
};

const SkillsBlock = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="w-full pt-32 pb-48" ref={ref}>
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.25 }}
        viewport={{ once: true }}
        className="w-full text-3xl font-semibold text-beige-800 text-center font-head mb-10"
      >
        Here's how I cook up products.
      </motion.h1>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 px-6 sm:max-w-xl sm:grid-cols-3 lg:grid-cols-3 lg:max-w-[800px] max-w-[85%] mx-auto md:gap-8"
      >
        {data.skills.map((skill: any, index: number) => (
          <SkillCard key={skill.name} skill={skill} i={index} />
        ))}
      </motion.ul>
    </div>
  );
});

SkillsBlock.displayName = "SkillsBlock";

export default SkillsBlock;
