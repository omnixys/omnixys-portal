"use client";

import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { useState } from "react";

const rows = [
  {
    id: "1",
    merchant: "Spotify",
    date: "2024-01-15",
    amount: -12.99,
    status: "pending",
    category: "Subscriptions",
  },
  {
    id: "2",
    merchant: "Salary",
    date: "2024-01-10",
    amount: 3200,
    status: "success",
    category: "Income",
  },
  {
    id: "3",
    merchant: "Amazon",
    date: "2024-01-08",
    amount: -86.4,
    status: "failed",
    category: "Shopping",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "success":
      return "success";
    case "pending":
      return "warning";
    case "failed":
      return "error";
    default:
      return "default";
  }
}

export default function TransactionsTable() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Merchant</TableCell>
              <TableCell>Date</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
  key={row.id}
  hover
  sx={{ cursor: "pointer" }}
  onClick={() => {
    setSelected(row);
    setOpen(true);
  }}>
                <TableCell>
                  <Typography fontWeight={500}>{row.merchant}</Typography>
                </TableCell>

                <TableCell>{row.date}</TableCell>

                <TableCell align="right">
                  <Typography
                    fontWeight={600}
                    color={row.amount > 0 ? "success.main" : "error.main"}
                  >
                    {row.amount > 0 ? "+" : "-"}€
                    {Math.abs(row.amount).toFixed(2)}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Chip
                    size="small"
                    label={row.status}
                    color={statusColor(row.status)}
                  />
                </TableCell>

                <TableCell>
                  <Chip size="small" variant="outlined" label={row.category} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={100}
        page={0}
        rowsPerPage={10}
        onPageChange={() => {}}
        rowsPerPageOptions={[10]}
      />
    </Card>
  );
}
