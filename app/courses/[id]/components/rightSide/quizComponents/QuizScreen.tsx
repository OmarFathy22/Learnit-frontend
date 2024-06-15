import * as React from "react";
import BackBtn from "./BackBtn";
import NextBtn from "./NextBtn";
import SubmitBtn from "./SubmitBtn";
import { IoMdClose } from "react-icons/io";

export interface IAppProps {
  questionIndex: number;
  handleBack: () => void;
  wrongAnswers: number;
  percentage: number;
  questions: any[];
  selectedAnswerIndex: number;
  handleNext: () => void;
  handleSubmit: () => void;
  loading: boolean;
  handleSelectAnswer: (index: number) => void;
  handleOpenQuiz: () => void;
}

export default function App({
  handleBack,
  handleNext,
  handleSelectAnswer,
  handleSubmit,
  loading,
  percentage,
  questionIndex,
  questions,
  selectedAnswerIndex,
  wrongAnswers,
  handleOpenQuiz
}: IAppProps) {
  return (
    <div
      className={`w-[90%] relative max-w-[700px] mx-auto p-5 bg-[#26262C] rounded-lg ${
        wrongAnswers && "hidden"
      }`}
    >
      <button onClick={() => handleOpenQuiz()} className="bg-[#333] p-1  rounded-full top-[15px] right-[15px] absolute">
          <IoMdClose size={22} className=" " />
      </button>
      <h1 className="gradient-text text-[25px]">{`It's Quiz Time`}</h1>
      <div className="w-full relative bg-white h-[2px] rounded-md  my-5">
        <div
          style={{ width: `${percentage}%`, transition: "width 0.5s" }}
          className="gradient-bg rounded-md  absolute left-0 top-0 right-0 bottom-0"
        />
      </div>
      <h1 className="text-[20px] font-bold mb-5">
        {questionIndex + 1}: {questions[questionIndex].question}
      </h1>
      <ul className="flex flex-col gap-3">
        {questions[questionIndex].answers.map((answer:string, index:number) => (
          <li
            onClick={() => handleSelectAnswer(index + 1)}
            key={index}
            className={`bg-[--bg-primary] p-2 rounded-md  cursor-pointer ${
              (selectedAnswerIndex == index + 1 ||
                questions[questionIndex].choosenAnswer == index + 1)?
              "border-[1px] border-orange-500":"border-[1px] border-transparent"
            }`}
          >
            {answer}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mt-5">
        <BackBtn handleBack={handleBack} questionIndex={questionIndex} />
        {questionIndex === questions.length - 1 ? (
          <SubmitBtn
            handleSubmit={handleSubmit}
            loading={loading}
            questionIndex={questionIndex}
            questions={questions}
            selectedAnswerIndex={selectedAnswerIndex}
          />
        ) : (
          <NextBtn
            handleNext={handleNext}
            questionIndex={questionIndex}
            questions={questions}
            selectedAnswerIndex={selectedAnswerIndex}
          />
        )}
      </div>
    </div>
  );
}
