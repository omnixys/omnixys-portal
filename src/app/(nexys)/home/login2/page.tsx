"use client";

import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Eye, EyeOff, Mail, Sparkles } from "lucide-react";

/* =====================================================
   PUPIL
===================================================== */
function Pupil({
  size = 12,
  maxDistance = 5,
  color = "#2D2D2D",
  forceX,
  forceY,
}: {
  size?: number;
  maxDistance?: number;
  color?: string;
  forceX?: number;
  forceY?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const pos = () => {
    if (!ref.current) return { x: 0, y: 0 };
    if (forceX !== undefined && forceY !== undefined)
      return { x: forceX, y: forceY };

    const r = ref.current.getBoundingClientRect();
    const dx = mouse.x - (r.left + r.width / 2);
    const dy = mouse.y - (r.top + r.height / 2);
    const d = Math.min(Math.sqrt(dx * dx + dy * dy), maxDistance);
    const a = Math.atan2(dy, dx);
    return { x: Math.cos(a) * d, y: Math.sin(a) * d };
  };

  const p = pos();

  return (
    <Box
      ref={ref}
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        bgcolor: color,
        transform: `translate(${p.x}px, ${p.y}px)`,
        transition: "transform .1s ease-out",
      }}
    />
  );
}



/* =====================================================
   EYEBALL
===================================================== */
function EyeBall({
  blinking,
  forceX,
  forceY,
}: {
  blinking?: boolean;
  forceX?: number;
  forceY?: number;
}) {
  return (
    <Box
      sx={{
        width: 18,
        height: blinking ? 2 : 18,
        bgcolor: "white",
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        transition: "all .15s",
      }}
    >
      {!blinking && (
        <Pupil size={7} maxDistance={5} forceX={forceX} forceY={forceY} />
      )}
    </Box>
  );
}

/* =====================================================
   MOUTH
===================================================== */
function Mouth({
  state,
  width = 60,
}: {
  state: "idle" | "error" | "success";
  width?: number;
}) {
  const styles =
    state === "success"
      ? {
          borderBottom: "6px solid #2D2D2D",
          borderRadius: "0 0 999px 999px",
        }
      : state === "error"
      ? {
          borderTop: "6px solid #2D2D2D",
          borderRadius: "999px 999px 0 0",
        }
      : {
          height: 6,
          backgroundColor: "#2D2D2D",
          borderRadius: 999,
        };

  return (
    <Box
      sx={{
        width,
        height: 12,
        transition: "all .3s ease",
        ...styles,
      }}
    />
  );
}


/* =====================================================
   MAIN PAGE
===================================================== */
export default function LoginCharactersMuiFull() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [typing, setTyping] = useState(false);
  const [lookingAtEachOther, setLookingAtEachOther] = useState(false);
  const [purplePeek, setPurplePeek] = useState(false);
  const [blinkPurple, setBlinkPurple] = useState(false);
  const [blinkBlack, setBlinkBlack] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [authState, setAuthState] = useState<"idle" | "error" | "success">(
    "idle"
  );

  const passwordVisible = showPw && password.length > 0;



  const purpleRef = useRef<HTMLDivElement>(null);
  const blackRef = useRef<HTMLDivElement>(null);
  const yellowRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);

  /* Mouse tracking */
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* Blinking */
  useEffect(() => {
    const purple = setInterval(() => {
      setBlinkPurple(true);
      setTimeout(() => setBlinkPurple(false), 120);
    }, 3500 + Math.random() * 2000);

    const black = setInterval(() => {
      setBlinkBlack(true);
      setTimeout(() => setBlinkBlack(false), 120);
    }, 3800 + Math.random() * 2000);

    return () => {
      clearInterval(purple);
      clearInterval(black);
    };
  }, []);

  /* Typing → schauen sich an */
  useEffect(() => {
    if (typing) {
      setLookingAtEachOther(true);
      const t = setTimeout(() => setLookingAtEachOther(false), 800);
      return () => clearTimeout(t);
    }
  }, [typing]);

  /* Purple peek when password visible */
  useEffect(() => {
    if (password && showPw) {
      const i = setInterval(() => {
        setPurplePeek(true);
        setTimeout(() => setPurplePeek(false), 600);
      }, 2500);
      return () => clearInterval(i);
    }
  }, [password, showPw]);

  const calc = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return { fx: 0, fy: 0, skew: 0 };
    const r = ref.current.getBoundingClientRect();
    const dx = mouse.x - (r.left + r.width / 2);
    const dy = mouse.y - (r.top + r.height / 3);
    return {
      fx: Math.max(-15, Math.min(15, dx / 20)),
      fy: Math.max(-10, Math.min(10, dy / 30)),
      skew: Math.max(-6, Math.min(6, -dx / 120)),
    };
  };

  const purple = calc(purpleRef);
  const black = calc(blackRef);
  const yellow = calc(yellowRef);
  const orange = calc(orangeRef);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== "erik@gmail.com" || password !== "1234") {
      setError("Invalid email or password");
      setAuthState("error");
    } else {
      setError("");
      setAuthState("success");
    }

  };

  const emotionSkew =
    authState === "error" ? -8 : authState === "success" ? 4 : 0;


  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: { lg: "1fr 1fr" },
      }}
    >
      <style jsx global>{`
        @keyframes celebrate {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-12px);
          }
        }
      `}</style>

      {/* LEFT */}
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          p: 6,
          color: "white",
          background: "linear-gradient(135deg,#4f46e5,#4338ca)",
        }}
      >
        <Box display="flex" gap={1} alignItems="center">
          <Sparkles size={20} />
          <Typography fontWeight={600}>YourBrand</Typography>
        </Box>

        {/* CHARACTERS */}
        <Box position="relative" height={420}>
          {/* PURPLE */}
          <Box
            ref={purpleRef}
            sx={{
              position: "absolute",
              left: 70,
              bottom: 0,
              width: 180,
              height: typing ? 440 : 400,
              bgcolor: "#6C3FF5",
              borderRadius: "10px 10px 0 0",
              transform: `skewX(${purple.skew + emotionSkew}deg)`,
              transition: ".6s",
              zIndex: 1,
              animation:
                authState === "success"
                  ? "celebrate 0.6s ease-in-out infinite alternate"
                  : "none",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                gap: 2,
                left: 45 + purple.fx,
                top: 40 + purple.fy,
              }}
            >
              <EyeBall
                blinking={blinkPurple}
                forceX={
                  passwordVisible
                    ? purplePeek
                      ? 4 // 👁️ peek
                      : -6 // 🙈 wegschauen
                    : authState === "error"
                    ? -4
                    : authState === "success"
                    ? 2
                    : lookingAtEachOther
                    ? 3
                    : undefined
                }
                forceY={
                  passwordVisible
                    ? purplePeek
                      ? 5
                      : -4
                    : authState === "error"
                    ? 6
                    : authState === "success"
                    ? -6
                    : lookingAtEachOther
                    ? 4
                    : undefined
                }
              />

              <EyeBall
                blinking={blinkPurple}
                forceX={
                  passwordVisible
                    ? purplePeek
                      ? 4 // 👁️ peek
                      : -6 // 🙈 wegschauen
                    : authState === "error"
                    ? -4
                    : authState === "success"
                    ? 2
                    : lookingAtEachOther
                    ? 3
                    : undefined
                }
                forceY={
                  passwordVisible
                    ? purplePeek
                      ? 5
                      : -4
                    : authState === "error"
                    ? 6
                    : authState === "success"
                    ? -6
                    : lookingAtEachOther
                    ? 4
                    : undefined
                }
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: 80,
                left: 60,
              }}
            >
              <Mouth state={authState} width={50} />
            </Box>
          </Box>

          {/* BLACK */}
          <Box
            ref={blackRef}
            sx={{
              position: "absolute",
              left: 240,
              bottom: 0,
              width: 120,
              height: 310,
              bgcolor: "#2D2D2D",
              borderRadius: "8px 8px 0 0",
              transform: `skewX(${purple.skew + emotionSkew}deg)`,
              transition: ".6s",
              zIndex: 2,
              animation:
                authState === "success"
                  ? "celebrate 0.6s ease-in-out infinite alternate"
                  : "none",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                gap: 1.5,
                left: 26 + black.fx,
                top: 32 + black.fy,
              }}
            >
              <EyeBall
                blinking={blinkBlack}
                forceX={passwordVisible ? -6 : undefined}
                forceY={
                  passwordVisible
                    ? -4
                    : authState === "error"
                    ? 6
                    : authState === "success"
                    ? -6
                    : undefined
                }
              />

              <EyeBall
                blinking={blinkBlack}
                forceX={passwordVisible ? -6 : undefined}
                forceY={
                  passwordVisible
                    ? -4
                    : authState === "error"
                    ? 6
                    : authState === "success"
                    ? -6
                    : undefined
                }
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: 80,
                left: 30,
              }}
            >
              <Mouth state={authState} width={35} />
            </Box>
          </Box>

          {/* ORANGE */}
          <Box
            ref={orangeRef}
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 240,
              height: 200,
              bgcolor: "#FF9B6B",
              borderRadius: "120px 120px 0 0",
              transform: `skewX(${purple.skew + emotionSkew}deg)`,
              transition: ".6s",
              zIndex: 3,
              animation:
                authState === "success"
                  ? "celebrate 0.6s ease-in-out infinite alternate"
                  : "none",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                gap: 2,
                left: 82 + orange.fx,
                top: 90 + orange.fy,
              }}
            >
              <Pupil
                forceX={passwordVisible ? -5 : undefined}
                forceY={
                  passwordVisible
                    ? -4
                    : authState === "error"
                    ? 6
                    : authState === "success"
                    ? -6
                    : undefined
                }
              />

              <Pupil
                forceX={passwordVisible ? -5 : undefined}
                forceY={
                  passwordVisible
                    ? -4
                    : authState === "error"
                    ? 6
                    : authState === "success"
                    ? -6
                    : undefined
                }
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: 120,
                left: 90,
              }}
            >
              <Mouth state={authState} width={60} />
            </Box>
          </Box>

          {/* YELLOW */}
          <Box
            ref={yellowRef}
            sx={{
              position: "absolute",
              left: 310,
              bottom: 0,
              width: 140,
              height: 230,
              bgcolor: "#E8D754",
              borderRadius: "70px 70px 0 0",
              transform: `skewX(${purple.skew + emotionSkew}deg)`,
              transition: ".6s",
              zIndex: 4,
              animation:
                authState === "success"
                  ? "celebrate 0.6s ease-in-out infinite alternate"
                  : "none",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                gap: 1.5,
                left: 52 + yellow.fx,
                top: 40 + yellow.fy,
              }}
            >
              <Pupil
                forceX={passwordVisible ? -5 : undefined}
                forceY={
                  passwordVisible
                    ? -4
                    : authState === "error"
                    ? 6
                    : authState === "success"
                    ? -6
                    : undefined
                }
              />

              <Pupil
                forceX={passwordVisible ? -5 : undefined}
                forceY={
                  passwordVisible
                    ? -4
                    : authState === "error"
                    ? 6
                    : authState === "success"
                    ? -6
                    : undefined
                }
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: 90,
                left: 40,
              }}
            >
              <Mouth state={authState} width={60} />
            </Box>
          </Box>
        </Box>

        <Typography variant="caption">Privacy · Terms · Contact</Typography>
      </Box>

      {/* RIGHT */}
      <Box display="flex" alignItems="center" justifyContent="center" p={4}>
        <Box width={420}>
          <Typography variant="h4" fontWeight={700} mb={1}>
            Welcome back
          </Typography>
          <Typography color="text.secondary" mb={4}>
            Please enter your details
          </Typography>

          <form onSubmit={submit}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setTyping(true)}
              onBlur={() => setTyping(false)}
            />

            <TextField
              fullWidth
              label="Password"
              margin="normal"
              type={showPw ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setShowPw(!showPw)}>
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </IconButton>
                ),
              }}
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Remember for 30 days"
            />

            {error && (
              <Box mt={2} color="error.main">
                {error}
              </Box>
            )}

            <Button fullWidth size="large" sx={{ mt: 3 }} type="submit">
              Log in
            </Button>
          </form>

          <Button
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
            startIcon={<Mail size={18} />}
          >
            Log in with Google
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
