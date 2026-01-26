"use client";

import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar />

      <Box flex={1} bgcolor="background.default">
        <Topbar />

        <Box p={4}>{children}</Box>
      </Box>
    </Box>
  );
}
