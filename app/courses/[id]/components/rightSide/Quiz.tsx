import { useState } from "react";
import WrongAnswersScreen from "./quizComponents/WrongAnswers";
import SuccessScreen from "./quizComponents/Success";
import { Questions } from "./quizComponents/questions";
import QuizScreen from "./quizComponents/QuizScreen";

export interface IAppProps {
  openQuiz: boolean;
  handleOpenQuiz: () => void;
}

export default function App({ openQuiz, handleOpenQuiz }: IAppProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [questions] = useState(Questions);
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswerIndex(index);
    questions[questionIndex].choosenAnswer = index;
  };
  const handleCheckAnswers = () => {
    let Wrong_Answers = 0;
    questions.map((question) => {
      if (question.choosenAnswer !== question.answer) {
        Wrong_Answers++;
        setWrongAnswers(wrongAnswers + 1);
      }
    });
    if (Wrong_Answers === 0) {
      setSuccess(true);
    }
  };
  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    handleCheckAnswers();
    setPercentage(((questionIndex + 1) / questions.length) * 100);
    setLoading(false);
    questions.map((question) => {
      question.choosenAnswer = -1;
    });
    setQuestionIndex(0);
    setSelectedAnswerIndex(-1);
    setPercentage(0);
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
    }
    return;
  };
  const handleBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
    setSelectedAnswerIndex(-1);
    return;
  };
  const handleRetry = () => {
    setWrongAnswers(0);
    setQuestionIndex(0);
    setSelectedAnswerIndex(-1);
    setPercentage(0);
  };
  const handleLeave = () => {
    handleRetry();
    handleOpenQuiz();
    setSuccess(false);
  };

  // logic ends here

  return (
    <div className={`${!openQuiz && "hidden"} z-[1000] w-full`}>
      <div
        className={`fixed bottom-0 right-0 left-0 top-[80px] max-600:top-[60px] backdrop-blur w-full    bg-[#222] bg-opacity-[0.4] flex justify-center items-center `}
      >
        <div className={`w-full ${!wrongAnswers && "hidden"}`}>
          <WrongAnswersScreen
            handleLeave={handleLeave}
            handleRetry={handleRetry}
            wrongAnswers={wrongAnswers}
            numberOfQuestions={questions.length}
            handleOpenQuiz={handleOpenQuiz}
          />
        </div>
        <div className={`w-full ${!success && "hidden"}`}>
          <SuccessScreen
            handleLeave={handleLeave}
            handleRetry={handleRetry}
            wrongAnswers={wrongAnswers}
            numberOfQuestions={questions.length}
            handleOpenQuiz={handleOpenQuiz}
          />
        </div>

        <div className={`w-full ${(wrongAnswers || success) && "hidden"}`}>
          <QuizScreen
            handleBack={handleBack}
            handleNext={handleNext}
            handleSelectAnswer={handleSelectAnswer}
            handleSubmit={handleSubmit}
            loading={loading}
            percentage={percentage}
            questionIndex={questionIndex}
            questions={questions}
            selectedAnswerIndex={selectedAnswerIndex}
            wrongAnswers={wrongAnswers}
            handleOpenQuiz={handleOpenQuiz}
          />
        </div>
      </div>
    </div>
  );
}
