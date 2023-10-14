import { Metadata } from "next/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awesome Meal Cards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
