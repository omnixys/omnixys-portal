import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <NextIntlClientProvider>
          <SpeedInsights />
          <Analytics />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
