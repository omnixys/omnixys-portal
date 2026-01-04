"use client";

import { Inter } from "next/font/google";
import GlobalErrorShell from "./_components/GlobalErrorShell";

const inter = Inter({ subsets: ["latin"] });

export default function Forbidden() {
  return (
    <html lang="en" className={inter.className}>
      <GlobalErrorShell
        code={403}
        title="Access denied"
        description="You don’t have permission to access this page."
      />
    </html>
  );
}
