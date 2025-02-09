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
        className="relative flex aspect-square w-full cursor-default flex-col items-center justify-center md:aspect-[9/3]"
      >
        <motion.div
          animate={{
            y: isHover ? -10 : 0,
            opacity: isHover ? 0 : 1,
            transition: { delay: isHover ? 0 : 0.15, duration: 0.2 },
          }}
          className="absolute flex h-full w-full items-center justify-center"
        >
          <Image
            src={skill.logo}
            height="100"
            width="100"
            alt={`${skill.name} logo`}
            className={`${skill.size == "xs" ? "h-auto w-36 md:w-32" : ""} ${
              skill.size == "sm" ? "w-18 h-auto md:w-16" : ""
            } ${skill.size == "md" ? "h-auto w-14 md:w-[52px]" : ""} ${
              skill.size == "lg" ? "h-auto w-12 md:w-9" : ""
            }`}
          />
        </motion.div>
        <motion.div
          animate={{
            y: !isHover ? -10 : 0,
            opacity: !isHover ? 0 : 1,
            transition: { delay: !isHover ? 0 : 0.15, duration: 0.2 },
          }}
          className="absolute flex h-full w-full items-center justify-center"
        >
          <p className="cursor-default text-center  font-head text-xl font-semibold leading-5 text-beige-300 brightness-75">
            {skill.name}
          </p>
        </motion.div>
      </motion.li>
    </InView>
  );
};

const SkillsBlock = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="w-full pb-8 pt-10 xl:pb-40" ref={ref}>
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.25 }}
        viewport={{ once: true }}
        className="mb-10 w-full cursor-default select-none text-center font-head text-3xl font-semibold text-beige-800"
      >
        Tools I use to cook.
      </motion.h1>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-[85%] grid-cols-2 px-6 sm:max-w-xl sm:grid-cols-3 md:gap-8 lg:max-w-[800px] lg:grid-cols-3"
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
