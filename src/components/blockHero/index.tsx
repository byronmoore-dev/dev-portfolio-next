"use client";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import PerspectiveCard from "./perspectiveCard";
import DownArrow from "@/assets/arrow";
import MobileAnim from "./mobileAnim";
import DesktopAnim from "./desktopAnim";
import { wave2 } from "@/assets/animConstants";
import { use100vh } from "react-div-100vh";
import AnimatedCircles from "@/components/animatedCircles";

export default function HeroBlock({ handleClick }: { handleClick: () => void }) {
  const mobileHeight = use100vh();
  return (
    <main
      className={`relative flex w-screen flex-col items-center justify-center`}
      style={{ height: mobileHeight ? mobileHeight : "100vh" }}
    >
      {/* Blurred purple */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute right-20 top-40 aspect-square h-56 rounded-full bg-teal-300/20 blur-[80px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-40 left-20 aspect-square h-56 rounded-full bg-teal-300/20 blur-[80px]"
      />

      <div className="absolute bottom-6 left-6 hidden flex-col-reverse gap-4 md:flex md:flex-row [&>div]:shadow-md">
        <AnimatedCircles count={5} anim={wave2} />
      </div>
      <div className="absolute bottom-6 right-6 hidden flex-col-reverse gap-4 md:flex md:flex-row-reverse [&>div]:shadow-md">
        <AnimatedCircles count={5} anim={wave2} />
      </div>

      <motion.div
        initial={{ scale: 0, y: 0, translateX: "-50%" }}
        animate={{ scale: 1, translateX: "-50%" }}
        transition={{ duration: 0.15, delay: 1 }}
        onClick={() => handleClick()}
        onTap={() => handleClick()}
        style={{ WebkitTapHighlightColor: "transparent" }}
        className={`absolute bottom-4 left-1/2 z-10 aspect-square h-8 rounded-xl`}
      >
        <DownArrow className="animate-bounce cursor-pointer fill-beige-300/90 brightness-75" />
      </motion.div>

      <PerspectiveCard>
        <MobileAnim />
        <DesktopAnim />
      </PerspectiveCard>
    </main>
  );
}
