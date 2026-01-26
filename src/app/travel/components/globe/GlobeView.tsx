"use client";

import { useEffect, useMemo, useRef } from "react";
import { GlobeMethods } from "react-globe.gl";
import { deriveCountries } from "../../lib/globe/deriveCountries";
import { deriveGlobePoints } from "../../lib/globe/deriveGlobePoints";
import {
  deriveGlobeRoutes,
  getTripYear,
} from "../../lib/globe/deriveGlobeRoutes";
import { useGlobeState } from "../../lib/globe/useGlobeState";
import { Trip } from "../../lib/trips/tripTypes";
import dynamic from "next/dynamic";

/* ✅ CRITICAL: dynamic import, SSR disabled */
const Globe = dynamic(
  () => import("react-globe.gl"),
  { ssr: false },
);


interface Props {
  trips: Trip[];
}

export function GlobeView({ trips }: Props) {
  const globeRef = useRef<GlobeMethods | null>(null);
  const { selectedYear, selectedCountry } = useGlobeState();

  const filteredTrips = useMemo(
    () =>
      selectedYear
        ? trips.filter((t) => getTripYear(t) === selectedYear)
        : trips,
    [trips, selectedYear],
  );

  const points = useMemo(
    () => deriveGlobePoints(filteredTrips),
    [filteredTrips],
  );

  const routes = useMemo(
    () => deriveGlobeRoutes(filteredTrips),
    [filteredTrips],
  );

  const countries = useMemo(
    () => deriveCountries(filteredTrips),
    [filteredTrips],
  );

  useEffect(() => {
    if (!selectedCountry || !globeRef.current) return;

    const c = countries.find((x) => x.country === selectedCountry);
    if (!c) return;

    globeRef.current.pointOfView(
      { lat: c.lat, lng: c.lng, altitude: 1.8 },
      900,
    );

    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 0.4;
  }, [selectedCountry, countries]);

  return (
    <Globe
      ref={globeRef}
      width={520}
      height={520}
      backgroundColor="#ffffff"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      atmosphereColor="#9BCBFF"
      atmosphereAltitude={0.18}
      pointsData={points}
      pointLat="lat"
      pointLng="lng"
      pointLabel="label"
      pointColor={() => "#0A84FF"}
      pointRadius={0.15}
      arcsData={routes}
      arcStartLat={(d) => d.from.lat}
      arcStartLng={(d) => d.from.lng}
      arcEndLat={(d) => d.to.lat}
      arcEndLng={(d) => d.to.lng}
      arcColor={() => "#34C759"}
      arcAltitude={0.25}
      arcDashLength={0.4}
      arcDashGap={4}
      arcDashAnimateTime={2000}
    />
  );
}
