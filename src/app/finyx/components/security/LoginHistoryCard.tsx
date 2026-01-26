"use client";

import {
  Card,
  CardContent,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";

const logins = [
  {
    date: "2024-01-20 18:42",
    device: "MacBook Pro",
    ip: "84.23.xxx.xxx",
    status: "Success",
  },
  {
    date: "2024-01-18 09:12",
    device: "Unknown Device",
    ip: "91.12.xxx.xxx",
    status: "Failed",
  },
];

export default function LoginHistoryCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" mb={2}>
          Login History
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Device</TableCell>
              <TableCell>IP</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {logins.map((l, i) => (
              <TableRow key={i}>
                <TableCell>{l.date}</TableCell>
                <TableCell>{l.device}</TableCell>
                <TableCell>{l.ip}</TableCell>
                <TableCell>{l.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
