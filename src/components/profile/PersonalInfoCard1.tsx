/**
 * @file ProfilePersonalInfo.tsx
 * @description Luxury glassmorphism personal information dashboard
 */

"use client";

import {
  Box,
  Stack,
  Typography,
  Chip,
  IconButton,
  alpha,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { User } from "@/types/user/user.type";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TransgenderIcon from "@mui/icons-material/Transgender";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import VerifiedIcon from "@mui/icons-material/Verified";

type Props = {
  user: User;
};

export default function ProfilePersonalInfo({ user }: Props) {
  const theme = useTheme();
  const info = user?.personalInfo;
  const birthDate = info?.birthDate ? new Date(info.birthDate) : null;
  const age = birthDate
    ? new Date().getFullYear() - birthDate.getFullYear()
    : null;

  const getGenderIcon = () => {
    switch (info?.gender?.toLowerCase()) {
      case "male":
        return <MaleIcon sx={{ fontSize: 18 }} />;
      case "female":
        return <FemaleIcon sx={{ fontSize: 18 }} />;
      default:
        return <TransgenderIcon sx={{ fontSize: 18 }} />;
    }
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
          "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: `
          0 10px 40px rgba(0,0,0,0.1),
          inset 0 1px 0 rgba(255,255,255,0.2)
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(156,39,176,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(33,150,243,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      {/* Header with gradient title */}
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
        <Box>
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{
              mb: 0.5,
              background: "linear-gradient(90deg, #9C27B0 0%, #2196F3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.5px",
            }}
          >
            Personal Information
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <VerifiedIcon sx={{ fontSize: 14, color: "success.main" }} />
            Verified profile • Last updated today
          </Typography>
        </Box>

        <IconButton
          size="small"
          sx={{
            bgcolor: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.2)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
          }}
        >
          <EditIcon />
        </IconButton>
      </Box>

      {/* Main content grid */}
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(3, auto)",
          gap: 3,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Name Section */}
        <Box
          sx={{
            gridColumn: "span 2",
            bgcolor: "rgba(255,255,255,0.08)",
            borderRadius: 3,
            p: 3,
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Stack spacing={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #9C27B0 0%, #2196F3 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(156,39,176,0.3)",
                }}
              >
                <PersonIcon sx={{ color: "white", fontSize: 28 }} />
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">
                  FULL NAME
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    background: "linear-gradient(90deg, #fff 0%, #e0e0e0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {info?.firstName} {info?.lastName}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                pt: 2,
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Chip
                icon={<PersonIcon />}
                label="Premium Member"
                size="small"
                sx={{
                  bgcolor: "rgba(255,215,0,0.15)",
                  border: "1px solid rgba(255,215,0,0.3)",
                  color: "#FFD700",
                }}
              />
              <Chip
                icon={<VerifiedIcon />}
                label="Identity Verified"
                size="small"
                sx={{
                  bgcolor: "rgba(76,175,80,0.15)",
                  border: "1px solid rgba(76,175,80,0.3)",
                  color: "success.main",
                }}
              />
            </Box>
          </Stack>
        </Box>

        {/* Birth Date */}
        <InfoCard
          icon={<CalendarTodayIcon />}
          label="DATE OF BIRTH"
          value={
            birthDate
              ? birthDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "—"
          }
          subvalue={age ? `${age} years old` : ""}
          color="#FF9800"
        />

        {/* Gender */}
        <InfoCard
          icon={getGenderIcon()}
          label="GENDER"
          value={
            info?.gender
              ? info.gender.charAt(0).toUpperCase() + info.gender.slice(1)
              : "—"
          }
          subvalue={info?.gender ? "Registered" : ""}
          color="#9C27B0"
        />

        {/* Marital Status */}
        <InfoCard
          icon={<FavoriteIcon />}
          label="MARITAL STATUS"
          value={info?.maritalStatus || "—"}
          subvalue={info?.maritalStatus ? "Status" : ""}
          color="#E91E63"
        />

        {/* Phone Numbers */}
        {info?.phoneNumbers?.length > 0 && (
          <Box
            sx={{
              gridColumn: "span 2",
              bgcolor: "rgba(255,255,255,0.08)",
              borderRadius: 3,
              p: 3,
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "rgba(33,150,243,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(33,150,243,0.3)",
                }}
              >
                <PhoneIcon sx={{ color: "#2196F3", fontSize: 20 }} />
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">
                  CONTACT NUMBERS
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  {info.phoneNumbers.length} registered
                </Typography>
              </Box>
            </Box>

            <Stack spacing={1.5}>
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
                      bgcolor: "rgba(255,255,255,0.05)",
                      p: 2,
                      borderRadius: 2,
                      border: "1px solid rgba(255,255,255,0.1)",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.08)",
                        transform: "translateX(4px)",
                        transition: "all 0.2s",
                      },
                    }}
                  >
                    <Box>
                      <Typography variant="body2" fontWeight={500}>
                        {phone.type
                          ? phone.type.charAt(0).toUpperCase() +
                            phone.type.slice(1)
                          : "Phone"}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {phone.number}
                      </Typography>
                    </Box>

                    <Chip
                      label={index === 0 ? "Primary" : "Secondary"}
                      size="small"
                      sx={{
                        bgcolor:
                          index === 0
                            ? "rgba(76,175,80,0.15)"
                            : "rgba(158,158,158,0.15)",
                        color: index === 0 ? "success.main" : "text.secondary",
                        fontSize: "0.7rem",
                      }}
                    />
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Box>
        )}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          mt: 4,
          pt: 3,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography variant="caption" color="text.secondary">
          Profile ID: {user?.id?.slice(0, 8)} • Complete
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Chip
            label="99% Complete"
            size="small"
            color="success"
            sx={{
              bgcolor: "rgba(76,175,80,0.2)",
              color: "success.main",
              fontWeight: 600,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

function InfoCard({
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
        bgcolor: "rgba(255,255,255,0.08)",
        borderRadius: 3,
        p: 2.5,
        border: "1px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 12px 40px ${color}20`,
          borderColor: color,
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: alpha(color, 0.2),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${alpha(color, 0.3)}`,
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontWeight: 600 }}
        >
          {label}
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
          {value}
        </Typography>
        {subvalue && (
          <Typography variant="caption" color="text.secondary">
            {subvalue}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
