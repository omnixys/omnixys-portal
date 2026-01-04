"use client";

import { Inter } from "next/font/google";
import GlobalErrorShell from "./_components/GlobalErrorShell";

const inter = Inter({ subsets: ["latin"] });

export default function GlobalError() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <GlobalErrorShell
          code={500}
          title="Something went wrong"
          description="An unexpected error occurred. Please try again."
        />
      </body>
    </html>
  );
}