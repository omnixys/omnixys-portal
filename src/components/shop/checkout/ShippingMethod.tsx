"use client";

import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

export function ShippingMethod() {
  return (
    <RadioGroup defaultValue="free">
      <Stack spacing={1}>
        <FormControlLabel
          value="free"
          control={<Radio />}
          label={
            <Typography>
              Free Delivery <strong>(3–5 days)</strong>
            </Typography>
          }
        />
        <FormControlLabel
          value="express"
          control={<Radio />}
          label={
            <Typography>
              Express Delivery <strong>$15.00</strong>
            </Typography>
          }
        />
      </Stack>
    </RadioGroup>
  );
}
