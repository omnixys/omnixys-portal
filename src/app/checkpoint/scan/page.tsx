"use client";
import ActiveEventGuard from "@/components/checkpoint/guard/ActiveEventGuard";
import ScanContent from "@/components/checkpoint/scan/ScanContent";

export default function Page() {
  return (
    <ActiveEventGuard>
      <ScanContent />
    </ActiveEventGuard>
  );
}
