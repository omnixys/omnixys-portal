import { createTheme } from "@mui/material/styles";
import { baseTheme } from "./base";

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: { main: "#3B82F6" },
    background: {
      default: "#0B1220",
      paper: "#111827",
    },
    text: {
      primary: "#E5E7EB",
      secondary: "#9CA3AF",
    },
  },
});
