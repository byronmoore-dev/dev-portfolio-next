import React from "react";
import { motion } from "framer-motion";
const Anim = () => {
  const increment = 0.1;
  let blockTime = { delay: 0.1, duration: 0.6 };
  const itemCount = Array(14).fill(1);

  const updateDelay = () => {
    blockTime.delay += increment;
    return blockTime.delay;
  };

  return (
    <>
      {itemCount.map((_, index) => {
        const opacityVal = 0.5 - (index * 0.1) / 5;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: opacityVal }}
            viewport={{ once: true }}
            transition={{ duration: blockTime.duration, delay: updateDelay() }}
            className={`aspect-square h-auto w-full rounded-md bg-beige-300 md:h-auto`}
          />
        );
      })}
    </>
  );
};

const OpacityGrid = () => {
  return (
    <>
      <div className="grid h-screen grid-cols-8 gap-2">
        <div className="flex h-screen flex-col gap-2">
          <Anim />
        </div>
        <div className="flex h-screen flex-col  gap-2">
          <Anim />
        </div>
        <div className="flex h-screen flex-col  gap-2">
          <Anim />
        </div>
        <div className="flex h-screen flex-col gap-2">
          <Anim />
        </div>
        <div className="flex h-screen flex-col gap-2">
          <Anim />
        </div>
        <div className="flex h-screen flex-col gap-2">
          <Anim />
        </div>
        <div className="flex h-screen flex-col gap-2">
          <Anim />
        </div>
        <div className="flex h-screen flex-col gap-2">
          <Anim />
        </div>
      </div>
    </>
  );
};

export default OpacityGrid;
