/**
 * @file ProfilePersonalInfo.tsx
 * @description Futuristic holographic personal information display
 */

"use client";

import {
  Box,
  Stack,
  Typography,
  IconButton,
  alpha,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { User } from "@/types/user/user.type";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TransgenderIcon from "@mui/icons-material/Transgender";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
// import ScanIcon from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";

type Props = {
  user: User;
};

export default function ProfilePersonalInfo({ user }: Props) {
  const theme = useTheme();
  const info = user?.personalInfo;

  const calculateAge = () => {
    if (!info?.birthDate) return null;
    const birth = new Date(info.birthDate);
    const now = new Date();
    return now.getFullYear() - birth.getFullYear();
  };

  return (
    <Box
      sx={{
        borderRadius: 4,
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(135deg, rgba(0,200,255,0.05) 0%, rgba(100,100,255,0.05) 100%)",
        border: "1px solid rgba(0,200,255,0.2)",
        boxShadow: `
          0 0 60px rgba(0,200,255,0.1),
          inset 0 0 20px rgba(0,200,255,0.05)
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Holographic grid effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
          linear-gradient(90deg, transparent 0%, rgba(0,200,255,0.05) 50%, transparent 100%),
          linear-gradient(transparent 0%, rgba(0,200,255,0.05) 50%, transparent 100%)
        `,
          backgroundSize: "50px 50px",
          animation: "scan 4s linear infinite",
          "@keyframes scan": {
            "0%": { transform: "translateY(0px)" },
            "100%": { transform: "translateY(50px)" },
          },
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: -2,
                borderRadius: "50%",
                background: "linear-gradient(45deg, #00c8ff, #0099ff)",
                filter: "blur(8px)",
                opacity: 0.5,
              },
            }}
          >
            <AccountCircleIcon
              sx={{
                fontSize: 32,
                color: "#00c8ff",
                filter: "drop-shadow(0 0 8px rgba(0,200,255,0.5))",
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: "#fff",
                textShadow: "0 0 10px rgba(0,200,255,0.5)",
              }}
            >
              BIOMETRIC DATA
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#00c8ff",
                letterSpacing: "1px",
              }}
            >
              DIGITAL IDENTITY
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton size="small" sx={{ color: "#00c8ff" }}>
            {/* <ScanIcon /> */}
          </IconButton>
          <IconButton size="small" sx={{ color: "#00c8ff" }}>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Identity Card */}
      <Box
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 3,
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(0,200,255,0.3)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #00c8ff, transparent)",
          },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "#00c8ff",
            mb: 2,
            display: "block",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          PRIMARY IDENTITY
        </Typography>

        <Typography
          variant="h3"
          fontWeight={300}
          sx={{
            color: "#fff",
            mb: 1,
            textShadow: "0 0 20px rgba(0,200,255,0.5)",
          }}
        >
          {info?.firstName}
        </Typography>
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{
            color: "#fff",
            background: "linear-gradient(90deg, #00c8ff, #0099ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(0,200,255,0.7)",
          }}
        >
          {info?.lastName}
        </Typography>
      </Box>

      {/* Data Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          mb: 3,
          position: "relative",
          zIndex: 1,
        }}
      >
        <DataPoint
          icon={<DateRangeIcon />}
          label="BIRTH CYCLE"
          value={
            info?.birthDate
              ? new Date(info.birthDate).toLocaleDateString()
              : "—"
          }
          subvalue={calculateAge() ? `AGE: ${calculateAge()} SOLAR YEARS` : ""}
          color="#00c8ff"
        />

        <DataPoint
          icon={<TransgenderIcon />}
          label="GENDER IDENTITY"
          value={info?.gender ? info.gender.toUpperCase() : "—"}
          subvalue="BIOLOGICAL CONFIRMED"
          color="#9c27b0"
        />

        <DataPoint
          icon={<FavoriteIcon />}
          label="SOCIAL STATUS"
          value={info?.maritalStatus ? info.maritalStatus.toUpperCase() : "—"}
          subvalue="RELATIONSHIP MATRIX"
          color="#ff4081"
        />

        <DataPoint
          icon={<ContactPhoneIcon />}
          label="COMM LINKS"
          value={
            info?.phoneNumbers?.length
              ? `${info.phoneNumbers.length} ACTIVE`
              : "—"
          }
          subvalue="SECURE CONNECTION"
          color="#00e676"
        />
      </Box>

      {/* Phone Numbers */}
      {info?.phoneNumbers?.length > 0 && (
        <Box
          sx={{
            mt: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#00c8ff",
              mb: 2,
              display: "block",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            COMMUNICATION ARRAY
          </Typography>

          <Stack spacing={1}>
            {info.phoneNumbers.map((phone, index) => (
              <motion.div
                key={phone.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                    borderRadius: 2,
                    background: "rgba(0,200,255,0.1)",
                    border: "1px solid rgba(0,200,255,0.2)",
                    "&:hover": {
                      background: "rgba(0,200,255,0.15)",
                      boxShadow: "0 0 20px rgba(0,200,255,0.2)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "#fff", fontWeight: 500 }}
                    >
                      {phone.type ? phone.type.toUpperCase() : "COMM LINK"}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#00c8ff" }}>
                      {phone.number}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: index === 0 ? "#00e676" : "#ff4081",
                      boxShadow: `0 0 10px ${index === 0 ? "#00e676" : "#ff4081"}`,
                    }}
                  />
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>
      )}

      {/* Footer */}
      <Box
        sx={{
          mt: 3,
          pt: 3,
          borderTop: "1px solid rgba(0,200,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography variant="caption" sx={{ color: "#00c8ff" }}>
          ID: {user?.id?.slice(0, 12).toUpperCase()}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {[...Array(4)].map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: "#00c8ff",
                opacity: 0.5 + i * 0.1,
                animation: "pulse 2s infinite",
                animationDelay: `${i * 0.2}s`,
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 0.5 + i * 0.1 },
                  "50%": { opacity: 1 },
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function DataPoint({
  icon,
  label,
  value,
  subvalue,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  subvalue?: string;
  color: string;
}) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        background: "rgba(0,0,0,0.3)",
        border: "1px solid rgba(255,255,255,0.1)",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          borderColor: color,
          boxShadow: `0 0 20px ${color}40`,
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
        <Box sx={{ color }}>{icon}</Box>
        <Typography
          variant="caption"
          sx={{
            color: "#00c8ff",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          {label}
        </Typography>
      </Box>

      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          mb: 0.5,
          fontWeight: 600,
        }}
      >
        {value}
      </Typography>

      {subvalue && (
        <Typography
          variant="caption"
          sx={{
            color: color,
            fontWeight: 500,
          }}
        >
          {subvalue}
        </Typography>
      )}
    </Box>
  );
}
