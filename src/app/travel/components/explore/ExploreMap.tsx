"use client";

import { ExploreLocation } from "../../lib/explore/exploreTypes";
import { MapProvider } from "../maps/MapProvider";
import { TravelMap } from "../maps/TravelMap";


interface Props {
  locations: ExploreLocation[];
}

export function ExploreMap({ locations }: Props) {
  const mapped = locations.map((l) => ({
    id: l.id,
    name: l.title,
    lat: l.lat,
    lng: l.lng,
  }));

  return (
    <MapProvider>
      <TravelMap locations={mapped} height={360} />
    </MapProvider>
  );
}
