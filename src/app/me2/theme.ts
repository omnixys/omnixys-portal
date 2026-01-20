import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    background: {
      default: "#0B0B0F", // bg-black-100 (exakt reproduzierbar)
      paper: "#111118",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A1A1AA",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },
});
