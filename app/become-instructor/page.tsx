"use client";
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
import { selectStyles } from "@/utils/SelectStyles";
export interface IAppProps {}





export default function App(props: IAppProps) {



  return (
    <div className="flex justify-center py-10 px-[270px] bg-[--bg-primary] ">
      <div className=" w-full ">
        <h1 className="gradient-text text-[25px] text-center mx-auto mb-3">
          Become Instructor
        </h1>
        <div className=""> 
           <FirstSection selectStyles={selectStyles} />
           <SecondSection />
           <ThirdSection selectStyles={selectStyles} />
        </div>  
      </div>
    </div>
  );
}
