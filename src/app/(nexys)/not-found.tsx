"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { JSX } from "react";

export default function NotFoundPage(): JSX.Element {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        // background: `
        //   radial-gradient(
        //     1200px circle at top,
        //     ${theme.palette.primary.main}11,
        //     transparent 60%
        //   )
        // `,
      }}
    >
      <Stack
        spacing={4}
        sx={{
          maxWidth: 520,
          textAlign: "center",
          backdropFilter: "blur(22px)",
          // backgroundColor: theme.palette.apple.systemBackground + "CC",
          borderRadius: 5,
          p: 5,
          boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
        }}
      >
        {/* Headline */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            letterSpacing: -0.5,
            // color: theme.palette.omnixys.textPrimary,
          }}
        >
          Zugriff noch nicht freigeschaltet
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            // color: theme.palette.omnixys.textSecondary,
            lineHeight: 1.6,
          }}
        >
          Diese Seite existiert bereits – ist jedoch für dein Profil aktuell
          noch nicht freigegeben.
          <br />
          <br />
          Mögliche Gründe sind fehlende Berechtigungen, ein noch nicht
          aktiviertes Event oder ein exklusiver Bereich, der dir später zur
          Verfügung gestellt wird.
        </Typography>

        {/* Subtle hint */}
        <Typography
          variant="caption"
          sx={{
            // color: theme.palette.omnixys.textSecondary,
            opacity: 0.8,
          }}
        >
          Wenn du glaubst, dass dies ein Fehler ist, wende dich bitte an den
          Veranstalter oder Administrator.
        </Typography>

        {/* Action */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button
            size="large"
            variant="contained"
            sx={{
              mt: 2,
              px: 4,
              py: 1.4,
              borderRadius: 3,
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Zurück zur Startseite
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
