"use client";

import { GoogleMap } from "@react-google-maps/api";
import { Box } from "@mui/material";
import { TravelMarkers } from "./TravelMarkers";
import { TripLocation } from "../../lib/trips/tripTypes";
import { DEFAULT_MAP_OPTIONS } from "../../lib/maps/mapConfig";

interface Props {
  locations: TripLocation[];
  height?: number;
}

export function TravelMap({ locations, height = 420 }: Props) {
  const center = locations[0]
    ? { lat: locations[0].lat, lng: locations[0].lng }
    : { lat: 0, lng: 0 };

  return (
    <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height,
        }}
        center={center}
        zoom={6}
        options={DEFAULT_MAP_OPTIONS}
      >
        <TravelMarkers locations={locations} />
      </GoogleMap>
    </Box>
  );
}
