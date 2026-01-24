"use client";

import { BookingPage } from "../../components/booking/BookingPage";
import { BOOKING_RESULTS } from "../../lib/booking/bookingMockData";


export default function CarsBookingPage() {
  return (
    <BookingPage
      title="Car Rentals"
      description="Compare rental cars worldwide"
      results={BOOKING_RESULTS.cars}
    />
  );
}
