import TopLeftImg from "@/components/UI/TopLeftImg";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import NavBar from "@/components/layouts/NavBar";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import "./style/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdellah Belcaid Portfolio",
  description: "web site description for a portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col  text-content bg-LightModeCol dark:bg-DarkModeCol ">
            <TopLeftImg />
            <NavBar />
            <Header />
            <div className="container mx-auto mt-24 md:px-12 md:py-4 ">
              {children}
              <Analytics />
              <SpeedInsights />
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
