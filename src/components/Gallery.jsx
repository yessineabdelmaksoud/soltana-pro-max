import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icons";

const gallery = [
  ["/assets/image.png", "Soupe tunisienne rouge servie avec du pain"],
  ["/assets/image copy 16.png", "Plat tunisien vert servi avec viande et piment"],
  ["/assets/image copy 9.png", "Ragoût tunisien aux haricots, viande et piments rouges"],
  ["/assets/food6.jpg", "Slata méchouia garnie de thon, olives et œufs"],
  ["/assets/image copy 13.png", "Plat tunisien en sauce aux légumes"],
  ["/assets/image copy 18.png", "Plat traditionnel tunisien en sauce"],
  ["/assets/food2.jpg", "Poulet tunisien en sauce aux petits pois"],
];

export function Gallery() {
  const [selected, setSelected] = useState(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (selected !== null) closeRef.current?.focus();
    const onKey = (event) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section className="gallery section" id="gallery" aria-labelledby="gallery-title">
      <div className="gallery__heading">
        <span className="micro-label">04 / MEN EL CUISINE</span>
        <h2 id="gallery-title">El makla<br /><em>ta7ki.</em></h2>
        <p>Real images. Real sauce. Zoom if you’re brave.</p>
      </div>
      <div className="gallery__grid">
        {gallery.map(([src, alt], index) => (
          <motion.button
            className={`gallery__item gallery__item--${index + 1}`}
            type="button"
            key={src}
            onClick={() => setSelected(index)}
            initial={{ opacity: 0, clipPath: "inset(12% 0 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.07 }}
            aria-label={`Agrandir l’image ${index + 1}: ${alt}`}
          >
            <img src={src} alt={alt} loading="lazy" decoding="async" />
            <span>0{index + 1}</span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image agrandie"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button ref={closeRef} type="button" onClick={() => setSelected(null)} aria-label="Fermer l’image">
              <Icon name="close" size={26} />
            </button>
            <motion.img
              src={gallery[selected][0]}
              alt={gallery[selected][1]}
              onClick={(event) => event.stopPropagation()}
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
