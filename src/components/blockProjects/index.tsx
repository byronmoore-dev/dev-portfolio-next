/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import data from "@/assets/data.js";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const ProjectCard = ({ project, i, view }: { project: any; i: number; view: boolean }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleSetHover = () => {
    if (!project.url && !project.github) return;

    setIsHover(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: view ? 1 : 0, transition: { delay: 0.5 + i * 0.05 } }}
      viewport={{ once: true }}
      onMouseEnter={() => handleSetHover()}
      onMouseLeave={() => setIsHover(false)}
      className={`relative cursor-default hover:scale-[101%] flex flex-col justify-center items-center shadow-md w-[90%] mx-auto md:w-full aspect-auto md:aspect-[9/5] p-10 rounded-2xl bg-white border-[1.5px] duration-200 border-beige-700/40`}
    >
      <h4 className="text-2xl font-medium text-black/80 font-head text-center">{project.name}</h4>
      <p className="text-black text-sm mb-8 leading-5 mt-2 text-center font-base">{project.desc}</p>
      <motion.div animate={{ y: isHover ? -10 : 0, opacity: isHover ? 0 : 1 }} className="absolute bottom-3">
        <p className="font-base font-light px-2 py-1 text-sm bg-gray-50">{project.status}</p>
      </motion.div>
      <motion.div animate={{ y: !isHover ? 10 : 0, opacity: !isHover ? 0 : 1 }} className="absolute bottom-5 flex gap-3">
        {project.url && (
          <a
            href={project.url}
            target="new_blank"
            className="z-10 px-3 py-1 bg-beige-300 text-beige-700 font-bold rounded font-base text-xs hover:bg-beige-700 hover:text-white duration-200"
          >
            site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="new_blank"
            className="z-10 px-3 py-1 bg-beige-300 text-beige-700 font-bold rounded font-base text-xs hover:bg-beige-700 hover:text-white duration-200"
          >
            github
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsBlock({ ref }: { ref: React.RefObject<HTMLDivElement> }) {
  const [entered, setEntered] = useState(false);

  return (
    <div className="flex flex-col w-full justify-between mx-auto gap-8 pb-60 bg-white/90" ref={ref}>
      <InView
        as="div"
        onChange={(inView, entry) => {
          inView ? setEntered(true) : null;
        }}
        root={null}
        rootMargin="0px"
        threshold={0.2}
      >
        <div className="relative w-full pt-24 pb-48 flex flex-col justify-center bg-beige-300/80 z-0">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.25 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl w-full font-semibold text-black  text-center font-head"
          >
            My Startup Projects
          </motion.h1>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.25 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto text-black/80 text-lg mt-4 font-base font-medium"
          >
            I really love making digital stuff. From the first design sketch to the thrill of going live, it's all a blast. Below are some of my
            favorites!
          </motion.p>

          <div className="w-2 h-20 rounded-md absolute left-10 top-10 bg-beige-300" />
          <div className="w-2 h-20 rounded-md absolute right-10 bottom-10 bg-beige-300" />
        </div>
      </InView>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 w-full mx-auto gap-6 max-w-[1300px] -mt-40 z-10"
      >
        {data.projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} i={index} view={entered} />
        ))}
      </motion.div>
    </div>
  );
}
