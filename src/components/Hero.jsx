import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Icon } from "./Icons";

export function Hero() {
  const sectionRef = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 54]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -26]);

  const onPointerMove = (event) => {
    if (!window.matchMedia("(hover: hover) and (min-width: 900px)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    rotateY.set(((event.clientX - box.left) / box.width - 0.5) * 5);
    rotateX.set(-((event.clientY - box.top) / box.height - 0.5) * 5);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section className="hero" id="top" ref={sectionRef} aria-labelledby="hero-title">
      <div className="hero__grain" aria-hidden="true" />
      <motion.div className="hero__copy" style={{ y: copyY }}>
        <p className="eyebrow"><span /> SFAX — ROUTE DE TUNIS KM1</p>
        <h1 id="hero-title">
          <span>MAHOUCH RESTO.</span>
          <strong>HEDHI SOLTANA.</strong>
        </h1>
        <p className="hero__lead">El Benna, Qualité w soum w Entiii chouf rouhek !</p>
        <p className="hero__tagline"><bdi lang="ar" dir="rtl">موش كان تاكل... تعيش التجربة</bdi> <span aria-hidden="true">🔥</span></p>
        <div className="hero__actions">
          <a className="button button--cream" href="#menu">Chouf el menu <Icon name="arrow" /></a>
          <a className="button button--outline-light" href="#location"><bdi lang="ar" dir="rtl">وين تلقاونا؟</bdi> <Icon name="map" /></a>
        </div>
        <div className="hero__stamp" aria-label="Route de Tunis KM1, Sfax">
          <b>SFAX</b><span>ROUTE DE TUNIS KM1</span>
        </div>
      </motion.div>

      <motion.div className="hero__visual" style={{ y: photoY }}>
        <div className="hero__orbit hero__orbit--one" aria-hidden="true" />
        <div className="hero__orbit hero__orbit--two" aria-hidden="true" />
        <motion.div
          className="hero__photo-wrap"
          onPointerMove={onPointerMove}
          onPointerLeave={resetTilt}
          style={{ rotateX, rotateY, transformPerspective: 900 }}
        >
          <div className="hero__photo-frame">
            <img
              src="/assets/team.jpeg"
              alt="L’univers visuel de Soltana Pro Max avec Chouliga Junior et les personnages de la marque"
              width="1254"
              height="1254"
              fetchPriority="high"
            />
          </div>
          <img className="hero__logo" src="/assets/logo.jpg" alt="Logo Soltana Pro Max" width="960" height="960" />
          <div className="hero__food-cutout">
            <img src="/assets/image copy 9.png" alt="Plat tunisien en sauce" width="352" height="323" />
          </div>
          <span className="scribble scribble--top">Chouliga Junior →</span>
          <span className="scribble scribble--bottom">Yamma!</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
