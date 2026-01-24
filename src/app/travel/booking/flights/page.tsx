"use client";

import { BookingPage } from "../../components/booking/BookingPage";
import { BOOKING_RESULTS } from "../../lib/booking/bookingMockData";

export default function FlightsBookingPage() {
  return (
    <BookingPage
      title="Flights"
      description="Compare flights from hundreds of airlines"
      results={BOOKING_RESULTS.flights}
    />
  );
}
