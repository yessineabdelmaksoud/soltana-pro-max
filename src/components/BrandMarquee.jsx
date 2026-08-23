import { marqueeWords } from "../data/phrases";

function MarqueeSet({ hidden = false }) {
  return (
    <span className="marquee__set" aria-hidden={hidden || undefined}>
      {marqueeWords.map((word) => <span key={word}>{word}<i>·</i></span>)}
    </span>
  );
}

export function BrandMarquee() {
  return (
    <section className="marquee" aria-label={marqueeWords.join(", ")}>
      <div className="marquee__track">
        <MarqueeSet />
        <MarqueeSet hidden />
      </div>
    </section>
  );
}
