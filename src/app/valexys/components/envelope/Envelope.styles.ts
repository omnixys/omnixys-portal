import { SxProps, Theme } from "@mui/material";

export const envelopeContainer: SxProps<Theme> = {
  position: "relative",
  borderRadius: 3,
  background: "linear-gradient(145deg, #f6f1e6, #ebe4d6)",
  boxShadow:
    "0 20px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
  //overflow: "hidden",
};

export const backPanel: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, #f7f2e9, #efe7d9)",
};

export const frontFlap: SxProps<Theme> = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "60%",
  background: "linear-gradient(160deg, #efe7d8, #e6ddcc)",
  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
  boxShadow: "0 -1px 0 rgba(255,255,255,0.4)",
  zIndex: 3,
};

export const sidePanel: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, #f7f2e9, #efe7d9)",
  zIndex: 2,
};

export const topFlap: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "55%",
  background: "linear-gradient(160deg, #f8f4eb, #e9e1d3)",
  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
  transformOrigin: "top center",
};

export const envelopeWrapperSx = {
  position: "relative",
  width: {
    xs: "92vw",
    sm: 420,
    md: 520,
  },
  height: {
    xs: "60vw",
    sm: 280,
    md: 340,
  },
  maxWidth: 560,
  mx: "auto",
  touchAction: "manipulation",
};
