"use client";

import { Box, Stack, Typography, Chip, useTheme } from "@mui/material";
import { User } from "@/types/user/user.type";
import { UserStatusType } from "@/types/user/user-enum-type";
import {
  USER_TYPE_I18N,
  USER_ROLE_I18N,
  USER_STATUS_I18N,
} from "@/types/user/enum-translations";
import { formatEnum, useEnumLabel } from "@/utils/format-enum";
import { useTypedTranslations } from "@/i18n/useTypedTranslations";
import { useTranslations } from "next-intl";


type Props = {
  user: User;
};

export default function ProfileRoleData({ user }: Props) {
  const theme = useTheme();
  const tUser = useTranslations("user");
  const tCommon = useTranslations("common");



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
        Role Data
      </Typography>

      <Stack spacing={2}>
        {/* User Type */}
        <RoleRow label={tCommon("labels.userType")}>
          <Chip
            label={formatEnum(tUser, USER_TYPE_I18N, user?.userType)}
            size="small"
            sx={{
              bgcolor: theme.palette.omnixys.primary + "22",
              color: theme.palette.omnixys.primary,
              fontWeight: 600,
            }}
          />
        </RoleRow>

        {/* Role */}
        <RoleRow label={tCommon("labels.role")}>
          <Chip
            label={formatEnum(tUser, USER_ROLE_I18N, user?.role)}
            size="small"
            sx={{
              bgcolor: theme.palette.secondary.main + "22",
              color: theme.palette.secondary.main,
              fontWeight: 600,
            }}
          />
        </RoleRow>

        {/* Status */}
        <RoleRow label={tCommon("labels.status")}>
          <Chip
            label={formatEnum(tUser, USER_STATUS_I18N, user?.status)}
            size="small"
            sx={{
              bgcolor:
                user?.status === UserStatusType.ACTIVE
                  ? theme.palette.success.main + "22"
                  : theme.palette.divider,
              color:
                user?.status === UserStatusType.ACTIVE
                  ? theme.palette.success.main
                  : theme.palette.text.secondary,
              fontWeight: 600,
            }}
          />
        </RoleRow>
      </Stack>
    </Box>
  );
}


/* ------------------------------------------------------------ */
/* Helpers                                                      */
/* ------------------------------------------------------------ */

function RoleRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>

      <Typography variant="body2" fontWeight={500}>
        {children}
      </Typography>
    </Box>
  );
}

function DividerLine() {
  return (
    <Box
      sx={{
        height: 1,
        bgcolor: "divider",
        my: 1,
      }}
    />
  );
}
