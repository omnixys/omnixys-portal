"use client";

import { Inter } from "next/font/google";
import GlobalErrorShell from "./_components/GlobalErrorShell";
import { useState, useEffect } from "react";
import { omnixysPresets } from "../themes/theme";

const inter = Inter({ subsets: ["latin"] });

export default function Forbidden() {
  /* ------------------------------
   * Auto Dark Mode
   * ------------------------------ */
  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const omni = isDark
    ? omnixysPresets.original.dark
    : omnixysPresets.original.light;


  return (
    <html lang="en" className={inter.className}>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: isDark
            ? `radial-gradient(circle at top, #0B0B0E, ${omni.backgroundDefault})`
            : `radial-gradient(circle at top, ${omni.backgroundDefault}, #E9ECF2)`,
          color: omni.textPrimary,
        }}
      >
        <GlobalErrorShell
          code={403}
          title="Access denied"
          description="You don’t have permission to access this page."
        />
      </body>
    </html>
  );
}