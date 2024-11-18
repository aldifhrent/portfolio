import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DM_Mono } from "next/font/google";
import TopMenu from "@/components/menu";
import { Toaster } from "@/components/ui/toaster";
import { DMMono } from "@/lib/font";
export const metadata: Metadata = {
  title: "Aldi Ahmad Fahrizi Ilmawan | Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DMMono.className} antialiased`}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
