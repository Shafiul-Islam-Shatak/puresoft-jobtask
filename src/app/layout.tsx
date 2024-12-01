
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import QueryProvider from "./components/QueryProvider/QueryProvider";

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-[#F9F9F9]`}
      ><QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
