import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppShell from "@/components/AppShell";
import BottomNav from "@/components/BottomNav";
import { FanClubProvider } from "@/context/FanClubContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Gomes Fã-Clube",
  description: "Hub digital do fã-clube do João Gomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FanClubProvider>
          <AppShell>
            <div className="pb-24">{children}</div>
            <BottomNav />
          </AppShell>
        </FanClubProvider>
      </body>
    </html>
  );
}
