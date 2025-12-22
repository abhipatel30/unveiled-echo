import type { Metadata } from "next";
import { Cinzel, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Unveiled Echo - Online Therapy & Counseling",
  description: "Professional online therapy and counseling services tailored to your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.className} bg-slate-50 text-slate-800`}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}