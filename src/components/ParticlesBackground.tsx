"use client";

import { useState } from "react";
import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0"
      options={{
        fpsLimit: 60,
        particles: {
          color: { value: "#22d3ee" },
          links: {
            color: "#22d3ee",
            distance: 150,
            enable: true,
            opacity: 0.08,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none" as const,
            outModes: { default: "bounce" as const },
          },
          number: {
            density: { enable: true },
            value: 60,
          },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
}
