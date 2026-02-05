// -------------------------------------------------------------
// Valenxys – MUI Theme
// Romantic / Soft / Modern (Final)
// -------------------------------------------------------------

import { createTheme } from "@mui/material/styles";

// -------------------------------------------------------------
// Color Palette
// -------------------------------------------------------------
const colors = {
  rose: "#d81b60",
  roseLight: "#f8bbd0",
  roseSoft: "#fde4ec",
  wine: "#880e4f",

  paper: "rgba(255,255,255,0.85)",
  paperStrong: "rgba(255,255,255,0.92)",

  background: "#fff6f8",

  textPrimary: "#3a0b1f",
  textSecondary: "#6d3a4b",
};

// -------------------------------------------------------------
// Theme
// -------------------------------------------------------------
export const theme = createTheme({
  shape: {
    borderRadius: 20,
  },

  palette: {
    mode: "light",

    primary: {
      main: colors.rose,
      contrastText: "#ffffff",
    },

    secondary: {
      main: colors.roseLight,
      contrastText: colors.textPrimary,
    },

    background: {
      default: colors.background,
      paper: colors.paper,
    },

    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },

  typography: {
    fontFamily: "'Playfair Display', serif",
    color: colors.textPrimary,

    h1: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontWeight: 600,
    },

    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.65,
    },
    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.55,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.04em",
    },
  },

  components: {
    // ---------------------------------------------------------
    // CssBaseline
    // ---------------------------------------------------------
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      },
    },

    // ---------------------------------------------------------
    // Button
    // ---------------------------------------------------------
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "12px 30px",
          boxShadow: "none",
          transition: "all 0.25s ease",
        },

        containedPrimary: {
          background: `linear-gradient(135deg, ${colors.rose}, ${colors.wine})`,
          boxShadow: "0 12px 30px rgba(216,27,96,0.35)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 18px 45px rgba(216,27,96,0.45)",
          },
        },

        outlined: {
          borderColor: colors.roseLight,
          color: colors.textSecondary,
          "&:hover": {
            backgroundColor: colors.roseSoft,
          },
        },
      },
    },

    // ---------------------------------------------------------
    // TextField
    // ---------------------------------------------------------
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            background: colors.paperStrong,
            borderRadius: 18,
          },
        },
      },
    },

    // ---------------------------------------------------------
    // Checkbox
    // ---------------------------------------------------------
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.roseLight,
          "&.Mui-checked": {
            color: colors.rose,
          },
        },
      },
    },

    // ---------------------------------------------------------
    // Paper
    // ---------------------------------------------------------
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiTypography: {
    styleOverrides: {
      h1: {
        background: colors.rose,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      h2: {
        background: colors.rose,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  },
  
  MuiCard: {
    styleOverrides: {
      root: {
        background: "linear-gradient(145deg, rgba(255,240,245,0.95), rgba(255,250,252,0.95))",
        backdropFilter: "blur(14px)",
        borderRadius: 28,
        boxShadow: `
          0 24px 60px rgba(216,27,96,0.16),
          inset 0 1px 0 rgba(255,255,255,0.6),
          0 0 0 1px rgba(255,107,157,0.1)
        `,
        border: "1px solid rgba(255,182,193,0.3)",
      },
    },
  },

  },
});

export default theme;
