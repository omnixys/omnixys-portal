// components/cart/AddressSelect.tsx
"use client";

import {
  Box,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { AddressDialog } from "./AddressDialog";

export function AddressSelect() {
  const [open, setOpen] = useState(false);
  const [addresses, setAddresses] = useState<any[]>([
    { id: 1, label: "Home – Berlin" },
    { id: 2, label: "Office – Munich" },
  ]);

  return (
    <>
      <Typography fontSize={13} fontWeight={600} mb={1}>
        SELECT ADDRESS
      </Typography>

      <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
        <TextField select size="small" fullWidth>
          {addresses.map((a) => (
            <MenuItem key={a.id} value={a.id}>
              {a.label}
            </MenuItem>
          ))}
        </TextField>

        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            border: "1px solid #ddd",
            borderRadius: 2,
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>

      <AddressDialog
        open={open}
        onClose={() => setOpen(false)}
        onSave={(addr) =>
          setAddresses((prev) => [
            ...prev,
            { id: Date.now(), label: `${addr.street}, ${addr.city}` },
          ])
        }
      />
    </>
  );
}
