import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type WordCycleProps = {
  words: string[];
};

export const WordCycle: React.FC<WordCycleProps> = ({ words }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <motion.p
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="w-full text-center font-semibold text-3xl text-beige-300 brightness-75 font-head"
    >
      {words[index]}
    </motion.p>
  );
};
