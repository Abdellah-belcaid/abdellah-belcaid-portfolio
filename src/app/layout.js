import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";
import { Inter } from "next/font/google";
import "./style/globals.css";
import Header from "@/components/layouts/Header";
import TopLeftImg from "@/components/TopLeftImg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdellah Belcaid Portfolio",
  description: "web site description for a portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-[#131424]">
          <TopLeftImg />
          <NavBar />
          <Header />
          <div className="container mx-auto mt-24 md:px-12 md:py-4 ">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
