import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Averia_Serif_Libre } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Vívian Calheiros",
  description: "Portfólio sobre Vívian Calheiros",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={`${averia.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
