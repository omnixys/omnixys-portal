"use client";

import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function SearchBar() {
  return (
    <TextField
      size="small"
      placeholder="Search Product"
      sx={{
        width: 260,
        "& .MuiOutlinedInput-root": {
          borderRadius: 999,
          bgcolor: "#F5F5F5",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
    />
  );
}
