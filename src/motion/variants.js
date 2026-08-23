export const easeOutExpo = [0.16, 1, 0.3, 1];

export const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

export const clipReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: 20 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

export const viewport = { once: true, amount: 0.18 };
