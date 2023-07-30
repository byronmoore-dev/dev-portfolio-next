const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.04,
    },
  },
};

const slowStaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.08,
    },
  },
};

const delayedStaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.4,
      staggerChildren: 1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const delayedFadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export { staggerContainer, delayedStaggerContainer, slowStaggerContainer, staggerItem, delayedFadeIn };
