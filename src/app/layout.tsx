import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./footer";
import { Kode_Mono } from "next/font/google";
import { ReduxProvider } from "./providers/ReduxProvider";

const kode_mono = Kode_Mono({
  variable: "--font-kode_mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Play House",
  description: "Play single player games against the computer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${kode_mono.variable} antialiased bg-cream`}>
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
