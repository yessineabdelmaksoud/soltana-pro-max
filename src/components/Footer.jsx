import { restaurant, mapsSearchUrl } from "../data/restaurant";
import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <h2><span>SOLTANA</span><strong>PRO MAX</strong></h2>
        <span className="footer__mark">Y!</span>
      </div>
      <div className="footer__bottom">
        <p>SFAX — KM1</p>
        <div className="footer__links">
          <a href={`tel:${restaurant.phone}`}>Phone <Icon name="arrow" size={16} /></a>
          {restaurant.instagram && <a href={restaurant.instagram}>Instagram <Icon name="arrow" size={16} /></a>}
          {restaurant.facebook && <a href={restaurant.facebook}>Facebook <Icon name="arrow" size={16} /></a>}
          <a href={restaurant.maps || mapsSearchUrl} target="_blank" rel="noreferrer">Location <Icon name="arrow" size={16} /></a>
        </div>
        <p className="footer__last">Yamma... mazelt houni?</p>
      </div>
    </footer>
  );
}
