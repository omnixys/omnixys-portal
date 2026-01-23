// components/seller/AddProductForm.tsx
"use client";

import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { ImageUploadGrid } from "./ImageUploadGrid";

export function AddProductForm() {
  return (
    <Box sx={{ maxWidth: 700 }}>
      <Typography fontSize={18} fontWeight={700} mb={3}>
        Add Product
      </Typography>

      <Typography fontSize={14} mb={1}>
        Product Image
      </Typography>
      
      <ImageUploadGrid
        onChange={(files) => {
          // files: File[]
          console.log("Selected images:", files);
        }}
      />

      <Box mt={4}>
        <Typography fontSize={14}>Product Name</Typography>
        <TextField fullWidth placeholder="Type here" />
      </Box>

      <Box mt={3}>
        <Typography fontSize={14}>Product Description</Typography>
        <TextField fullWidth multiline rows={4} placeholder="Type here" />
      </Box>

      <Box mt={3} sx={{ display: "flex", gap: 2 }}>
        <TextField select fullWidth label="Category" defaultValue="Earphone">
          <MenuItem value="Earphone">Earphone</MenuItem>
          <MenuItem value="Laptop">Laptop</MenuItem>
          <MenuItem value="Phone">Phone</MenuItem>
        </TextField>

        <TextField fullWidth label="Product Price" type="number" />
        <TextField fullWidth label="Offer Price" type="number" />
      </Box>

      <Button
        sx={{
          mt: 4,
          backgroundColor: "#f36c21",
          px: 6,
          "&:hover": { backgroundColor: "#e65c10" },
        }}
        variant="contained"
      >
        ADD
      </Button>
    </Box>
  );
}
