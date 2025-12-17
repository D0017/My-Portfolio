import React from "react";
import "./CodeFrameLoader.css";

export default function CodeFrameLoader({ size = 240 }) {
  return (
    <div className="cfl-wrap" style={{ ["--cfl-size"]: `${size}px` }}>
      <div className="cfl-core">
        {/* frame strokes */}
        <span className="cfl-stroke s1" />
        <span className="cfl-stroke s2" />
        <span className="cfl-stroke s3" />
        <span className="cfl-stroke s4" />

        {/* scanning line */}
        <span className="cfl-scan" />

        {/* code blocks */}
        <span className="cfl-chip c1" />
        <span className="cfl-chip c2" />
        <span className="cfl-chip c3" />
        <span className="cfl-chip c4" />

        {/* tiny code text */}
        <span className="cfl-text t1">&lt;div&gt;</span>
        <span className="cfl-text t2">.frame</span>
        <span className="cfl-text t3">border</span>
        <span className="cfl-text t4">radius</span>

        {/* inner soft plate */}
        <div className="cfl-plate" />
      </div>

      <div className="cfl-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
