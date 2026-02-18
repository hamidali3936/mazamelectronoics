"use client";

import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import FloatingButtons from "@/Components/FloatingButtons";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibm.className} bg-white text-black`}>
        <Navbar />
        <main className="min-h-screen">{children} <FloatingButtons /></main>
       
        <Footer />
      </body>
    </html>
  );
}
