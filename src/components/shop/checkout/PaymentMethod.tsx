"use client";

import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { useCheckout } from "./useCheckout";

export function PaymentMethod({ errors }: { errors: any }) {
  const { setPaymentDetails } = useCheckout();
  return (
    <Stack spacing={2}>
      <RadioGroup defaultValue="card">
        <FormControlLabel
          value="card"
          control={<Radio />}
          label="Credit / Debit Card"
        />
        <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
      </RadioGroup>

      <Stack spacing={2}>
        <TextField
          label="Card Number"
          error={!!errors.cardNumber}
          helperText={errors.cardNumber}
          onChange={(e) => setPaymentDetails({ cardNumber: e.target.value })}
        />

        <Stack direction="row" spacing={2}>
          <TextField
            label="Expiry Date"
            error={!!errors.expiryDate}
            helperText={errors.expiryDate}
            onChange={(e) => setPaymentDetails({ expiryDate: e.target.value })}
          />
          <TextField
            label="CVV"
            error={!!errors.cvv}
            helperText={errors.cvv}
            onChange={(e) => setPaymentDetails({ cvv: e.target.value })}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
