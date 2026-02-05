/**
 * @file /profile/page.tsx
 * @description Profile page – desktop grid layout (stable)
 */

"use client";

import { Box, Container } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DepthBlurLayer from "../../components/home/DepthBlurLayer";
import LayoutShell from "../../components/home/layout/LayoutShell";
import ProfilePersonalInfo from "../../components/profile/PersonalInfoCard";
import ProfileAddressStack from "../../components/profile/ProfileAddressStack";
import ProfileContactsCarousel from "../../components/profile/ProfileContactsCarousel";
import ProfileIdentityCard from "../../components/profile/ProfileIdentityHeader";
import ProfileRoleData from "../../components/profile/ProfileRoleData";
import ProfileRoleSpecificInfo from "../../components/profile/ProfileRoleSpecificInfo";
import ProfileStatusStrip from "../../components/profile/ProfileStatusStrip";
import { useAuth } from "../../providers/AuthProvider";

type FocusArea =
  | "identity"
  | "role"
  | "personal"
  | "roleSpecific"
  | "addresses"
  | "contacts"
  | null;

export default function ProfilePage() {
  const { user, loading } = useAuth();

  const pathname = usePathname();
  // const [focused, setFocused] = useState<FocusArea>(null);
  // const [animationKey, setAnimationKey] = useState(0);

  // useEffect(() => {
  //   setAnimationKey((k) => k + 1);
  //   setFocused(null);
  // }, [pathname]);

  return (
    <LayoutShell user={user} loading={loading}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1280,
          mx: "auto",
          px: 4,
          py: 4,
        }}
      >
        {/* ============================== */}
        {/* OUTER GRID                     */}
        {/* ============================== */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "320px 1fr 1fr",
            gridTemplateRows: "80px auto minmax(420px, 1fr)",
            gridTemplateAreas: `
            "topbar topbar topbar"
            "left   main   main"
            "left   main   main"
          `,
            gap: 3,
          }}
        >
          {/* <DepthBlurLayer active={focused !== null} /> */}
          {/* ───────────────────────────── */}
          {/* TOP BAR – USER / ACCOUNT */}
          {/* ───────────────────────────── */}
          <Box
            sx={{
              gridArea: "topbar",
              borderRadius: 4,
              bgcolor: "background.paper",
              px: 3,
              boxShadow: (theme) => theme.shadows[1],
              display: "flex",
              alignItems: "center",
            }}
          >
            <ProfileStatusStrip
              completeness={92}
              contacts={0}
              addresses={1}
              secure
            />
          </Box>

          {/* ───────────────────────────── */}
          {/* LEFT COLUMN (STACKED CARDS) */}
          {/* ───────────────────────────── */}
          <Box
            sx={{
              gridArea: "left",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* LEFT TOP – Identity */}
            <Box
              sx={{
                borderRadius: 4,
                bgcolor: "background.paper",
                p: 3,
              }}
            >
              <ProfileIdentityCard user={user} />
            </Box>

            {/* LEFT BOTTOM – Role / Status */}
            <Box
              sx={{
                borderRadius: 4,
                bgcolor: "background.paper",
                p: 3,
              }}
            >
              <ProfileRoleData user={user} />
            </Box>
          </Box>

          {/* ───────────────────────────── */}
          {/* MAIN CONTENT GRID */}
          {/* ───────────────────────────── */}
          <Box
            sx={{
              gridArea: "main",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gridTemplateRows: "auto minmax(320px, 1fr)",
              gridTemplateAreas: `
              "info role"
              "addr contacts"
            `,
              gap: 3,
            }}
          >
            {/* PERSONAL INFORMATION */}
            <Box
              sx={{
                gridArea: "info",
                borderRadius: 4,
                bgcolor: "background.paper",
                p: 3,
              }}
            >
              <ProfilePersonalInfo user={user} />
            </Box>

            {/* ROLE-SPECIFIC DATA */}
            <Box
              tabIndex={0}
              // onFocus={() => setFocused("roleSpecific")}
              // onBlur={() => setFocused(null)}
              // onMouseEnter={() => setFocused("roleSpecific")}
              // onMouseLeave={() => setFocused(null)}
              sx={{
                gridArea: "role",
                borderRadius: 4,
                bgcolor: "background.paper",
                zIndex: 1300,
                transition: "opacity 0.35s ease",
                // opacity:
                //   focused === null || focused === "roleSpecific" ? 1 : 0.55,
                outline: "none",
              }}
            >
              <ProfileRoleSpecificInfo user={user} />
            </Box>

            {/* ADDRESSES */}
            <Box
              sx={{
                gridArea: "addr",
                borderRadius: 4,
                bgcolor: "background.paper",
                p: 3,
                zIndex: 1300,
              }}
            >
              <ProfileAddressStack user={user} />
            </Box>

            {/* CONTACTS */}
            <Box
              sx={{
                gridArea: "contacts",
                borderRadius: 4,
                bgcolor: "background.paper",
                overflow: "hidden",
                p: 3,
              }}
            >
              <ProfileContactsCarousel user={user} />
            </Box>
          </Box>
        </Box>
      </Container>
    </LayoutShell>
  );
}
