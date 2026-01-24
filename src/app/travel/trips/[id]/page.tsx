"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import { Stack, Typography } from "@mui/material";
import { ItineraryTimeline } from "../../components/trips/ItineraryTimeline";
import { TripMap } from "../../components/trips/TripMap";
import { TripTab, TripTabs } from "../../components/trips/TripTabs";
import { MOCK_TRIPS } from "../../lib/trips/mockTrips";


interface Props {
  params: Promise<{ id: string }>;
}

export default function TripDetailPage({ params }: Props) {
  const {id} = useParams<{ id: string }>();
  const trip = MOCK_TRIPS.find((t) => t.id === id);
  const [tab, setTab] = useState<TripTab>("overview");

  if (!trip) return notFound();

  return (
    <Stack spacing={4} sx={{ p: 6 }}>
      <Typography variant="h4">{trip.title}</Typography>
      <Typography color="text.secondary">
        {trip.startDate} – {trip.endDate}
      </Typography>

      <TripTabs value={tab} onChange={setTab} />

      {tab === "overview" && <Typography>{trip.description}</Typography>}

      {tab === "itinerary" && <ItineraryTimeline locations={trip.locations} />}

      {tab === "map" && <TripMap locations={trip.locations} />}
    </Stack>
  );
}
