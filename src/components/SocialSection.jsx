import { motion } from "framer-motion";
import { restaurant } from "../data/restaurant";
import { reveal, viewport } from "../motion/variants";
import { Icon } from "./Icons";

const socialFrames = [
  ["/assets/chorba-bowl.jpg", "Chorba tunisienne au citron, bouillon rouge et langues d’oiseau", "POV: jit jou3an"],
  ["/assets/team.jpeg", "Chouliga Junior au centre de l’univers Soltana", "the main character"],
  ["/assets/slata-verte.jpg", "Slata mechouia verte au thon, œufs durs et olives", "banna, sans filtre"],
];

export function SocialSection() {
  return (
    <section className="social section" aria-labelledby="social-title">
      <motion.div className="social__copy" variants={reveal} initial="hidden" whileInView="visible" viewport={viewport}>
        <span className="micro-label">03 / FIL FEED</span>
        <h2 id="social-title">Fi Instagram 7keya.<br /><em>Fil resto 7keya o5ra.</em></h2>
        <p>Le feed donne faim. La vraie assiette fait le reste.</p>
        {restaurant.instagram ? (
          <a className="button button--red" href={restaurant.instagram} target="_blank" rel="noreferrer">
            <Icon name="instagram" /> Choufna fil Instagram
          </a>
        ) : (
          <span className="social__pending" aria-label="Le lien Instagram sera ajouté dès qu’il sera vérifié">
            <Icon name="instagram" /> Choufna fil Instagram <small>lien à confirmer</small>
          </span>
        )}
      </motion.div>
      <div className="social__frames" aria-label="Aperçu visuel du contenu social">
        {socialFrames.map(([src, alt, label], index) => (
          <motion.figure
            className={`reel reel--${index + 1}`}
            key={src}
            initial={{ opacity: 0, x: index === 1 ? 0 : index ? 40 : -40, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: index === 0 ? -4 : index === 2 ? 4 : 0 }}
            viewport={viewport}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <img src={src} alt={alt} loading="lazy" decoding="async" />
            <figcaption><span>● REC</span>{label}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
