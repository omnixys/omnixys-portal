"use client";

import { Box } from "@mui/material";
import React, { JSX } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

/* =====================================================
   Canvas Reveal Effect
===================================================== */

export interface CanvasRevealEffectProps {
  animationSpeed?: number;
  containerSx?: object;
  showGradient?: boolean;
}

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  showGradient = true,
  containerSx,
}: CanvasRevealEffectProps): JSX.Element => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        ...containerSx,
      }}
    >
      <Canvas
        orthographic
        camera={{ zoom: 1, position: [0, 0, 100] }}
        style={{ position: "absolute", inset: 0 }}
      >
        <mesh>
          <planeGeometry args={[2, 2]} />
          <shaderMaterial
            fragmentShader={fragmentShader(animationSpeed)}
            vertexShader={vertexShader}
            uniforms={{
              u_time: { value: 0 },
              u_resolution: {
                value: new THREE.Vector2(
                  window.innerWidth * 2,
                  window.innerHeight * 2,
                ),
              },
            }}
          />
        </mesh>
      </Canvas>

      {showGradient && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #020617 0%, transparent 85%)",
            pointerEvents: "none",
          }}
        />
      )}
    </Box>
  );
};

/* =====================================================
   Shaders (UNCHANGED LOGIC)
===================================================== */

const vertexShader = `
  precision mediump float;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = (speed: number) => `
  precision mediump float;
  uniform float u_time;
  varying vec2 vUv;

  float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }

  void main() {
    float opacity = rand(vUv * floor(u_time * ${speed.toFixed(1)}));
    gl_FragColor = vec4(vec3(0.2,0.6,1.0), opacity * 0.4);
  }
`;
