"use client";

import ActiveEventGuard from "@/components/checkpoint/guard/ActiveEventGuard";
import ScanHistoryContent from "@/components/checkpoint/scan/history/ScanHistoryContent";

export default function Page() {
  return (
    <ActiveEventGuard>
      <ScanHistoryContent />
    </ActiveEventGuard>
  );
}
