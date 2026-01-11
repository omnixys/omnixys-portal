"use client";

import {
  Chip,
  Container,
  Stack,
  Typography,
  TextField,
  Paper,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useSecurityGuests } from "./useSecurityGuests";
import { useParams } from "next/navigation";
import BackToEventDetail from "../../../../../components/checkpoint/invitationList/button/BackToEventDetail";
import RefreshArcButton from "../../../../../components/checkpoint/invitationList/RefreshArcButton";



type Filter = "ALL" | "NOT_ARRIVED" | "CHECKED_IN" | "INSIDE" | "OUTSIDE";


export default function SecurityGuestListPage() {
  const theme = useTheme();
  const { id: eventId } = useParams();

  const omni = theme.palette.omnixys;
  const apple = theme.palette.apple;

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("ALL");
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  const { guests, loading, reload } = useSecurityGuests(eventId as string);

  const guestsFiltered = useMemo(() => {
    return guests.filter((g) => {
      const matchesSearch =
        g.name.toLowerCase().includes(search.toLowerCase()) ||
        String(g.seat?.number ?? "")
          .toLowerCase()
          .includes(search.toLowerCase());


      const matchesFilter =
        filter === "ALL" ||
        (filter === "NOT_ARRIVED" && g.status === "NOT_ARRIVED") ||
        (filter === "CHECKED_IN" && g.status === "CHECKED_IN") ||
        (filter === "INSIDE" && g.presence === "INSIDE") ||
        (filter === "OUTSIDE" && g.presence === "OUTSIDE");


      return matchesSearch && matchesFilter;
    });
  }, [search, filter, guests]);
  
  const counters = useMemo(() => {
    return {
      total: guestsFiltered.length,
      checkedIn: guestsFiltered.filter((g) => g.status === "CHECKED_IN").length,
      inside: guestsFiltered.filter((g) => g.presence === "INSIDE").length,
      outside: guestsFiltered.filter((g) => g.presence === "OUTSIDE").length,
    };
  }, [guestsFiltered]);


  return (
    <Container maxWidth="lg">
      <Stack spacing={4}>
        <BackToEventDetail />

        {/* Sticky Header */}
        <Paper
          elevation={0}
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 20,
            backdropFilter: "blur(18px)",
            backgroundColor: apple.background + "ee",
            border: `1px solid ${omni.secondary}`,
            borderRadius: 3,
            px: 3,
            py: 2,
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ md: "center" }}
          >
            {/* Counters */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography fontWeight={700} color={apple.label}>
                Gäste
              </Typography>

              <Divider orientation="vertical" flexItem />

              <Chip
                label={`Gesamt: ${counters.total}`}
                sx={{ fontWeight: 700 }}
              />

              <Chip
                label={`Eingecheckt: ${counters.checkedIn}`}
                sx={{
                  fontWeight: 700,
                  bgcolor: omni.success + "22",
                  color: omni.success,
                }}
              />

              <Chip
                label={`Drinnen: ${counters.inside}`}
                sx={{
                  fontWeight: 700,
                  bgcolor: omni.primary + "22",
                  color: omni.primary,
                }}
              />

              <Chip
                label={`Draußen: ${counters.outside}`}
                sx={{
                  fontWeight: 700,
                  bgcolor: apple.quaternaryLabel + "22",
                  color: apple.quaternaryLabel,
                }}
              />
            </Stack>

            {/* Actions */}
            <Stack direction="row" spacing={1} alignItems="center">
              <RefreshArcButton onReload={reload} />
            </Stack>
          </Stack>
        </Paper>

        {/* Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} color={apple.label}>
            Gästeliste – Security
          </Typography>
          <Typography color={apple.secondaryLabel}>
            Live-Übersicht über Gäste, Sitzplätze und Aufenthaltsstatus
          </Typography>
        </Stack>

        {/* Controls */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ md: "center" }}
        >
          <TextField
            placeholder="Name oder Sitzplatz suchen …"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
          />

          <FormControl sx={{ minWidth: 220 }}>
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value as Filter)}
            >
              <MenuItem value="ALL">Alle Gäste</MenuItem>
              <MenuItem value="NOT_ARRIVED">Noch nicht angekommen</MenuItem>
              <MenuItem value="CHECKED_IN">Eingecheckt</MenuItem>
              <MenuItem value="INSIDE">Drinnen</MenuItem>
              <MenuItem value="OUTSIDE">Draußen</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Switch
                checked={highContrast}
                onChange={(e) => setHighContrast(e.target.checked)}
              />
            }
            label="High Contrast"
          />

          <FormControlLabel
            control={
              <Switch
                checked={largeText}
                onChange={(e) => setLargeText(e.target.checked)}
              />
            }
            label="Große Schrift"
          />
        </Stack>

        {/* List */}
        <Stack spacing={2}>
          {guestsFiltered.map((guest, index) => {
            const statusColor =
              guest.status === "CHECKED_IN" ? omni.success : omni.error;

            const presenceColor =
              guest.presence === "INSIDE"
                ? omni.primary
                : apple.quaternaryLabel;

            return (
              <motion.div
                key={guest.ticketId}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: highContrast
                      ? omni.backgroundDefault
                      : omni.backgroundPaper,
                    border: highContrast
                      ? `2px solid ${omni.primary}`
                      : `1px solid ${omni.secondary}`,
                  }}
                >
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={2}
                    justifyContent="space-between"
                    alignItems={{ md: "center" }}
                  >
                    <Stack>
                      <Typography
                        fontWeight={700}
                        fontSize={largeText ? 22 : 16}
                        color={apple.label}
                      >
                        {guest.name}
                      </Typography>

                      {guest.seat ? (
                        <Stack direction="row" spacing={1} alignItems="center">
                          {guest.seat.section && (
                            <Typography
                              variant="caption"
                              sx={{
                                color: omni.primary,
                                fontWeight: 600,
                              }}
                            >
                              {guest.seat.section}
                            </Typography>
                          )}

                          {guest.seat.table && (
                            <Typography
                              variant="caption"
                              sx={{
                                color: omni.secondary,
                                fontWeight: 600,
                              }}
                            >
                              {guest.seat.table}
                            </Typography>
                          )}

                          {guest.seat.number && (
                            <Typography
                              sx={{
                                fontWeight: 800,
                                fontSize: largeText ? 16 : 14,
                                color: apple.label,
                              }}
                            >
                              {guest.seat.number}
                            </Typography>
                          )}
                        </Stack>
                      ) : (
                        <Typography color={apple.secondaryLabel}>—</Typography>
                      )}
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <Chip
                        label={
                          guest.status === "CHECKED_IN"
                            ? "Eingecheckt"
                            : "Nicht angekommen"
                        }
                        sx={{
                          bgcolor: statusColor + "22",
                          color: statusColor,
                          fontWeight: 700,
                          fontSize: largeText ? 15 : 13,
                        }}
                      />

                      <Chip
                        label={
                          guest.presence === "INSIDE" ? "Drinnen" : "Draußen"
                        }
                        sx={{
                          bgcolor: presenceColor + "22",
                          color: presenceColor,
                          fontWeight: 700,
                          fontSize: largeText ? 15 : 13,
                        }}
                      />

                      {guest.lastScan && (
                        <Typography
                          fontSize={largeText ? 14 : 12}
                          color={apple.secondaryLabel}
                        >
                          letzter Scan: {guest.lastScan}
                        </Typography>
                      )}
                    </Stack>
                  </Stack>
                </Paper>
              </motion.div>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
}
