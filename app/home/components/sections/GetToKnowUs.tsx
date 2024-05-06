"use client";
import * as React from "react";
import HeroSlider from "../shared/HeroSlider";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div
      className={` py-[40px] gradient-b-border bg-[--bg-secondary] gloabal-padding ${montserrat.className}`}
    >
      <HeroSlider>
        <li className=" global-padding pb-[30px] ">
          <div className="flex justify-between items-center gap-10   h-full ">
            <div className=" min-600:max-w-[50%] max-600:w-full  flex flex-col items-start gap-2">
              <h1 className="text-[48px]  font-bold">Learn Without Limits</h1>
              <p className="text-[20px] mb-4">
                Explore limitless learning with our diverse courses. From
                programming to photography and more, there&apos;s something for
                everyone. Unleash your potential today!
              </p>
              <div className="gradient-bg rounded-sm">
                <button className=" bg-[--bg-secondary]  hover:bg-transparent   transition-all duration-500 m-[3px] round-sm block px-10 p-3 text-white  font-bold">
                  Join Now
                </button>
              </div>
            </div>
            <div className=" max-h-[600px] max-w-[500px] max-600:hidden">
              <Image
                src="/hero-0.png"
                alt="hero1"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </li>
        <li className="global-padding pb-[30px] ">
          <div className="flex justify-between items-center gap-10 h-full ">
            <div className=" min-600:max-w-[50%] max-600:w-full flex flex-col items-start gap-2">
              <h1 className="text-[48px] font-bold leading-[60px]">
                Introducing <span className="gradient-text">LearnItBuddy</span> <br/> Your Virtual Study Partner!
              </h1>
              <p className="text-[20px] mb-4">
                LearnItBuddy is our AI bot designed for a smarter, interactive
                learning journey. With AI insights, personalized
                recommendations, and 24/7 support, he is here to enhance your
                learning experience.
              </p>
              <div className="gradient-bg rounded-sm">
                <button className=" bg-[--bg-secondary]  hover:bg-transparent   transition-all duration-500 m-[3px] round-sm block px-10 py-3 text-white  font-bold">
                  Try it out now
                </button>
              </div>
            </div>
            <div className=" max-h-[600px] max-w-[400px] max-600:hidden ">
              <Image
                src="/hero-1.png"
                alt="hero1"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </li>
        <li className="global-padding pb-[30px] ">
          <div className="flex justify-between items-center gap-10 h-full ">
            <div className="  min-600:max-w-[50%] max-600:w-full flex flex-col items-start gap-2">
              <h1 className="text-[48px] font-bold leading-[60px]">
                Take Control and Master Your Career
              </h1>
              <p className="text-[20px] mb-4">
                Explore our curated courses to gain the skills and knowledge you
                need to advance in your career. Whether you&apos;re looking to
                upskill or switch fields, we have the right course for you.
              </p>
              <div className="gradient-bg rounded-sm">
                <button className=" bg-[--bg-secondary]  hover:bg-transparent   transition-all duration-500 m-[3px] round-sm block px-10 py-3 text-white  font-bold">
                  Master Your Career
                </button>
              </div>
            </div>
            <div className=" max-h-[600px] max-w-[800px] max-600:hidden ">
              <Image
                src="/hero-2.png"
                alt="hero1"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </li>
      </HeroSlider>
    </div>
  );
}
