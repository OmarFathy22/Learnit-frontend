import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import SubmitLoading from '@/components/loaders/sumbitButton'
import WrongAnswers from './WrongAnswers'


export interface IAppProps {
  openQuiz: boolean;
  handleOpenQuiz: () => void;
}
const Questions = [
  {
    question: "What is the JSX in React?",
    choosenAnswer: -1,
    answers: [
      "1) JavaScript XML",
      "2) JavaScript Syntax Extension",
      "3) Java Syntax Extension",
      "4) JavaScript Extensible Stylesheet",
    ],
  },
  {
    question: "What does the useState hook do in React?",
    choosenAnswer: -1,
    answers: [
      "1) JavaScript XML",
      "2) JavaScript Syntax Extension",
      "3) Manages state in a functional component",
      "4) JavaScript Extensible Stylesheet",
    ],
  },
  {
    question:
      "Which lifecycle method is invoked immediately after a component is inserted into the DOM?",
    choosenAnswer: -1,
    answers: [
      "1)  componentDidMount",
      "2)  JavaScript Syntax Extension",
      "3)  Java Syntax Extension",
      "4)  JavaScript Extensible Stylesheet",
    ],
  },
  {
    question: "What is the purpose of React Router?",
    choosenAnswer: -1,
    answers: [
      "1) JavaScript XML",
      "2) Client-side routing",
      "3) componentDidMount",
      "4) JavaScript Extensible Stylesheet",
    ],
  },
];
const answers = [
  "1) JavaScript XML",
  "2) JavaScript Syntax Extension",
  "3) Java Syntax Extension",
  "4) JavaScript Extensible Stylesheet",
];
export default function App({ openQuiz, handleOpenQuiz }: IAppProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [questions] = useState(Questions);
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [wrongAnswers , setWrongAnswers] = useState(false)
  

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswerIndex(index);
    questions[questionIndex].choosenAnswer = index;
  };

  const handleSubmit = async() => {
    setPercentage(((questionIndex + 1) / questions.length) * 100);
    setLoading(true)
     await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoading(false)
    // handleOpenQuiz()
    setWrongAnswers(true)
    questions.map((question) => {
       question.choosenAnswer = -1
    })
    setQuestionIndex(0)
    setSelectedAnswerIndex(-1)
    setPercentage(0)
  };
  const handleNext = () => {
    if (
      (questionIndex < questions.length - 1 && selectedAnswerIndex > -1) ||
      questions[questionIndex].choosenAnswer > -1
    ) {
      if (questions[questionIndex].choosenAnswer == -1) {
        questions[questionIndex].choosenAnswer = selectedAnswerIndex;
      }
      setSelectedAnswerIndex(-1);
      setQuestionIndex(questionIndex + 1);
      setPercentage(((questionIndex + 1) / questions.length) * 100);
      // update the choosen answer
    }
    return;
  };
  const handleBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
    return;
  };
  const handleRetry = () => {
    setWrongAnswers(false)
    setQuestionIndex(0)
    setSelectedAnswerIndex(-1)
    setPercentage(0)
  }
  const handleLeave = () => {
    handleRetry()
    handleOpenQuiz()
  }
  return (
    <div className={`${!openQuiz && "hidden"} z-[1000]`}>
      <div
        className={`fixed bottom-0 right-0 left-0 top-0 w-[100vw] h-[100vh] bg-[#222] bg-opacity-[0.4] flex justify-center items-center `}
      >
        <button onClick={() => handleOpenQuiz()}>
          <IoMdClose size={30} className="right-5 top-5 absolute " />
        </button>
        <div className={`${!wrongAnswers && "hidden"}`}>
          <WrongAnswers handleLeave={handleLeave}  handleRetry={handleRetry}/>
        </div>
        <div className={`w-[700px] p-5 bg-[#26262C] rounded-lg ${wrongAnswers && "hidden"}`}>
          <h1 className="gradient-text text-[25px]">It's Quiz Time</h1>
          <div className="w-full relative bg-white h-[2px] rounded-md  my-5">
            <div  style={{ width: `${percentage}%`, transition: "width 0.5s" }} className="gradient-bg rounded-md  absolute left-0 top-0 right-0 bottom-0" />
          </div>
          <h1 className="text-[20px] font-bold mb-5">
            {questionIndex + 1}: {questions[questionIndex].question}
          </h1>
          <ul className="flex flex-col gap-3">
            {questions[questionIndex].answers.map((answer, index) => (
              <li
                onClick={() => handleSelectAnswer(index)}
                key={index}
                className={`bg-[--bg-primary] p-2 rounded-md  cursor-pointer ${
                  (selectedAnswerIndex == index ||
                    questions[questionIndex].choosenAnswer == index) &&
                  "border-[1px] border-orange-500"
                }`}
              >
                {answer}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between mt-5">
            <button
              onClick={() => handleBack()}
              className={`${
                questionIndex ? "gradient-bg" : "bg-[#222] bg-opacity-[0.7]"
              } px-10 py-2 rounded-md`}
            >
              Back
            </button>
            { questionIndex === questions.length - 1 ?
              <button
                onClick={() => handleSubmit()}
                className={`${
                  questions[questionIndex].choosenAnswer > -1 ||
                  selectedAnswerIndex > -1
                    ? "gradient-bg"
                    : "bg-[#222] bg-opacity-[0.7]"
                } px-10 py-2 rounded-md`}
              >
                {loading ? <SubmitLoading /> : "Submit"}
              </button>:
              <button
                onClick={() => handleNext()}
                className={`${
                  questions[questionIndex].choosenAnswer > -1 ||
                  selectedAnswerIndex > -1
                    ? "gradient-bg"
                    : "bg-[#222] bg-opacity-[0.7]"
                } px-10 py-2 rounded-md`}
              >
                Next
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
