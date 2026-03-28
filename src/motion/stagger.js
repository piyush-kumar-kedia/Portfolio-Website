export const spring = {
  type: "spring",
  stiffness: 90,
  damping: 22,
  mass: 0.85,
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
};
