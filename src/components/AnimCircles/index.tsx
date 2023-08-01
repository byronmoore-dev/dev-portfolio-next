import React from "react";
import { motion } from "framer-motion";

type AnimProps = {
  delay: number;
  duration: number;
};

function CircleAnim({ count, anim }: { count: number; anim: AnimProps }) {
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
            className={`bg-beige-300 h-6 aspect-square rounded-full`}
          />
        );
      })}
    </>
  );
}

export default CircleAnim;
