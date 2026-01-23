// components/cart/AddressDialog.tsx
"use client";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface AddressDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (address: any) => void;
}

export function AddressDialog({ open, onClose, onSave }: AddressDialogProps) {
  const [form, setForm] = useState({
    fullName: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New Address</DialogTitle>

      <DialogContent>
        <Box sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid sx={{ xs: 12 }}>
              <TextField
                label="Full Name"
                fullWidth
                size="small"
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
              />
            </Grid>

            <Grid sx={{ xs: 12 }}>
              <TextField
                label="Street Address"
                fullWidth
                size="small"
                value={form.street}
                onChange={(e) => handleChange("street", e.target.value)}
              />
            </Grid>

            <Grid sx={{ xs: 6 }}>
              <TextField
                label="City"
                fullWidth
                size="small"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </Grid>

            <Grid sx={{ xs: 6 }}>
              <TextField
                label="Postal Code"
                fullWidth
                size="small"
                value={form.postalCode}
                onChange={(e) => handleChange("postalCode", e.target.value)}
              />
            </Grid>

            <Grid sx={{ xs: 12 }}>
              <TextField
                label="Country"
                fullWidth
                size="small"
                value={form.country}
                onChange={(e) => handleChange("country", e.target.value)}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 4,
            }}
          >
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>

            <Button
              variant="contained"
              onClick={handleSave}
              sx={{
                backgroundColor: "#f36c21",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#e05f1c" },
              }}
            >
              Save Address
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
