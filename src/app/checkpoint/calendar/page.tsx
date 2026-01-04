"use client";

import MyCalendarContent from "@/components/checkpoint/calendar/MyCalendarContent";
import EventsNavBar from "@/components/checkpoint/eventList/EventsNavBar";
import { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <>
      <EventsNavBar />
      <MyCalendarContent />
    </>
  );
}
