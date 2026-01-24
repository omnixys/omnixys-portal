"use client";

import { BookingPage } from "../../components/booking/BookingPage";
import { BOOKING_RESULTS } from "../../lib/booking/bookingMockData";

export default function HotelsBookingPage() {
  return (
    <BookingPage
      title="Hotels"
      description="Find the best places to stay"
      results={BOOKING_RESULTS.hotels}
    />
  );
}
