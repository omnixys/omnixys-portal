import { Box, Button, TextField, Typography } from "@mui/material";

export function Newsletter() {
  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <Typography variant="h5">Subscribe & get 20% off</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <TextField placeholder="Email" />
        <Button variant="contained">Subscribe</Button>
      </Box>
    </Box>
  );
}
