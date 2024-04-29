"use client";
import * as React from "react";
import Description from "./description";
import Reviews from "./reviews";
import Content from "./content";

export interface IAppProps {
  refreshVideo: () => void;
}

export default function App({refreshVideo}: IAppProps) {
  const [activeTab, setActiveTab] = React.useState("description");
  const handleTab = (tab: string) => (
    event: React.MouseEvent<HTMLHeadingElement>
  ) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-[500px] h-[calc(100vh-80px)] !overflow-auto relative custom-scrollbar">
      <div className="w-full relative ">
        <div className="flex items-center justify-between p-3 px-10 ">
          <button className="bg-[--bg-tertiary] py-2 px-10 rounded-md">
            Enroll
          </button>
          <div className="flex gap-3 items-center">
            <h1 className="text-[15px] font-bold ">points to unlock</h1>
            <div className="bg-[--bg-tertiary] py-2 px-2 rounded-md flex gap-1">
              <h1>250</h1>
              <h1>/</h1>
              <h1 className="gradient-text">250</h1>
            </div>
          </div>
        </div>
        <div style={{width:`${250*100/250}%`}} className={`gradient-bg-opacity  absolute top-0 bottom-0 left-0 right-0 `} />
      </div>
      <div className="bg-[--bg-secondary] flex justify-between px-10 items-center text-[16px] py-2 border-b-[1px] sticky z-10 right-0 left-0 top-0  border-b-[#474747]">
        <h1
          onClick={handleTab("description")}
          className={`cursor-pointer ${
            activeTab == "description" ? "gradient-text" : ""
          }`}
        >
          Description
        </h1>
        <h1
          onClick={handleTab("reviews")}
          className={`cursor-pointer ${
            activeTab == "reviews" ? "gradient-text" : ""
          }`}
        >
          Reviews
        </h1>
        <h1
          onClick={handleTab("content")}
          className={`cursor-pointer ${
            activeTab == "content" ? "gradient-text" : ""
          }`}
        >
          Content
        </h1>
      </div>
      {activeTab === "description" && <Description />}
      {activeTab === "reviews" && <Reviews />}
      {activeTab === "content" && <Content refreshVideo={refreshVideo}/>}
    </div>
  );
}
