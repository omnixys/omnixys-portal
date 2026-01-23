// components/services/ServicesGrid.tsx
"use client";

import { ServiceCard } from "./ServiceCard";
import { ServiceItem } from "../../types";
import { InfiniteMultiItemCarousel } from "../Carousel/InfiniteMultiItemCarousel";

export function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <InfiniteMultiItemCarousel
      items={services}
      visibleCount={3} // 🔥 IMMER 3 SICHTBAR
      autoPlay
      renderItem={(service) => <ServiceCard {...service} />}
    />
  );
}
