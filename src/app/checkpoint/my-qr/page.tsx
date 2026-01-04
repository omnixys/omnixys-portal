"use client";

import ActiveEventGuard from "@/components/checkpoint/guard/ActiveEventGuard";
import MyQrContent from "@/components/checkpoint/myQr/MyQrContent";

export default function Page() {
  return (
    <ActiveEventGuard>
      <MyQrContent />
    </ActiveEventGuard>
  );
}
