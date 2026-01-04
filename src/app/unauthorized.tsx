"use client";

import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const GlobalErrorShell = dynamic(
  () => import("./_components/GlobalErrorShell"),
  { ssr: false }
);


export default function Unauthorized() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <GlobalErrorShell
          code={401}
          title="Unauthorized"
          description="You are not authenticated to access this resource."
        />
      </body>
    </html>
  );
}