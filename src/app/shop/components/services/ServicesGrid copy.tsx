"use client";
import { Grid } from "@mui/material";
import { ServiceItem } from "../../types";
import { Carousel } from "../Carousel/Carousel";
import { ServiceCard } from "./ServiceCard";

const chunk = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );

export function ServicesGrid({ services }: { services: ServiceItem[] }) {
  const slides = chunk(services, 3);
  return (
    <Carousel
      items={slides}
      renderItem={(slideItem) => (
        <Grid container spacing={4}>
          {slideItem.map((service) => (
            <Grid size={4} sx={{ xs: 12, sm: 6, md: 3 }} key={service.title}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      )}
    />
  );
}
