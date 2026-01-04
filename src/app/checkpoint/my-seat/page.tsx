"use client";

import ActiveEventGuard from "@/components/checkpoint/guard/ActiveEventGuard";
import MySeatContent from "@/components/checkpoint/mySeat/MySeatContent";
import { JSX } from "react";

/**
 * Guest-facing page that shows the assigned seat
 * for the currently active event.
 *
 * Event context is resolved via ActiveEventProvider.
 */
export default function MySeatPage(): JSX.Element {
  return (
    <ActiveEventGuard>
      <MySeatContent />
    </ActiveEventGuard>
  );
}
