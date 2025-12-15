import React from "react";
import { gsap } from "gsap";

const TopicFlowOverlay = ({ title, icons = [], active }) => {
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  React.useEffect(() => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;

    if (!active) {
      gsap.set(marqueeRef.current, { y: "101%" });
      gsap.set(marqueeInnerRef.current, { y: "-101%" });
      return;
    }

    gsap
      .timeline({ defaults: { duration: 0.6, ease: "expo.out" } })
      .set(marqueeRef.current, { y: "101%" }, 0)
      .set(marqueeInnerRef.current, { y: "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  }, [active]);

  const base = icons.length ? icons : [];
  const repeated = Array.from({ length: 10 }).flatMap((_, i) =>
    base.map((src, idx) => (
      <div key={`${i}-${idx}`} className="topic-marquee__icon">
        <img src={src} alt={title} loading="lazy" />
      </div>
    ))
  );

  return (
    <div
      className={`topic-marquee ${active ? "is-visible" : ""}`}
      ref={marqueeRef}
      aria-hidden="true"
    >
      <div className="topic-marquee__inner-wrap" ref={marqueeInnerRef}>
        <div className="topic-marquee__inner">{repeated}</div>
      </div>
    </div>
  );
};

export default TopicFlowOverlay;
