// components/ui/DotPagination.tsx
import { Box } from "@mui/material";

export function DotPagination({
  count,
  active,
}: {
  count: number;
  active: number;
}) {
  return (
    <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mt: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Box
          key={i}
          sx={{
            width: i === active ? 18 : 8,
            height: 8,
            borderRadius: 999,
            backgroundColor: i === active ? "#ff6a00" : "#ddd",
            transition: "all .3s",
          }}
        />
      ))}
    </Box>
  );
}
