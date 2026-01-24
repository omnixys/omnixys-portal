"use client";

import { Box, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useGlobeState } from "../../lib/globe/useGlobeState";

interface Props {
  countries: string[];
}

export function CountriesVisitedCard({ countries }: Props) {
  const { selectedCountry, setCountry } = useGlobeState();
  
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: 2,
        p: 3,
        boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
      }}
    >
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        Countries Visited
      </Typography>

      <Box
        sx={{
          background: "#F1F5FF",
          borderRadius: 1,
          p: 1.5,
          mb: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          You&apos;ve visited {countries.length} countries.
        </Typography>
      </Box>

      <Stack spacing={1}>
        {countries.map((c) => (
          <Box
            key={c}
            onClick={() => setCountry(c)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              background: selectedCountry === c ? "#EEF3FF" : "#FAFAFA",
              borderRadius: 1,
              p: 1,
            }}
          >
            <LocationOnIcon fontSize="small" color="error" />
            <Typography variant="body2">{c}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
