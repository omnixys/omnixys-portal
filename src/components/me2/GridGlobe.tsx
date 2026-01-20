"use client";

import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import React, { JSX } from "react";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

const GridGlobe = (): JSX.Element => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 3,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[2],
    },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: { xs: "9rem", md: "10rem" }, // top-36 / md:top-40
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          width: "100%",
          height: "24rem", // h-96
          px: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Bottom gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            insetX: 0,
            bottom: 0,
            height: "10rem",
            zIndex: 40,
            pointerEvents: "none",
            background:
              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.9))",
          }}
        />

        {/* Globe canvas */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
          }}
        >
          <World data={sampleArcs} globeConfig={globeConfig} />
        </Box>
      </Box>
    </Box>
  );
};

export default GridGlobe;
