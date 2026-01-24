"use client";

import { ReactNode } from "react";
import { LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_LIBRARIES } from "../../lib/maps/mapConfig";

interface Props {
  children: ReactNode;
}

export function MapProvider({ children }: Props) {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? ""}
      libraries={GOOGLE_MAPS_LIBRARIES}
    >
      {children}
    </LoadScript>
  );
}
