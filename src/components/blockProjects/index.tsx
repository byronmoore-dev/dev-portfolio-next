/* eslint-disable react/no-unescaped-entities */
import React, { forwardRef, useState } from "react";
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
      className={`relative mx-auto flex aspect-auto w-[90%] cursor-default flex-col items-center justify-center rounded-2xl border-[1.5px] border-beige-700/40 bg-white p-10 shadow-md duration-200 hover:scale-[101%] md:aspect-[9/5] md:w-full`}
    >
      <h4 className="text-center font-head text-2xl font-medium text-black/80">{project.name}</h4>
      <p className="mb-8 mt-2 text-center font-base text-sm leading-5 text-black">{project.desc}</p>
      <motion.div
        animate={{ y: isHover ? -10 : 0, opacity: isHover ? 0 : 1 }}
        className="absolute bottom-3"
      >
        <p className="bg-gray-50 px-2 py-1 font-base text-sm font-light">{project.status}</p>
      </motion.div>
      <motion.div
        animate={{ y: !isHover ? 10 : 0, opacity: !isHover ? 0 : 1 }}
        className="absolute bottom-5 flex gap-3"
      >
        {project.url && (
          <a
            href={project.url}
            target="new_blank"
            className="z-10 rounded bg-beige-300 px-3 py-1 font-base text-xs font-bold text-beige-700 duration-200 hover:bg-beige-700 hover:text-white"
          >
            site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="new_blank"
            className="z-10 rounded bg-beige-300 px-3 py-1 font-base text-xs font-bold text-beige-700 duration-200 hover:bg-beige-700 hover:text-white"
          >
            github
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

const ProjectsBlock = forwardRef<HTMLDivElement>((_, ref) => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="mx-auto flex w-full flex-col justify-between gap-8 bg-white/90 pb-60" ref={ref}>
      <InView
        as="div"
        onChange={(inView, entry) => {
          inView ? setEntered(true) : null;
        }}
        root={null}
        rootMargin="0px"
        threshold={0.2}
      >
        <div className="relative z-0 flex w-full flex-col justify-center bg-beige-200/80 pb-48 pt-24">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.25 }}
            viewport={{ once: true }}
            className="w-full text-center font-head text-2xl font-semibold  text-black md:text-3xl"
          >
            My Startup Projects
          </motion.h1>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.25 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-xl text-center font-base text-lg font-medium text-black/80"
          >
            I really love making digital stuff. From the first design sketch to the thrill of going
            live, it's all a blast. Below are some of my favorites!
          </motion.p>

          <div className="absolute left-10 top-10 h-20 w-2 rounded-md bg-beige-300" />
          <div className="absolute bottom-10 right-10 h-20 w-2 rounded-md bg-beige-300" />
        </div>
      </InView>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        className="z-10 mx-auto -mt-40 grid w-full max-w-[1300px] grid-cols-1 gap-6 md:grid-cols-3"
      >
        {data.projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} i={index} view={entered} />
        ))}
      </motion.div>
    </div>
  );
});

ProjectsBlock.displayName = "ProjectsBlock";

export default ProjectsBlock;
