import { createTheme } from "@mui/material/styles";

export const visionTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0A84FF",
    },
    background: {
      default: "#F5F7FA",
      paper: "rgba(255,255,255,0.75)",
    },
    text: {
      primary: "#0B0B0F",
      secondary: "#5F6368",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI"`,
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    body1: {
      fontSize: 15,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(20px)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});
