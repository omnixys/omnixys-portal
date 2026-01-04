"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { omnixysPresets } from "@/themes/theme";
import { ERROR_CONFIG, ErrorCode } from "@/app/_config/error-config";

type Props = {
  code: ErrorCode;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function GlobalErrorShell({
  code,
  title,
  description,
  children,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

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

  /* ------------------------------
   * visionOS Micro Parallax
   * ------------------------------ */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;

      el.style.transform = `
        translateZ(0)
        rotateX(${-y}deg)
        rotateY(${x}deg)
      `;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ------------------------------
   * Smart Navigation Handler
   * ------------------------------ */
  const config = ERROR_CONFIG[code];

  const handleNavigate = () => {
    // 1) Browser history available
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    // 2) Valid same-origin referrer
    if (document.referrer) {
      try {
        const ref = new URL(document.referrer);
        if (ref.origin === window.location.origin) {
          window.location.href = ref.pathname + ref.search + ref.hash;
          return;
        }
      } catch {
        /* ignore */
      }
    }

    // 3) Config fallback
    window.location.href = config.fallback;
  };

  return (
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
      <main
        ref={cardRef}
        style={{
          width: "100%",
          maxWidth: 540,
          padding: "56px 40px",
          textAlign: "center",
          borderRadius: 32,
          background: omni.backgroundPaper,
          boxShadow: isDark
            ? "0 40px 90px rgba(0,0,0,0.65)"
            : "0 40px 80px rgba(0,0,0,0.14)",
          transformStyle: "preserve-3d",
          transition:
            "transform 0.15s cubic-bezier(.4,0,.2,1), background-color 0.3s",
        }}
      >
        {/* Logo */}
        <img
          src="/omnixys.png"
          alt="Omnixys"
          style={{
            width: 96,
            height: 96,
            margin: "0 auto 28px",
            borderRadius: 24,
            boxShadow: isDark
              ? "0 14px 36px rgba(0,0,0,0.75)"
              : "0 12px 30px rgba(0,0,0,0.25)",
          }}
        />

        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            marginBottom: 8,
            color: omni.primary,
          }}
        >
          {code}
        </div>

        <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 10 }}>
          {title}
        </h1>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: omni.textSecondary,
            marginBottom: 36,
          }}
        >
          {description}
        </p>

        {children}

        <button
          onClick={handleNavigate}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            borderRadius: 999,
            padding: "14px 28px",
            fontSize: 14,
            fontWeight: 600,
            background: `linear-gradient(180deg, ${omni.primary}, ${omni.secondary})`,
            color: "#FFFFFF",
            boxShadow: isDark
              ? "0 10px 26px rgba(0,0,0,0.6)"
              : "0 10px 24px rgba(0,0,0,0.18)",
          }}
        >
          {config.label}
        </button>
      </main>
    </body>
  );
}
