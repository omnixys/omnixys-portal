"use client";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import DialogTransition from "@/components/checkpoint/invitationList/DialogTransition";

export interface VisionOSInfoSheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  lines: string[];
}

export function VisionOSInfoSheet({
  open,
  onClose,
  title,
  lines,
}: VisionOSInfoSheetProps) {
  return (
    <Dialog
      open={open}
      TransitionComponent={DialogTransition}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 1, mb: 2 }}>
          {lines.map((l, i) => (
            <Typography key={i} sx={{ mb: 0.8 }}>
              • {l}
            </Typography>
          ))}
        </Box>

        <Button
          variant="contained"
          onClick={onClose}
          fullWidth
          sx={{ mt: 2, borderRadius: 3 }}
        >
          Verstanden
        </Button>
      </DialogContent>
    </Dialog>
  );
}
