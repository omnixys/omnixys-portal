// -------------------------------------------------------------
// Apple Theme v2 (Optimized) + Omnixys Color Presets
// -------------------------------------------------------------
import { PaletteMode, ThemeOptions, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";

// -------------------------------------------------------------
// Apple Light/Dark System Colors
// -------------------------------------------------------------
const appleLight = {
  gray1: "#8E8E93",
  gray2: "#AEAEB2",
  gray3: "#C7C7CC",
  gray4: "#D1D1D6",
  gray5: "#E5E5EA",
  gray6: "#F2F2F7",
  systemBackground: "#FFFFFF",
  secondarySystemBackground: "#F7F7F7",
  tertiarySystemBackground: "#F2F2F7",
  label: "#000000",
  secondaryLabel: "rgba(0,0,0,0.55)",
  tertiaryLabel: "rgba(0,0,0,0.25)",
  quaternaryLabel: "rgba(0,0,0,0.18)",
  separator: "rgba(60,60,67,0.36)",
  opaqueSeparator: "#C6C6C8",
};

const appleDark = {
  gray1: "#8E8E93",
  gray2: "#636366",
  gray3: "#48484A",
  gray4: "#3A3A3C",
  gray5: "#2C2C2E",
  gray6: "#1C1C1E",
  systemBackground: "#000000",
  secondarySystemBackground: "#1C1C1E",
  tertiarySystemBackground: "#2C2C2E",
  label: "#FFFFFF",
  secondaryLabel: "rgba(255,255,255,0.55)",
  tertiaryLabel: "rgba(255,255,255,0.25)",
  quaternaryLabel: "rgba(255,255,255,0.18)",
  separator: "rgba(84,84,88,0.65)",
  opaqueSeparator: "#38383A",
};

// -------------------------------------------------------------
// Omnixys Color Presets (Light + Dark)
// -------------------------------------------------------------
export type OmnixysColorScheme =
  | "original"
  | "red"
  | "green"
  | "yellow"
  | "blue";

type ColorPreset = {
  light: {
    primary: string;
    secondary: string;
    backgroundDefault: string;
    backgroundPaper: string;
    textPrimary: string;
    textSecondary: string;
    error: string;
    success: string;
  };
  dark: {
    primary: string;
    secondary: string;
    backgroundDefault: string;
    backgroundPaper: string;
    textPrimary: string;
    textSecondary: string;
    error: string;
    success: string;
  };
};

export const omnixysPresets: Record<OmnixysColorScheme, ColorPreset> = {
  original: {
    light: {
      primary: "#6A4BBC",
      secondary: "#4E3792",
      backgroundDefault: "#F8F8FC",
      backgroundPaper: "#FFFFFF",
      textPrimary: "#312E81",
      textSecondary: "#6B7280",
      error: "#F87171",
      success: "#A3E635",
    },
    dark: {
      primary: "#6A4BBC",
      secondary: "#4E3792",
      backgroundDefault: "#121212",
      backgroundPaper: "#1E1E1E",
      textPrimary: "#EDEDED",
      textSecondary: "#BFBFC7",
      error: "#F87171",
      success: "#A3E635",
    },
  },
  red: {
    light: {
      primary: "#DC2626",
      secondary: "#991B1B",
      backgroundDefault: "#FFF1F2",
      backgroundPaper: "#FFE4E6",
      textPrimary: "#450A0A",
      textSecondary: "#7F1D1D",
      error: "#DC2626",
      success: "#4ADE80",
    },
    dark: {
      primary: "#DC2626",
      secondary: "#991B1B",
      backgroundDefault: "#1C0B0B",
      backgroundPaper: "#2B0E0E",
      textPrimary: "#FEE2E2",
      textSecondary: "#FCA5A5",
      error: "#DC2626",
      success: "#4ADE80",
    },
  },
  green: {
    light: {
      primary: "#16A34A",
      secondary: "#065F46",
      backgroundDefault: "#F0FDF4",
      backgroundPaper: "#DCFCE7",
      textPrimary: "#064E3B",
      textSecondary: "#065F46",
      error: "#DC2626",
      success: "#16A34A",
    },
    dark: {
      primary: "#16A34A",
      secondary: "#065F46",
      backgroundDefault: "#0F172A",
      backgroundPaper: "#1E293B",
      textPrimary: "#D1FAE5",
      textSecondary: "#A7F3D0",
      error: "#F87171",
      success: "#16A34A",
    },
  },
  yellow: {
    light: {
      primary: "#F59E0B",
      secondary: "#B45309",
      backgroundDefault: "#FFFBEB",
      backgroundPaper: "#FEF3C7",
      textPrimary: "#78350F",
      textSecondary: "#92400E",
      error: "#DC2626",
      success: "#A3E635",
    },
    dark: {
      primary: "#F59E0B",
      secondary: "#B45309",
      backgroundDefault: "#1C1917",
      backgroundPaper: "#292524",
      textPrimary: "#FEF3C7",
      textSecondary: "#FCD34D",
      error: "#F87171",
      success: "#A3E635",
    },
  },
  blue: {
    light: {
      primary: "#2563EB",
      secondary: "#1E40AF",
      backgroundDefault: "#EFF6FF",
      backgroundPaper: "#FFFFFF",
      textPrimary: "#1E3A8A",
      textSecondary: "#3B82F6",
      error: "#DC2626",
      success: "#22C55E",
    },
    dark: {
      primary: "#2563EB",
      secondary: "#1E40AF",
      backgroundDefault: "#0F172A",
      backgroundPaper: "#1E293B",
      textPrimary: "#DBEAFE",
      textSecondary: "#93C5FD",
      error: "#DC2626",
      success: "#22C55E",
    },
  },
};

// -------------------------------------------------------------
// Extend MUI Palette Types
// -------------------------------------------------------------
declare module "@mui/material/styles" {
  interface Palette {
    apple: typeof appleLight;
    omnixys: ColorPreset["light"];
  }

  interface PaletteOptions {
    apple?: typeof appleLight;
    omnixys?: ColorPreset["light"];
  }
}

// -------------------------------------------------------------
// Apple + Omnixys Theme Builder
// -------------------------------------------------------------
export const createAppTheme = (
  mode: PaletteMode,
  scheme: OmnixysColorScheme = "original"
) => {
  const apple = mode === "light" ? appleLight : appleDark;
  const omni = omnixysPresets[scheme][mode];

  const base: ThemeOptions = {
    palette: {
      mode,
      primary: { main: omni.primary },
      secondary: { main: omni.secondary },
      background: {
        default: apple.secondarySystemBackground,
        paper: apple.systemBackground,
      },
      text: {
        primary: apple.label,
        secondary: apple.secondaryLabel,
      },
      divider: apple.separator,

      // Custom namespaces
      apple,
      omnixys: omni,
    },

    typography: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', Inter, Roboto, sans-serif",
      h1: { fontSize: "2rem", fontWeight: 700 },
      h2: { fontSize: "1.6rem", fontWeight: 700 },
      h3: { fontSize: "1.3rem", fontWeight: 600 },
      h4: { fontSize: "1.1rem", fontWeight: 600 },
      body1: { fontSize: "1rem" },
      body2: { fontSize: "0.9rem" },
      button: { textTransform: "none", fontWeight: 600 },
    },

    shape: { borderRadius: 16 },
    spacing: 8,

    // iOS Smooth Transitions
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
      },
      easing: {
        easeInOut: "cubic-bezier(.4,0,.2,1)",
      },
    },

    // Component overrides (Apple design system)
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ":root": {
            "--seat-selected": omni.primary,
            "--seat-highlight": omni.secondary,
          },
          "@keyframes accentPulseAnimation": {
            "0%": {
              width: "0px",
              height: "0px",
              opacity: 0.35,
            },
            "100%": {
              width: "200vmax",
              height: "200vmax",
              opacity: 0,
            },
          },
          body: {
            transition:
              "background-color 0.3s cubic-bezier(.4,0,.2,1), color 0.3s cubic-bezier(.4,0,.2,1)",
          },
          "*": {
            transitionProperty:
              "background-color, color, border-color, box-shadow",
            transitionDuration: "0.3s",
            transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            background:
              mode === "light"
                ? "rgba(255,255,255,0.7)"
                : "rgba(28,28,30,0.72)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            boxShadow:
              mode === "light"
                ? "0 6px 18px rgba(0,0,0,0.07)"
                : "0 6px 20px rgba(0,0,0,0.28)",
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          },
        },
      },
    },
  };

  return createTheme(deepmerge(base, {}));
};

export type AppThemeMode = "light" | "dark";
