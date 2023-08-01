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

// Hero Anims
const heroAnimate = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { delay: 0.34 },
  },
};

export const wave1 = { delay: 0.6, duration: 0.05 };
export const wave2 = { delay: 0.65, duration: 0.09 };
export const wave3 = { delay: 0.69, duration: 0.12 };

export {
  staggerContainer,
  delayedStaggerContainer,
  slowStaggerContainer,
  staggerItem,
  delayedFadeIn,
  heroAnimate,
};
