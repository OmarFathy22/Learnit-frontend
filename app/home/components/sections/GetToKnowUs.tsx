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
      className={` py-[25px]  min-1000:h-[calc(100vh-80px)]   gradient-b-border bg-[--bg-secondary] global-padding ${montserrat.className}`}
    >
      <HeroSlider>
        <li className="max-900:pb-[30px] w-full px-1 ">
          <div className="flex justify-between items-center  gap-10   h-full ">
            <div className=" min-900:max-w-[50%] max-900:w-full   flex flex-col items-start gap-2">
              <h1 className="text-[48px] max-400:text-[34px] font-bold">Learn Without Limits</h1>
              <p className="text-[20px] max-400:text-[15px] mb-4">
                Explore limitless learning with our diverse courses. From
                programming to photography and more, there&apos;s something for
                everyone. Unleash your potential today!
              </p>
              <div className="gradient-bg rounded-sm">
                <button className=" bg-[--bg-secondary]  hover:bg-transparent   transition-all duration-500 m-[3px] round-sm block px-10 p-3 max-400:px-5 max-400:py-2 text-white  font-bold">
                  Join Now
                </button>
              </div>
            </div>
            <div className=" max-h-[600px] max-w-[500px] max-900:hidden">
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
        <li className=" max-900:pb-[30px] px-1   min-1000:h-[calc(100vh-135px)]  min-1000  ">
          <div className="flex justify-between items-center  gap-10 h-full ">
            <div className=" min-900:max-w-[50%] max-600:w-full flex flex-col items-start gap-2">
              <h1 className="text-[48px] max-400:text-[35px] font-bold leading-[60px] max-400:leading-[45px]">
                Introducing <span className="gradient-text">LearnItBuddy</span> <br/> <span className="">Your Virtual Study Partner!</span>
              </h1>
              <p className="text-[20px] max-400:text-[15px] mb-4">
                LearnItBuddy is our AI bot designed for a smarter, interactive
                learning journey. With AI insights, personalized
                recommendations, and 24/7 support, he is here to enhance your
                learning experience.
              </p>
              <div className="gradient-bg rounded-sm">
                <button className=" bg-[--bg-secondary]  hover:bg-transparent   transition-all duration-500 m-[3px] round-sm block px-10 py-3 max-400:px-5 max:400:py-2 text-white  font-bold">
                  Try it out now
                </button>
              </div>
            </div>
            <div className=" max-h-[600px] max-w-[400px] max-900:hidden ">
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
        <li className="max-900:pb-[30px] min-1000:h-[calc(100vh-135px)] px-1  ">
          <div className="flex justify-between items-center gap-10 h-full ">
            <div className="  min-900:max-w-[50%] max-900:w-full flex flex-col items-start gap-2">
              <h1 className="text-[48px] max-400:text-[35px] font-bold leading-[60px] max-400:leading-[45px]">
                Take Control and Master Your Career
              </h1>
              <p className="text-[20px] max-400:text-[15px] mb-4">
                Explore our curated courses to gain the skills and knowledge you
                need to advance in your career. Whether you&apos;re looking to
                upskill or switch fields, we have the right course for you.
              </p>
              <div className="gradient-bg rounded-sm">
              <button className=" bg-[--bg-secondary]  hover:bg-transparent   transition-all duration-500 m-[3px] round-sm block px-10 p-3 max-400:px-5 max-400:py-2 text-white  font-bold">
                  Master Your Career
                </button>
              </div>
            </div>
            <div className=" max-h-[600px] max-w-[800px] max-900:hidden ">
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
