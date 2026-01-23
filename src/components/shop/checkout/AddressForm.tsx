"use client";

import { Grid, TextField } from "@mui/material";
import { useCheckout } from "./useCheckout";

export function AddressForm({ errors }: { errors: any }) {
  const { state, setAddress } = useCheckout();
  const a = state.address;

  return (
    <Grid container spacing={2}>
      <Grid sx={{ xs: 12, sm: 6 }}>
        <TextField
          label="First Name"
          value={a.firstName}
          onChange={(e) => setAddress({ firstName: e.target.value })}
          error={!!errors.firstName}
          helperText={errors.firstName}
          fullWidth
        />
      </Grid>
      <Grid sx={{ xs: 12, sm: 6 }}>
        <TextField
          label="Last Name"
          value={a.lastName}
          onChange={(e) => setAddress({ lastName: e.target.value })}
          error={!!errors.lastName}
          helperText={errors.lastName}
          fullWidth
        />
      </Grid>

      <Grid sx={{ xs: 12 }}>
        <TextField
          label="Street Address"
          value={a.street}
          onChange={(e) => setAddress({ street: e.target.value })}
          error={!!errors.street}
          helperText={errors.street}
          fullWidth
        />
      </Grid>
      <Grid sx={{ xs: 12, sm: 6 }}>
        <TextField
          label="City"
          value={a.city}
          onChange={(e) => setAddress({ city: e.target.value })}
          error={!!errors.city}
          helperText={errors.city}
          fullWidth
        />
      </Grid>
      <Grid sx={{ xs: 6, sm: 3 }}>
        <TextField
          label="ZIP Code"
          value={a.zip}
          onChange={(e) => setAddress({ zip: e.target.value })}
          error={!!errors.zip}
          helperText={errors.zip}
          fullWidth
        />
      </Grid>
      <Grid sx={{ xs: 6, sm: 3 }}>
        <TextField
          label="Country"
          value={a.country}
          onChange={(e) => setAddress({ country: e.target.value })}
          error={!!errors.country}
          helperText={errors.country}
          fullWidth
        />
      </Grid>
      <Grid sx={{ xs: 12 }}>
        <TextField
          label="Email"
          value={a.email}
          onChange={(e) => setAddress({ email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
        />
      </Grid>
    </Grid>
  );
}
