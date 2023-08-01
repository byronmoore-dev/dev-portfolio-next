import React from "react";
import { motion } from "framer-motion";

type AnimProps = {
  delay: number;
  duration: number;
};

const AnimatedCircles = ({ count, anim }: { count: number; anim: AnimProps }) => {
  const increment = 0.1;
  let blockTime = { delay: anim.delay, duration: anim.duration };
  const itemCount = Array(count).fill(1);

  const updateDelay = () => {
    blockTime.delay += increment;
    return blockTime.delay;
  };

  return (
    <>
      {itemCount.map((_, index) => {
        return (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: blockTime.duration, delay: updateDelay() }}
            className={`aspect-square h-4 rounded-full bg-beige-300 md:h-6`}
          />
        );
      })}
    </>
  );
};

export default AnimatedCircles;
