import { motion } from "framer-motion";
import { mapsSearchUrl, restaurant } from "../data/restaurant";
import { reveal, viewport } from "../motion/variants";
import { Icon } from "./Icons";

export function Location() {
  const mapHref = restaurant.maps || mapsSearchUrl;
  return (
    <section className="location" id="location" aria-labelledby="location-title">
      <motion.div className="location__map" variants={reveal} initial="hidden" whileInView="visible" viewport={viewport}>
        <div className="location__roads" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="location__pin"><span>KM1</span><Icon name="map" size={38} /></div>
        <span className="location__street">ROUTE DE TUNIS</span>
        <span className="location__zezwa">DEVANT CAFÉ ZEZWA</span>
      </motion.div>
      <motion.div className="location__copy" variants={reveal} initial="hidden" whileInView="visible" viewport={viewport}>
        <span className="micro-label">05 / SFAX, TOUT DROIT</span>
        <h2 id="location-title">Win<br /><em>nal9awkom?</em></h2>
        <address>
          <strong>{restaurant.name}</strong>
          <span>Route de Tunis KM1</span>
          <span>Devant Café Zezwa</span>
          <span>{restaurant.city}</span>
        </address>
        <div className="location__actions">
          <a className="button button--cream" href={mapHref} target="_blank" rel="noreferrer">
            7ell Google Maps <Icon name="external" size={18} />
          </a>
          <a className="button button--outline-light" href={`tel:${restaurant.phone}`}>
            3ayetelna <Icon name="phone" size={18} />
          </a>
        </div>
        <a className="location__phone" href={`tel:${restaurant.phone}`}>+216 {restaurant.displayPhone}</a>
        {!restaurant.hours && <p className="location__note">Les horaires seront affichés dès qu’ils seront vérifiés.</p>}
      </motion.div>
    </section>
  );
}
