import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaptor Demo",
  description: "Employee performance review demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
