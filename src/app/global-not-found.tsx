"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalErrorShell from "./_components/GlobalErrorShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 – Page not found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <GlobalErrorShell
        code={404}
        title="Page not found"
        description="The page you’re trying to reach doesn’t exist or has been moved."
      />
    </html>
  );
}
