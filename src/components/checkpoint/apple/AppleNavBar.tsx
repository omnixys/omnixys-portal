"use client";

import React, { JSX } from "react";
import { AppBar, Box, IconButton, styled, Toolbar, Typography, useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface AppleNavBarProps {
  title?: string;
  subtitle?: string;
  leftActions?: React.ReactNode;
  rightActions?: React.ReactNode;
  onBack?: () => void;
}

const BlurAppBar = styled(AppBar)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? "rgba(255,255,255,0.6)"
      : "rgba(28,28,30,0.7)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  color: theme.palette.text.primary,
  boxShadow: "none",
}));

/**
 * Apple-style navigation bar, using iOS color system from theme.palette.apple
 */
export function AppleNavBar({
  title,
  subtitle,
  leftActions,
  rightActions,
  onBack,
}: AppleNavBarProps): JSX.Element {
  const theme = useTheme();
  const apple = theme.palette.apple;

  return (
    // <BlurAppBar position="sticky">
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 2000,
          height: "56px",
          display: "flex",
          alignItems: "center",
          px: 2,
          pt: "env(safe-area-inset-top)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(255,255,255,0.75)"
              : "rgba(0,0,0,0.35)",
          borderBottom: `1px solid ${apple.separator}`,
          transition: "background-color 0.3s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <Toolbar
          sx={{ minHeight: "54px", display: "flex", alignItems: "center" }}
        >
          {onBack && (
            <IconButton
              edge="start"
              onClick={onBack}
              sx={{ mr: 1 }}
              aria-label="Zurück"
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}
          {/* LEFT ACTIONS */}
          <Box
            sx={{
              minWidth: "64px",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {leftActions}
          </Box>

          {/* CENTER TITLE */}
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {title && (
              <Typography
                variant="h3"
                sx={{
                  fontSize: "17px",
                  fontWeight: 600,
                  color: apple.label,
                  mr: onBack ? "40px" : 0,
                }}
              >
                {title}
              </Typography>
            )}

            {subtitle && (
              <Typography
                variant="body2"
                sx={{
                  mt: "-2px",
                  opacity: 0.7,
                  color: apple.secondaryLabel,
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>

          {/* RIGHT ACTIONS */}
          <Box
            sx={{
              minWidth: "64px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1.2,
            }}
          >
            {rightActions}
          </Box>
        </Toolbar>
      </Box>
    // </BlurAppBar>
  );
}
