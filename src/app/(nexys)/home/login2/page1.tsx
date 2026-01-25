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

/* =======================
   PUPIL
======================= */
interface PupilProps {
  size?: number;
  maxDistance?: number;
  color?: string;
  forceX?: number;
  forceY?: number;
}

const Pupil = ({
  size = 12,
  maxDistance = 5,
  color = "#2D2D2D",
  forceX,
  forceY,
}: PupilProps) => {
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
};

/* =======================
   EYEBALL
======================= */
interface EyeBallProps {
  blinking?: boolean;
  forceX?: number;
  forceY?: number;
}

const EyeBall = ({ blinking, forceX, forceY }: EyeBallProps) => (
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

/* =======================
   MAIN PAGE
======================= */
export default function LoginWithCharactersMui() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [typing, setTyping] = useState(false);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const i = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 120);
    }, 3500);
    return () => clearInterval(i);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== "erik@gmail.com" || password !== "1234") {
      setError("Invalid email or password");
    } else {
      alert("Login successful");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: { lg: "1fr 1fr" },
      }}
    >
      {/* LEFT */}
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          p: 6,
          color: "white",
          background:
            "linear-gradient(135deg, rgba(99,102,241,.95), rgba(79,70,229,.9))",
        }}
      >
        <Box display="flex" gap={1} alignItems="center">
          <Sparkles size={20} />
          <Typography fontWeight={600}>YourBrand</Typography>
        </Box>

        {/* CHARACTERS */}
        <Box position="relative" height={400}>
          <Box
            sx={{
              position: "absolute",
              left: 80,
              bottom: 0,
              width: 180,
              height: typing ? 440 : 400,
              bgcolor: "#6C3FF5",
              borderRadius: "10px 10px 0 0",
              transition: ".6s",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                position: "absolute",
                top: 40,
                left: 50,
              }}
            >
              <EyeBall blinking={blink} />
              <EyeBall blinking={blink} />
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: 260,
              bottom: 0,
              width: 120,
              height: 310,
              bgcolor: "#2D2D2D",
              borderRadius: "8px 8px 0 0",
              zIndex: 2,
              transition: ".6s",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                position: "absolute",
                top: 32,
                left: 28,
              }}
            >
              <EyeBall blinking={blink} />
              <EyeBall blinking={blink} />
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 240,
              height: 200,
              bgcolor: "#FF9B6B",
              borderRadius: "120px 120px 0 0",
              zIndex: 3,
              transition: ".6s",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                position: "absolute",
                top: 90,
                left: 80,
              }}
            >
              <Pupil />
              <Pupil />
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: 320,
              bottom: 0,
              width: 140,
              height: 230,
              bgcolor: "#E8D754",
              borderRadius: "70px 70px 0 0",
              zIndex: 4,
              transition: ".6s",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                position: "absolute",
                top: 40,
                left: 52,
              }}
            >
              <Pupil />
              <Pupil />
            </Box>

            {/* Mouth */}
            <Box
              sx={{
                position: "absolute",
                width: 80,
                height: 4,
                bgcolor: "#2D2D2D",
                borderRadius: 2,
                top: 88,
                left: 30,
              }}
            />
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

