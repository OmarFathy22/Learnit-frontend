import * as React from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

export interface IAppProps {
  handleRetry: () => void;
  handleLeave: () => void;
  wrongAnswers: number;
  numberOfQuestions: number;
  handleOpenQuiz: () => void;
}

export default function App({
  handleLeave,
  wrongAnswers,
  numberOfQuestions,
  handleOpenQuiz
}: IAppProps) {

  return (
    <div className="w-[90%] relative max-w-[700px] mx-auto p-5 bg-[#26262C] rounded-lg">
      <button onClick={() => handleOpenQuiz()} className="bg-[#333] p-1  rounded-full top-[15px] right-[15px] absolute">
          <IoMdClose size={22} className=" " />
        </button>
      <h1 className="gradient-text text-[25px]">it’s Result time</h1>
      <div className="w-full relative bg-white h-[2px] rounded-md  my-5">
        <div
          style={{ width: `${100}%`, transition: "width 0.5s" }}
          className="gradient-bg rounded-md  absolute left-0 top-0 right-0 bottom-0"
        />
      </div>
      <div className="text-[20px] font-bold  text-center">
        <h1>
          You got {numberOfQuestions - wrongAnswers} out of{" "}
          <span className="gradient-text ml-[1px]">{numberOfQuestions}</span>
        </h1>
        <h1 className="text-[16px] font-normal">
          {`Congratulations! You've passed and can now proceed to the next lesson. Great job!`}
          {`you're doing great!`}
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/success.png"
          alt="success"
          width={1000}
          height={1000}
          className="w-[300px] h-[300px]"
        />
      </div>
      <div className="flex items-center justify-center mt-5">
        <button
          onClick={() => handleLeave()}
          className={`px-10 py-2 rounded-md gradient-bg`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
