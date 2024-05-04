"use client";
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
export interface IAppProps {}

export const selectStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "transparent",
    padding: "6px",
    border:
      state.isFocused || state.isHover
        ? "1px solid white"
        : "1px solid #46464C",
    boxShadow: "none",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color:"white" ,
    backgroundColor: state.isFocused ? "var(--bg-tertiary)" : "provided.backgroundColor",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: 'var(--bg-primary)', // This line changes the background color of the dropdown menu
  }),
};



export default function App(props: IAppProps) {



  return (
    <div className="flex justify-center py-10 px-[270px] bg-[--bg-primary]">
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
