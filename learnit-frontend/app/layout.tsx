import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ubuntu = Ubuntu({ subsets: ['latin'] , weight: ['300' , '400' , '500' , '700'] });
export const metadata: Metadata = {
  title: "Learn it",
  description: "Special place to learn new things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Header />
        <main className="min-h-[calc(100vh-200px)] px-[70px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}