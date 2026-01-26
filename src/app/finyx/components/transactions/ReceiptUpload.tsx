"use client";

import { Card, CardContent, Typography, Button } from "@mui/material";

export default function ReceiptUpload() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Receipt
        </Typography>

        <Button variant="contained" size="small">
          Upload Receipt
        </Button>
      </CardContent>
    </Card>
  );
}
