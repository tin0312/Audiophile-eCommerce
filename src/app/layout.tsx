import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/navigation/header/Header";
import Footer from "./components/ui/navigation/Footer";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audiphile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={manrope.className}>
        <Header />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
