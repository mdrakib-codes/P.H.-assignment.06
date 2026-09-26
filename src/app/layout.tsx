import type { Metadata } from "next";
import "./globals.css";

import { FitLogProvider } from "@/context/FitLogContext";
import Toast from "@/components/Toast";

export const metadata: Metadata = {
  title: "FitLog | Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          {children}
          <Toast />
        </FitLogProvider>
      </body>
    </html>
  );
}