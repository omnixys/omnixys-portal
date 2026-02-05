// -------------------------------------------------------------
// Valenxys – Root Layout
// -------------------------------------------------------------

import type { Metadata } from "next";
import Provider from "./provider";

// -------------------------------------------------------------
// Metadata
// -------------------------------------------------------------
export const metadata: Metadata = {
  title: {
    default: "Valenxys",
    template: "%s · Valenxys",
  },
  description: "A small question. A big yes.",
  applicationName: "Valenxys",
  authors: [{ name: "Valenxys" }],
  robots: {
    index: false,
    follow: false,
  },
};

// -------------------------------------------------------------
// Root Layout
// -------------------------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <Provider>{children}</Provider>
  );
}
