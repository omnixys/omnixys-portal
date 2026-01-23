import { CssBaseline } from "@mui/material";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
        {modal}
      </body>
    </html>
  );
}
