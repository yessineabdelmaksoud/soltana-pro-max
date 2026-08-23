import { motion } from "framer-motion";

export function Intro({ reducedMotion }) {
  return (
    <motion.div
      className="intro"
      initial={{ y: 0 }}
      exit={{ y: "-105%" }}
      transition={{ duration: reducedMotion ? 0.01 : 0.5, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden="true"
    >
      <motion.div
        className="intro__name"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.28 }}
      >
        <span>SOLTANA</span>
        <span>PRO MAX</span>
      </motion.div>
      <motion.span
        className="intro__yamma"
        initial={{ opacity: 0, scale: 0.75, rotate: -6 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.75, 1.08, 1, 1.18] }}
        transition={{ duration: reducedMotion ? 0 : 0.55, delay: 0.48, times: [0, 0.28, 0.7, 1] }}
      >
        YAMMA!
      </motion.span>
    </motion.div>
  );
}
