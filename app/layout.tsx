import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProvider from "@/context/NewUserProvider";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "react-hot-toast";
import MobileBar from "@/components/MobileBar";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
export const metadata: Metadata = {
  title: "Learn it",
  description: "Special place to learn new things",
  manifest: '/manifest.json',
};
export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className + " global_scrollbar"}>
          <Toaster containerStyle={{
            zIndex: 10000,
          }} />
        <SessionWrapper>
          <UserProvider>
            <Header />
            <main className="bg-[--bg-primary] pb-[50px] min-h-[calc(100vh-80px)] mt-[80px] max-600:mt-[60px] ">
              {children}
            </main>
            <Footer />
            <MobileBar />
          </UserProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
