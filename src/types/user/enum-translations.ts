import {
  UserType,
  UserRole,
  UserStatusType,
} from "@/types/user/user-enum-type";
import type { UserTranslationKey } from "@/i18n/productKeys";

export const USER_TYPE_I18N = {
  CUSTOMER: "type.customer",
  EMPLOYEE: "type.employee",
  GUEST: "type.guest",
} satisfies Record<UserType, UserTranslationKey>;

export const USER_ROLE_I18N = {
  ADMIN: "role.admin",
  SECURITY: "role.security",
  USER: "role.user",
  GUEST: "role.guest",
} satisfies Record<UserRole, UserTranslationKey>;

export const USER_STATUS_I18N = {
  ACTIVE: "status.active",
  DISABLED: "status.disabled",
  DELETED: "status.deleted",
  INACTIVE: "status.inactive",
  BLOCKED: "status.blocked",
  CLOSED: "status.closed",
} satisfies Record<UserStatusType, UserTranslationKey>;
