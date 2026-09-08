import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARKLINE | Architectural Door & Interior Systems",
  description: "ARKLINE sliding, folding, pivot and invisible doors, wardrobes, wall systems and aluminium-frame cabinetry for international projects.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
