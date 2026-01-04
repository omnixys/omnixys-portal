"use client";

import { Inter } from "next/font/google";
import GlobalErrorShell from "./_components/GlobalErrorShell";

const inter = Inter({ subsets: ["latin"] });

export default function Unauthorized() {
  return (
    <html lang="en" className={inter.className}>
      <GlobalErrorShell
        code={401}
        title="Unauthorized"
        description="You are not authenticated to access this resource."
      />
    </html>
  );
}
