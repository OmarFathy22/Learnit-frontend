"use client";
import * as React from "react";
import Logo from "./svgs/logo";
import { usePathname } from "next/navigation";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const pathname = usePathname();
  return (
    <div className="max-600:hidden">
      <div
        className={`${
          (pathname.includes("/courses") || pathname.includes('/chatbot')) && "hidden"
        } bg-[--bg-secondary]  min-h-[120px] border-t-[1px] border-t-[#474747] `}
      >
        <div className="  w-full flex max-900:flex-col max-900:items-center max-900:gap-2 max-900:justify-center justify-around  items-start p-7 max-350:px-3">
          <div>
            <h1 className="gradient-text text-[20px] max-900:mx-auto">
              Quick Links
            </h1>
            <div className="max-900:flex max-900:gap-5 max-350:text-[12px]">
              <h1 className="text-[--links]">Home</h1>
              <h1 className="text-[--links]">Community</h1>
              <h1 className="text-[--links]">Ranking</h1>
              <h1 className="text-[--links]">Profile</h1>
            </div>
          </div>
          <div>
            <h1 className="gradient-text text-[20px] max-900:mx-auto">
              Contact Us
            </h1>
            <h1>
              <span>Email: </span>{" "}
              <span className="text-[--links] max-350:text-[12px]">
                contact@learnit.com
              </span>
            </h1>
            <h1>
              <span>Phone: </span>{" "}
              <span className="text-[--links] max-350:text-[12px]">
                +1 (123) 456-7890
              </span>
            </h1>
          </div>
          <div className="">
            <h1 className="gradient-text text-[20px] max-900:mx-auto">
              Follow Us
            </h1>
            <div className="max-900:flex max-900:gap-5 max-350:text-[12px]">
              <h1 className="text-[--links]">Facebook</h1>
              <h1 className="text-[--links]">Instagram</h1>
              <h1 className="text-[--links]">Tictok</h1>
            </div>
          </div>

          <div className="">
            <h1 className="gradient-text text-[20px] max-900:mx-auto">
              Subscribe to our newsletter
            </h1>
            <h1 className="text-[13px] max-900:text-center">
              Stay updated with our latest courses and promotions.
            </h1>
            <div className="mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[220px] outline-none max-900:w-full   rounded-md bg-[--bg-tertiary] p-2 mr-2 "
              />
              <button className="gradient-bg max-900:block max-900:mt-2 max-900:w-full p-2 px-5 font-bold rounded-md hover:opacity-[0.95] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 py-10 gradient-t-border">
          <h1>
            <Logo />
          </h1>
          <h1 className="max-350:text-[12px]">
            © 2024 LearnIt. All Rights Reserved.
          </h1>
        </div>
      </div>
      {/* ScrollToTopBtn */}
      <ScrollToTopBtn />
      {/* ScrollToTopBtn */}
    </div>
  );
}
