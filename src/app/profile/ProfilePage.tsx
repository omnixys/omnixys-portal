/**
 * @file /profile/page.tsx
 * @description Profile page – Bento Grid layout with focus effects
 */

"use client";

import { Box, Stack, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";
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
import { User } from "@/types/user/user.type";
import TypingHeadline from "../../components/home/TypingHeadline";
import BentoTile from "./BentoTile";
import RotatingProfileHeadline from "../../components/profile/RotatingProfileHeadline";

/* =====================================================
   STAGGER CONFIG
===================================================== */

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function ProfilePage({ user }: { user?: User }): JSX.Element {
  const pathname = usePathname();
  const [focused, setFocused] = useState<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((k) => k + 1);
    setFocused(null);
  }, [pathname]);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: 1440,
        mx: "auto",
        px: 4,
        py: 4,
      }}
    >
      <RotatingProfileHeadline user={user} />

      <DepthBlurLayer active={focused !== null} />

      <Box
        key={animationKey}
        component={motion.div}
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "80px 220px 320px 240px",
          gap: 3,
          position: "relative",
          zIndex: 1300,
        }}
      >
        {/* ==================================== */}
        {/* TOP BAR – STATUS STRIP (Span 12)     */}
        {/* ==================================== */}
        <BentoTile
          index={0}
          area="1 / 1 / span 1 / span 12"
          focused={focused}
          setFocused={setFocused}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              px: 3,
            }}
          >
            <ProfileStatusStrip
              completeness={92}
              contacts={user?.contacts?.length || 0}
              addresses={user?.addresses?.length || 0}
              secure
            />
          </Box>
        </BentoTile>

        {/* ==================================== */}
        {/* ROLE DATA (Span 3)                  */}
        {/* ==================================== */}
        <BentoTile
          index={2}
          area="2 / 1 / span 1 / span 3"
          focused={focused}
          setFocused={setFocused}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              p: 3,
            }}
          >
            <ProfileRoleData user={user} />
          </Box>
        </BentoTile>

        {/* ==================================== */}
        {/* PERSONAL INFO (Span 6) - Doppelt breit */}
        {/* ==================================== */}
        <BentoTile
          index={3}
          area="2 / 4 / span 1 / span 6"
          focused={focused}
          setFocused={setFocused}
          heavy
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              p: 3,
            }}
          >
            <ProfilePersonalInfo user={user} />
          </Box>
        </BentoTile>

        {/* ==================================== */}
        {/* CUSTOMER DETAILS (Span 9) - Großes Main Tile */}
        {/* ==================================== */}
        <BentoTile
          index={4}
          area="4 / 1 / span 1 / span 12"
          focused={focused}
          setFocused={setFocused}
          heavy
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              p: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{
                mb: 3,
                background: "linear-gradient(90deg, #2196F3 0%, #00BCD4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Customer Details
            </Typography>
            <Box sx={{ flex: 1 }}>
              <ProfileRoleSpecificInfo user={user} isFocused={focused === 4} />
            </Box>
          </Box>
        </BentoTile>

        {/* ==================================== */}
        {/* ADDRESSES (Span 3) - Rechte Spalte oben */}
        {/* ==================================== */}
        <BentoTile
          index={5}
          area="3 / 7 / span 1 / span 6"
          focused={focused}
          setFocused={setFocused}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              p: 3,
            }}
          >
            <ProfileAddressStack user={user} />
          </Box>
        </BentoTile>

        {/* ==================================== */}
        {/* CONTACTS (Span 3) - Rechte Spalte unten */}
        {/* ==================================== */}
        <BentoTile
          index={6}
          area="3 / 1 / span 1 / span 6"
          focused={focused}
          setFocused={setFocused}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              p: 3,
            }}
          >
            <ProfileContactsCarousel user={user} />
          </Box>
        </BentoTile>

        {/* ==================================== */}
        {/* FOOTER STATS (Span 12) - Unten */}
        {/* ==================================== */}
        <BentoTile
          index={7}
          area="5 / 1 / span 1 / span 12"
          focused={focused}
          setFocused={setFocused}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              p: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <StatItem
                label="Profile Completeness"
                value="92%"
                color="#4CAF50"
              />
              <StatItem label="Security Score" value="98/100" color="#2196F3" />
              <StatItem label="Data Points" value="247" color="#9C27B0" />
              <StatItem label="Last Updated" value="Today" color="#FF9800" />
            </Box>
            <Stack>
              <Typography variant="caption" color="text.secondary">
                Profile ID: {user?.id?.slice(0, 8).toUpperCase()}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                since {new Date(user?.createdAt).toLocaleDateString()}
              </Typography>
            </Stack>
          </Box>
        </BentoTile>
      </Box>
    </Container>
  );
}

function StatItem({ label, value, color }: { 
  label: string; 
  value: string; 
  color: string;
}) {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5 }}>
        {label}
      </Typography>
      <Typography 
        variant="h6" 
        fontWeight={700}
        sx={{ color }}
      >
        {value}
      </Typography>
    </Box>
  );
}