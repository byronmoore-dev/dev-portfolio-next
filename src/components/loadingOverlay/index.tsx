"use client";
import classNames from "classnames";
import styles from "./styles.module.css";
import { useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import HeartSVG from "@/assets/heart";

const LoadingOverlay = () => {
  const [scope, animate] = useAnimate();

  return (
    <div className="absolute top-0 left-0 z-20 w-full h-full flex flex-wrap overflow-hidden">
      <motion.div initial={{ x: "-100%" }} animate={{ x: 0, transition: { duration: 1 } }} className="h-1/2 w-1/2 bg-neutral-900 flex items-end">
        <div className="w-full h-8 flex flex-col overflow-hidden">
          <div className="w-full h-1/2 flex">
            <div className="bg-neutral-50 w-1/4"></div>
            <div className="bg-neutral-800 w-1/4"></div>
            <div className="bg-neutral-50 w-1/4"></div>
            <div className="bg-neutral-800 w-1/4"></div>
          </div>
          <div className="w-full h-1/2 flex">
            <div className="bg-neutral-800 w-1/4"></div>
            <div className="bg-neutral-50 w-1/4"></div>
            <div className="bg-neutral-800 w-1/4"></div>
            <div className="bg-neutral-50 w-1/4"></div>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ y: "-100%" }} animate={{ y: 0, transition: { duration: 1 } }} className="h-1/2 w-1/2 bg-neutral-900">
        <div className="w-8 h-full flex overflow-hidden">
          <div className="w-1/2 h-full flex flex-col">
            <div className="bg-neutral-50 h-1/4"></div>
            <div className="bg-neutral-800 h-1/4"></div>
            <div className="bg-neutral-50 h-1/4"></div>
            <div className="bg-neutral-800 h-1/4"></div>
          </div>
          <div className="w-1/2 h-full flex-col flex">
            <div className="bg-neutral-800 h-1/4"></div>
            <div className="bg-neutral-50 h-1/4"></div>
            <div className="bg-neutral-800 h-1/4"></div>
            <div className="bg-neutral-50 h-1/4"></div>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ y: "100%" }} animate={{ y: 0, transition: { duration: 1 } }} className="h-1/2 w-1/2 bg-neutral-900 flex justify-end">
        <div className="w-8 h-full flex overflow-hidden">
          <div className="w-1/2 h-full flex flex-col">
            <div className="bg-neutral-50 h-1/4"></div>
            <div className="bg-neutral-800 h-1/4"></div>
            <div className="bg-neutral-50 h-1/4"></div>
            <div className="bg-neutral-800 h-1/4"></div>
          </div>
          <div className="w-1/2 h-full flex-col flex">
            <div className="bg-neutral-800 h-1/4"></div>
            <div className="bg-neutral-50 h-1/4"></div>
            <div className="bg-neutral-800 h-1/4"></div>
            <div className="bg-neutral-50 h-1/4"></div>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ x: "100%" }} animate={{ x: 0, transition: { duration: 1 } }} className="h-1/2 w-1/2 bg-neutral-900">
        <div className="w-full h-8 flex flex-col overflow-hidden">
          <div className="relative w-full h-1/2 flex">
            <div className="w-full min-w-full flex">
              <div className="bg-neutral-50 w-1/4"></div>
              <div className="bg-neutral-800 w-1/4"></div>
              <div className="bg-neutral-50 w-1/4"></div>
              <div className="bg-neutral-800 w-1/4"></div>
            </div>
          </div>
          <div className="w-full h-1/2 bg-neutral-800 flex">
            <div className="bg-neutral-800 w-1/4"></div>
            <div className="bg-neutral-50 w-1/4"></div>
            <div className="bg-neutral-800 w-1/4"></div>
            <div className="bg-neutral-50 w-1/4"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0, transition: { delay: 1.2 } }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <HeartSVG className="fill-red-800 h-60 aspect-square" />
      </motion.div>
    </div>
  );
};

export default LoadingOverlay;
