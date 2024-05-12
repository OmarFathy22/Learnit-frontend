import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProvider from "@/context/NewUserProvider";
import { Suspense } from "react";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
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
      <body className={lato.className + " global_scrollbar"}>
          <UserProvider>
            <Header />
            <main className="bg-[--bg-primary] min-h-[calc(100vh-80px)] mt-[80px] max-600:mt-[60px] ">
              {children}
            </main>
            <Footer />
          </UserProvider>
      </body>
    </html>
  );
}
