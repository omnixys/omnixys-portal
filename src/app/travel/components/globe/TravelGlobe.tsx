"use client";

import Globe, { GlobeMethods } from "react-globe.gl";
import { useRef, useEffect } from "react";
import { GlobePoint, GlobeRoute } from "../../lib/globe/globeTypes";

interface Props {
  points: GlobePoint[];
  routes: GlobeRoute[];
  height?: number;
}

export function TravelGlobe({ points, routes, height = 520 }: Props) {
   const globeRef = useRef<GlobeMethods | null>(null);

  useEffect(() => {
    if (!globeRef.current) return;

     // Camera angle similar to screenshot
    globeRef.current.pointOfView(
      { lat: 10, lng: -60, altitude: 2.2 },
      0
    );


    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 0.4;
  }, []);

  return (
    <Globe
      ref={globeRef}
      height={height}
      backgroundColor="rgba(0,0,0,0)"
      // Earth textures (NASA / three-globe official)
      // globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      pointsData={points}
      pointLat="lat"
      pointLng="lng"
      pointAltitude={0.01}
      pointRadius={0.25}
      pointColor={() => "red"}
      // pointLabel={(p: GlobePoint) => `
      //   <div style="padding:6px">
      //     <b>${p.label}</b><br/>
      //     ${p.country ?? ""}
      //   </div>
      // `}
      pointLabel={"name"}
      arcsData={routes}
      arcStartLat={(r) => r.from.lat}
      arcStartLng={(r) => r.from.lng}
      arcEndLat={(r) => r.to.lat}
      arcEndLng={(r) => r.to.lng}
      arcColor={() => ["#34C759", "#0A84FF"]}
      arcDashLength={0.4}
      arcDashGap={0.2}
      arcDashAnimateTime={3500}
      // Performance
      animateIn={true}
      // Atmosphere
      atmosphereColor="#0A84FF"
      atmosphereAltitude={0.15}
    />
  );
}
