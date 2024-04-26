import * as React from "react";

export interface IAppProps {
  questionIndex: number;
  handleNext: () => void;
  questions: any[];
  selectedAnswerIndex: number;
}

export default function App({handleNext,questionIndex,questions,selectedAnswerIndex}: IAppProps) {
  return (
    <button
      onClick={() => handleNext()}
      className={`${
        questions[questionIndex].choosenAnswer > -1 || selectedAnswerIndex > -1
          ? "gradient-bg"
          : "bg-[#222] bg-opacity-[0.7]"
      } px-10 py-2 rounded-md`}
    >
      Next
    </button>
  );
}
