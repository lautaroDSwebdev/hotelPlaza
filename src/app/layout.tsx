import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import FotterComponent from "@/components/fotter/Fotter";
import { Navbar } from "@/components/nav";
import { ArrowUp } from "@/components/Arrow/ArrowUp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plaza Hotel de Tandil. Pcia. de Buenos Aires, Argentina",
  keywords:
    "hotel, alojamiento, tandil, lodge, sierras, piedra movediza, hoteles, turismo, descanso, residencia",
  description:
    "Tandil Hotel Plaza de Tandil con categoria de 3 estrellas, restaurant, cocina internacional, salones de convenciones, conferencias y usos multiples",
  icons: {
    icon: "./iconoPH.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
        <ArrowUp/>
      </body>
    </html>
  );
}
