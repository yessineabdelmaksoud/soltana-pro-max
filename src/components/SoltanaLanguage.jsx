import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { phrases } from "../data/phrases";

export function SoltanaLanguage() {
  const [active, setActive] = useState(0);
  const phrase = phrases[active];

  return (
    <section className="language" id="soltana" aria-labelledby="language-title">
      <div className="language__header">
        <span className="micro-label">02 / EL LOU8A</span>
        <h2 id="language-title">Soltana ma tetfassarech.<br /><em>Tet3ach.</em></h2>
      </div>
      <div className="language__stage">
        <div className="language__words" aria-label="Expressions Soltana">
          {phrases.map((item, index) => (
            <button
              type="button"
              key={item.word}
              className={active === index ? "is-active" : ""}
              aria-pressed={active === index}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span>{item.word}
            </button>
          ))}
        </div>
        <div className="language__reaction" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.img
              key={phrase.image}
              src={phrase.image}
              alt=""
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 1.05, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.38 }}
            />
          </AnimatePresence>
          <span>{phrase.tag}</span>
          <strong>{phrase.word}</strong>
        </div>
      </div>
    </section>
  );
}
