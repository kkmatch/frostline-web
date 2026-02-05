import "./globals.css";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Teko } from "next/font/google";
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";

const bodyFont = Bricolage_Grotesque({ subsets: ["latin"], weight: ["300", "400", "600"] });
const displayFont = Teko({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "Vape E-commerce MVP",
  description: "Custom vape store MVP",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={displayFont.className}>
      <body className={bodyFont.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
