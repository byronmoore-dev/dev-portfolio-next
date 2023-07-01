import { motion } from "framer-motion";
import PerspectiveCard from "../perspectiveCard";
import Image from "next/image";

const coreAnimate = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { delay: 0.34 },
  },
};

const wave1 = { delay: 0.6, duration: 0.05 };
const wave2 = { delay: 0.65, duration: 0.09 };
const wave3 = { delay: 0.69, duration: 0.12 };

const secondAnimate = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { delay: 1.1 },
  },
};

export default function HeroBlock() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-beige-100 overflow-hidden">
      {/* Links */}
      <motion.div
        initial={{ x: -100, display: "none" }}
        animate={{ x: 0, display: "flex" }}
        transition={{ delay: 1.05 }}
        className="absolute left-6 bottom-20 text-lg font-black text-neutral-700/10 gap-2 flex flex-col"
      >
        <p className="">TW</p>
        <p>IN</p>
        <p>EM</p>
      </motion.div>
      <p className="absolute top-6 right-6 text-beige-500 font-bold text-xl">design.</p>
      <p className="absolute bottom-6 right-6 text-beige-500 font-bold text-xl">creative.</p>
      <p className="absolute bottom-6 left-6 text-beige-500 font-bold text-xl">dev.</p>

      {/* Logo */}
      <motion.div initial="hidden" animate="show" variants={secondAnimate} className="absolute top-4 left-4 w-4 h-8 bg-neutral-700/10 rounded-lg" />

      <PerspectiveCard>
        <motion.div
          variants={coreAnimate}
          initial="hidden"
          animate="show"
          className="relative h-60 rounded-2xl aspect-square bg-beige-300 p-4 shadow-md [&>div]:shadow-md"
        >
          {/*Inside */}
          <motion.section className="z-10 w-full h-full bg-beige-100 rounded-lg flex justify-center items-center overflow-hidden">
            {/*
            <Image
              src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              alt=""
              height="500"
              width="500"
              className="w-full h-full"
            /> */}
          </motion.section>

          {/* Left Side */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            className="absolute bg-beige-300 h-16 aspect-square -left-20 top-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0.5, originY: 0 }}
            className="absolute bg-beige-300 h-16 aspect-square -left-20 top-[calc(50%+5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0.5, originY: 0 }}
            className="absolute bg-beige-300 h-16 aspect-square -left-20 top-[calc(50%-5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -left-32 top-[calc(50%-4rem)] -translate-y-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -left-32 top-[calc(50%+4rem)] -translate-y-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-12 aspect-square -left-36 top-1/2 -translate-y-1/2 rounded-xl"
          />

          {/* Right Side */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0, originY: 0 }}
            className="absolute bg-beige-300 h-16 aspect-square -right-20 top-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0, originY: 0 }}
            className="absolute bg-beige-300 h-16 aspect-square -right-20 top-[calc(50%+5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave1}
            style={{ originX: 0, originY: 0 }}
            className="absolute bg-beige-300 h-16 aspect-square -right-20 top-[calc(50%-5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -right-32 top-[calc(50%-4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -right-32 top-[calc(50%+4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateY: "-50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-12 aspect-square -right-36 top-1/2 rounded-xl"
          />
          {/* Top Side */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave1}
            className="absolute bg-beige-300 h-16 aspect-square -top-20 right-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave1}
            className="absolute bg-beige-300 h-16 aspect-square -top-20 right-[calc(50%+5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave1}
            className="absolute bg-beige-300 h-16 aspect-square -top-20 right-[calc(50%-5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -top-32 right-[calc(50%-4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -top-32 right-[calc(50%+4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-12 aspect-square -top-36 right-1/2 rounded-xl"
          />
          {/* Bottom Side */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-16 aspect-square -bottom-20 right-1/2 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-16 aspect-square -bottom-20 right-[calc(50%+5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-16 aspect-square -bottom-20 right-[calc(50%-5rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-8 aspect-square -bottom-32 right-[calc(50%-4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-8 aspect-square -bottom-32 right-[calc(50%+4rem)] rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, translateX: "50%" }}
            transition={wave2}
            className="absolute bg-beige-300 h-12 aspect-square -bottom-36 right-1/2 rounded-xl"
          />

          {/* Corners Side */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -bottom-11 -right-11 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -top-11 -right-11 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -bottom-11 -left-11 rounded-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={wave3}
            className="absolute bg-beige-300 h-8 aspect-square -top-11 -left-11 rounded-xl"
          />
        </motion.div>
      </PerspectiveCard>
    </main>
  );
}
