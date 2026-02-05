hier:




/**
 * @file ProfileRoleSpecificInfo.tsx
 * @description Contextual role-specific information next to personal info
 */

"use client";

import { Box, Stack, Typography, useTheme } from "@mui/material";
import { User } from "@/types/user/user.type";
import { UserType } from "../../types/user/user-enum-type";
import { useTranslations } from "next-intl";
import CustomerInterestSpectrum from "./SpectrumRow";

type Props = {
  user: User;
};

export default function ProfileRoleSpecificInfo({ user }: Props) {
  const theme = useTheme();


const tInterest = useTranslations("interest");
const tCustomer = useTranslations("profile.role.customer");

const interests = user?.customer?.interests;

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: theme.shape.borderRadius,
        p: 3,
        height: "100%",
      }}
    >
      <Typography fontWeight={700} sx={{ mb: 2 }}>
        {getTitle(user?.userType)}
      </Typography>

      <Stack spacing={2}>
        {/* EMPLOYEE */}
        {user?.userType === UserType.EMPLOYEE && user?.employee && (
          <>
            <InfoRow label="Department" value={user?.employee.department} />
            <InfoRow label="Position" value={user?.employee.position} />
            <InfoRow
              label="Employment"
              value={user?.employee.isExternal ? "External" : "Internal"}
            />
            <InfoRow
              label="Hire date"
              value={new Date(user?.employee.hireDate).toLocaleDateString()}
            />
          </>
        )}

        {/* CUSTOMER */}
        {user?.userType === UserType.CUSTOMER && user?.customer && (
          <Box>
            <CustomerInterestSpectrum interests={user.customer.interests} />
          </Box>
        )}

        {/* GUEST */}
        {user?.userType === UserType.GUEST && (
          <Typography variant="body2" color="text.secondary">
            This is a guest account with limited, temporary access.
          </Typography>
        )}
      </Stack>
    </Box>
  );
}

/* ------------------------------------------------------------ */
/* Helpers                                                      */
/* ------------------------------------------------------------ */

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>

      <Typography variant="body2" fontWeight={500}>
        {value}
      </Typography>
    </Box>
  );
}

function getTitle(type: User["userType"]) {
  switch (type) {
    case UserType.EMPLOYEE:
      return "Employment Details";
    case UserType.CUSTOMER:
      return "Customer Details";
    case UserType.GUEST:
      return "Guest Access";
    default:
      return "Role Details";
  }
}