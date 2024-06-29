"use client";

import * as React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Call the function once to set the initial state
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`gradient-bg rounded-md p-1 max-600:hidden fixed bottom-10 right-10 z-[10000] ${
        isVisible ? "visible" : "invisible"
      } ${(pathname.includes("/courses") || pathname.includes('/chatbot')) && "hidden"}`}
      onClick={scrollToTop}
    >
      <MdKeyboardArrowUp size={30} />
    </button>
  );
}
