"use client";

import { Box } from "@mui/material";

import { navItems } from "@/data";

import Hero from "@/components/me2/Hero";
import Grid from "@/components/me2/Grid";
import Footer from "@/components/me2/Footer";
import Clients from "@/components/me2/Clients";
import Approach from "@/components/me2/Approach";
import Experience from "@/components/me2/Experience";
import RecentProjects from "@/components/me2/RecentProjects";
import { FloatingNav } from "@/components/me2/FloatingNavbar";
import { JSX } from "react";

const Home = (): JSX.Element => {
  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        backgroundColor: "background.default", // bg-black-100
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        mx: "auto",
        px: {
          xs: 2.5, // px-5 (5 * 8px = 40px → 2.5 * 16)
          sm: 5, // px-10
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px", // max-w-7xl
        }}
      >
        <FloatingNav navItems={navItems} />

        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
