export type ErrorCode = 401 | 403 | 404 | 500;

export const ERROR_CONFIG: Record<
  ErrorCode,
  {
    fallback: string;
    label: string;
  }
> = {
  401: {
    fallback: "/login",
    label: "Go to login",
  },
  403: {
    fallback: "/",
    label: "Go to home",
  },
  404: {
    fallback: "/checkpoint",
    label: "Go to checkpoint",
  },
  500: {
    fallback: "/",
    label: "Reload app",
  },
};
