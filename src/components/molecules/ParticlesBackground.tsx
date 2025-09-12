"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // load the full bundle (small project — acceptable) so we can use the simple config below
    await loadFull(engine);
  }, []);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const scrolled = window.scrollY || window.pageYOffset || 0;
        setIsBlurred(scrolled > 30);
        rafId = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const options: any = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.8, random: { enable: true, minimumValue: 0.3 } },
      size: { value: 2, random: { enable: true, minimumValue: 1 } },
      links: {
        enable: true,
        distance: 120,
        color: "#94a3b8",
        opacity: 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
        attract: { enable: false },
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: false },
        resize: true,
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
      },
    },
    detectRetina: true,
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden
      ref={containerRef}
      style={{
        transition: "filter 300ms ease",
        filter: isBlurred ? "blur(6px)" : "none",
      }}
    >
      <Particles init={particlesInit} options={options} className="w-full h-full" />
    </div>
  );
}
