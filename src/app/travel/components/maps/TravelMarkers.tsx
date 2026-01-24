"use client";

import { Marker, Polyline } from "@react-google-maps/api";
import { TripLocation } from "../../lib/trips/tripTypes";

interface Props {
  locations: TripLocation[];
}

export function TravelMarkers({ locations }: Props) {
  const path = locations.map((l) => ({
    lat: l.lat,
    lng: l.lng,
  }));

  return (
    <>
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={{ lat: loc.lat, lng: loc.lng }}
          title={loc.name}
        />
      ))}

      {path.length > 1 && (
        <Polyline
          path={path}
          options={{
            strokeColor: "#0A84FF",
            strokeOpacity: 0.8,
            strokeWeight: 3,
          }}
        />
      )}
    </>
  );
}
