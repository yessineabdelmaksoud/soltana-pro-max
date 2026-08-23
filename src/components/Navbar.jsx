import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { restaurant } from "../data/restaurant";
import { Icon } from "./Icons";

const links = [
  ["Menu", "#menu"],
  ["Soltana", "#soltana"],
  ["Gallery", "#gallery"],
  ["Win nal9awkom?", "#location"],
  ["Contact", `tel:${restaurant.phone}`],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const firstLink = useRef(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (open) firstLink.current?.focus();
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`nav-shell ${compact ? "is-compact" : ""}`}>
      <nav className="navbar" aria-label="Navigation principale">
        <a className="navbar__brand" href="#top" aria-label="Soltana Pro Max, accueil">
          <img src="/assets/logo.jpg" alt="" width="54" height="54" />
          <span>SOLTANA <b>PRO MAX</b></span>
        </a>
        <div className="navbar__links">
          {links.slice(0, 4).map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <a className="button button--small button--dark navbar__call" href={`tel:${restaurant.phone}`}>
          Call us <Icon name="phone" size={17} />
        </a>
        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="micro-label">SFAX — KM1</span>
            <div className="mobile-menu__links">
              {links.map(([label, href], index) => (
                <a
                  key={label}
                  href={href}
                  ref={index === 0 ? firstLink : null}
                  onClick={() => setOpen(false)}
                >
                  <span>0{index + 1}</span>{label}
                </a>
              ))}
            </div>
            <p>Yamma... el menu mahouche twil.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
