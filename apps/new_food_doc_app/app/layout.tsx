import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "food standard doc",
  description: "food standard doc",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
