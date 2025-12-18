import React, { useEffect, useMemo, useRef } from "react";
import "./RingLettersLoader.css";

const DEFAULT_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function pick(alphabet) {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function buildWordRing(phrase, count) {
  const cleaned = (phrase || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return Array.from({ length: count }, () => "•");

  const chars = cleaned.split("");
  const out = [];
  for (let i = 0; i < count; i++) out.push(chars[i % chars.length]);
  return out;
}

export default function RingLettersLoader({
  size = 260,

  rings = [
    { count: 48, radius: 112, speed: 0.75, fontSize: 14, opacity: 0.95 },
    { count: 36, radius: 86, speed: -0.52, fontSize: 12, opacity: 0.8 },
    { count: 24, radius: 60, speed: 0.4, fontSize: 10, opacity: 0.65 },
  ],

  wordsOuter = "Futurist · Designer · Developer · Architect",
  wordsMid = "PORTFOLIO · UI · UX",
  wordsInner = "CODE · BUILD · CREATE",

  durationMs = 3500,
  cloudSpread = 1500, 
  alphabet = DEFAULT_ALPHABET,

  className = "",
}) {
  const stageRef = useRef(null);
  const rafRef = useRef(null);
  const startRef = useRef(0);

  // Prebuild ring targets
  const targetsByRing = useMemo(() => {
    return [
      buildWordRing(wordsOuter, rings[0]?.count ?? 0),
      buildWordRing(wordsMid, rings[1]?.count ?? 0),
      buildWordRing(wordsInner, rings[2]?.count ?? 0),
    ];
  }, [wordsOuter, wordsMid, wordsInner, rings]);

  // Flatten slots
  const slots = useMemo(() => {
    const all = [];
    rings.forEach((r, ringIndex) => {
      const step = (Math.PI * 2) / r.count;
      for (let i = 0; i < r.count; i++) {
        const a = i * step - Math.PI / 2;
        all.push({
          id: `${ringIndex}-${i}`,
          ringIndex,
          i,
          a,
          fontSize: r.fontSize,
          maxOpacity: r.opacity,
        });
      }
    });
    return all;
  }, [rings]);

  // Particles
  const particles = useMemo(() => {
    return slots.map((s, idx) => {
      const a = Math.random() * Math.PI * 2;
      const r = 25 + Math.random() * cloudSpread;
      const sx = Math.cos(a) * r + (Math.random() * 40 - 20);
      const sy = Math.sin(a) * r + (Math.random() * 40 - 20);

      const settleDelay = (idx / slots.length) * 0.55; 
      const wobble = 0.8 + Math.random() * 1.2;

      return {
        ...s,
        ch: pick(alphabet),
        locked: false, 
        x: sx,
        y: sy,
        rot: Math.random() * Math.PI * 2,
        driftA: a,
        spin: (Math.random() * 1.5 + 0.25) * (Math.random() < 0.5 ? -1 : 1),
        wobble,
        settleDelay,
      };
    });
  }, [slots.length]);

  const nodesRef = useRef([]);
  useEffect(() => {
    nodesRef.current = nodesRef.current.slice(0, particles.length);
  }, [particles.length]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const loop = (t) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = t - startRef.current;
      const time = elapsed / 1000;

      const p = Math.min(1, elapsed / durationMs);
      const ringRot = rings.map((r) => time * r.speed);

      const cx = size / 2;
      const cy = size / 2;

      for (let k = 0; k < particles.length; k++) {
        const el = nodesRef.current[k];
        if (!el) continue;

        const pt = particles[k];
        const rRot = ringRot[pt.ringIndex] || 0;

        const local = Math.min(
          1,
          Math.max(0, (p - pt.settleDelay) / (1 - pt.settleDelay))
        );
        const e = easeOutCubic(local);

        // cloud drift
        const cloudX =
          pt.x +
          Math.cos(pt.driftA + time * pt.spin) * 18 +
          Math.sin(time * (2.2 + pt.wobble) + k) * 7;

        const cloudY =
          pt.y +
          Math.sin(pt.driftA + time * pt.spin) * 18 +
          Math.cos(time * (2.0 + pt.wobble) + k) * 7;

        // rotating
        const ta = pt.a + rRot;
        const radius = rings[pt.ringIndex]?.radius ?? 0;

        const tx = Math.cos(ta) * radius;
        const ty = Math.sin(ta) * radius;
        const trot = ta + Math.PI / 2;

        // interpolate cloud -> ring
        const x = cloudX + (tx - cloudX) * e;
        const y = cloudY + (ty - cloudY) * e;
        const rot = pt.rot + (trot - pt.rot) * e;

        // target char for this slot
        const targetChar = targetsByRing[pt.ringIndex]?.[pt.i] ?? " ";

        //  lock once settled
        if (!pt.locked) {
          if (local >= 0.985) {
            pt.locked = true;
            pt.ch = targetChar;
            el.textContent = targetChar;
          } else {
            const scrambleChance = Math.max(0.06, (1 - local) * 0.55);
            if (Math.random() < scrambleChance) {
              pt.ch = pick(alphabet);
              el.textContent = pt.ch;
            }
          }
        } else {
          if (el.textContent !== targetChar) el.textContent = targetChar;
        }

        // opacity
        const op = (0.12 + e * pt.maxOpacity).toFixed(3);

        el.style.opacity = op;
        el.style.transform = `translate(${cx + x}px, ${cy + y}px) rotate(${rot}rad)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startRef.current = 0;
    };
  }, [alphabet, durationMs, particles, rings, size, targetsByRing]);

  return (
    <div className={`rll3 ${className}`} style={{ ["--rll3-size"]: `${size}px` }}>
      <div className="rll3-stage" ref={stageRef}>
        {particles.map((p, idx) => (
          <span
            key={p.id}
            ref={(el) => (nodesRef.current[idx] = el)}
            className={`rll3-letter ring-${p.ringIndex}`}
            style={{ fontSize: `${p.fontSize}px` }}
          >
            {p.ch}
          </span>
        ))}
      </div>
    </div>
  );
}
