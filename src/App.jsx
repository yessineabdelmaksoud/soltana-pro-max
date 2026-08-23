import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandMarquee } from "./components/BrandMarquee";
import { FeaturedMenu } from "./components/FeaturedMenu";
import { SoltanaLanguage } from "./components/SoltanaLanguage";
import { SocialSection } from "./components/SocialSection";
import { Gallery } from "./components/Gallery";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

export default function App() {
  const reducedMotion = useReducedMotion();
  const skipIntro = new URLSearchParams(window.location.search).has("skipIntro");
  const [showIntro, setShowIntro] = useState(!skipIntro);

  useEffect(() => {
    if (skipIntro) return undefined;
    const timer = window.setTimeout(() => setShowIntro(false), reducedMotion ? 80 : 1250);
    return () => window.clearTimeout(timer);
  }, [reducedMotion, skipIntro]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{showIntro && <Intro reducedMotion={reducedMotion} />}</AnimatePresence>
      <Navbar />
      <main id="main-content">
        <Hero />
        <BrandMarquee />
        <FeaturedMenu />
        <SoltanaLanguage />
        <SocialSection />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </MotionConfig>
  );
}
