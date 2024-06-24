import * as React from 'react';
import SubmitLoading from "@/components/loaders/sumbitButton";


export interface IAppProps {
  handleSubmit: () => void;
  questions: any;
  questionIndex: number;
  selectedAnswerIndex: number;
  loading: boolean;
}

export default function App ({handleSubmit , questions , questionIndex , loading , selectedAnswerIndex}: IAppProps) {
  return (
  
      <button
        onClick={() => handleSubmit()}
        className={`${
          questions[questionIndex]?.choosenAnswer > -1 ||
          selectedAnswerIndex > -1
            ? "gradient-bg"
            : "bg-[#222] bg-opacity-[0.7]"
        } px-10 py-2 rounded-md`}
      >
        {loading ? <SubmitLoading /> : "Submit"}
      </button>
  );
}
