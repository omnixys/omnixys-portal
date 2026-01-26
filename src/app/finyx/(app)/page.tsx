import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";

/**
 * Finyx Home Page
 * - Account overview
 * - Balance summary
 * - Quick actions
 * - Recent transactions preview
 */
export default function FinyxHomePage() {
  return (
    <Box>
      {/* HEADER */}
      <Box mb={4}>
        <Typography variant="h1">Welcome back</Typography>
        <Typography color="text.secondary">
          Here is an overview of your financial status
        </Typography>
      </Box>

      {/* TOP METRICS */}
      <Grid container spacing={3} mb={4}>
        <Grid xs={12} md={4}>
          <MetricCard
            title="Total Balance"
            value="€12,480.22"
            subtitle="Across all accounts"
          />
        </Grid>

        <Grid xs={12} md={4}>
          <MetricCard
            title="Monthly Spending"
            value="€2,134.90"
            subtitle="January"
          />
        </Grid>

        <Grid xs={12} md={4}>
          <MetricCard title="Savings Rate" value="18%" subtitle="This month" />
        </Grid>
      </Grid>

      {/* MAIN CONTENT */}
      <Grid container spacing={3}>
        {/* ACCOUNTS */}
        <Grid xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" mb={2}>
                Accounts
              </Typography>

              <Stack spacing={2} divider={<Divider />}>
                <AccountRow
                  name="Main Checking"
                  iban="DE12 •••• 4821"
                  balance="€6,420.11"
                />
                <AccountRow
                  name="Savings"
                  iban="DE98 •••• 9912"
                  balance="€4,830.00"
                />
                <AccountRow
                  name="Brokerage"
                  iban="Investment Account"
                  balance="€1,230.11"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* RECENT TRANSACTIONS */}
        <Grid xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" mb={2}>
                Recent Transactions
              </Typography>

              <Stack spacing={2} divider={<Divider />}>
                <TransactionRow title="Amazon" date="Jan 24" amount="-€89.99" />
                <TransactionRow
                  title="Salary"
                  date="Jan 23"
                  amount="+€3,200.00"
                  positive
                />
                <TransactionRow title="Spotify" date="Jan 21" amount="-€9.99" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

/* =====================================================
   SUB COMPONENTS
===================================================== */

function MetricCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary">{title}</Typography>
        <Typography variant="h3" mt={1}>
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

function AccountRow({
  name,
  iban,
  balance,
}: {
  name: string;
  iban: string;
  balance: string;
}) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Typography fontWeight={500}>{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {iban}
        </Typography>
      </Box>

      <Typography fontWeight={600}>{balance}</Typography>
    </Stack>
  );
}

function TransactionRow({
  title,
  date,
  amount,
  positive,
}: {
  title: string;
  date: string;
  amount: string;
  positive?: boolean;
}) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Typography fontWeight={500}>{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </Box>

      <Typography color={positive ? "success.main" : "text.primary"}>
        {amount}
      </Typography>
    </Stack>
  );
}
