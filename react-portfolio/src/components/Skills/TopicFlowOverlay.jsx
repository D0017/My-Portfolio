import React from "react";
import { gsap } from "gsap";

const TopicFlowOverlay = ({ text, image, active }) => {
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  React.useEffect(() => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;

    // When not active, hidden below
    if (!active) {
      gsap.set(marqueeRef.current, { y: "101%" });
      gsap.set(marqueeInnerRef.current, { y: "-101%" });
      return;
    }

    // Active, slide in
    gsap
      .timeline({ defaults: { duration: 0.6, ease: "expo.out" } })
      .set(marqueeRef.current, { y: "101%" }, 0)
      .set(marqueeInnerRef.current, { y: "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  }, [active]);

  const repeated = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{text}</span>
      <div
        className="topic-marquee__img"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

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
