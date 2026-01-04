import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalErrorShell from "./_components/GlobalErrorShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 – Page not found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  
  return (
    <html lang="en" className={inter.className}>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
          color: "#111",
        }}
      >
        <GlobalErrorShell
          code={404}
          title="Page not found"
          description="The page you’re trying to reach doesn’t exist."
        />
      </body>
    </html>
  );
}