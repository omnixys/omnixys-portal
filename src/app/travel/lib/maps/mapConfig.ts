export const GOOGLE_MAPS_LIBRARIES: ("places" | "geometry" | "drawing")[] = [
  "places",
  "geometry",
];

export const DEFAULT_MAP_OPTIONS: google.maps.MapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
};
