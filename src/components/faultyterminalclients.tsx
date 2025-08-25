"use client";

import dynamic from "next/dynamic";

const FaultyTerminal = dynamic(
  () => import("@/components/FaultyTerminal"), 
  { ssr: false }
);

export default function FaultyTerminalClient() {
  return (
    <FaultyTerminal
      scale={1.5}
      gridMul={[2, 1]}
      digitSize={1.2}
      timeScale={1}
      pause={false}
      scanlineIntensity={1}
      glitchAmount={1}
      flickerAmount={1}
      noiseAmp={1}
      chromaticAberration={0}
      dither={0}
      curvature={0}
      tint="#FF2900"
      mouseReact
      mouseStrength={0.5}
      pageLoadAnimation={false}
      brightness={1}
      className="w-full h-full"
    />
  );
}