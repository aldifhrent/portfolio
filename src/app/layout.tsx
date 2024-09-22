import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DM_Mono } from "next/font/google";
import TopMenu from "@/components/top-menu";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Aldi Ahmad Fahrizi Ilmawan | Portfolio",
};

const DMMono = DM_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DMMono.className} antialiased`}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <TopMenu />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
