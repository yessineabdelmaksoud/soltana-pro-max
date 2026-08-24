import { motion } from "framer-motion";
import { featuredFood, menuCategories } from "../data/menu";
import { reveal, stagger, viewport } from "../motion/variants";
import { Icon } from "./Icons";

export function FeaturedMenu() {
  return (
    <section className="menu-section section" id="menu" aria-labelledby="menu-title">
      <motion.div className="section-kicker" variants={reveal} initial="hidden" whileInView="visible" viewport={viewport}>
        <span>01 / EL MAKLA</span>
        <span className="section-kicker__line" />
        <span>Sans cinéma. Barcha banna.</span>
      </motion.div>
      <div className="menu-section__heading">
        <motion.h2 id="menu-title" variants={reveal} initial="hidden" whileInView="visible" viewport={viewport}>
          Chnowa<br /><em>neklou?</em>
        </motion.h2>
        <motion.div className="menu-section__intro" variants={reveal} initial="hidden" whileInView="visible" viewport={viewport}>
          <p>Des catégories, pas des prix sortis du chapeau. Pour le menu du jour et les tarifs, 3ayetelna.</p>
          <a href="tel:+21623789338">Es2el Soltana <Icon name="phone" size={18} /></a>
        </motion.div>
      </div>
      <div className="category-row" aria-label="Catégories du menu">
        {menuCategories.map((category, index) => <span key={category}><b>0{index + 1}</b>{category}</span>)}
      </div>
      <motion.div className="food-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
        {featuredFood.map((item, index) => {
          const position = menuCategories.indexOf(item.category);
          const number = String(position < 0 ? index + 1 : position + 1).padStart(2, "0");
          return (
          <motion.article className={`food-card food-card--${item.layout}`} variants={reveal} key={`${item.category}-${index}`}>
            <div className="food-card__image">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width={item.layout === "large" ? 352 : 686}
                height={item.layout === "large" ? 188 : 386}
              />
            </div>
            <div className="food-card__caption">
              <span>{number}</span>
              <div><h3>{item.category}</h3><p>{item.note}</p></div>
              <Icon name="arrow" />
            </div>
          </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
