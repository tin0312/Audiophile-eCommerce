"use client";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/navigation/header/Header";
import Footer from "./components/ui/navigation/Footer";
import AuthenticationContext from "@/context/AuthContext";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <AuthenticationContext>
          <Header />
          <main>{children}</main>
        </AuthenticationContext>
        <Footer />
      </body>
    </html>
  );
}
