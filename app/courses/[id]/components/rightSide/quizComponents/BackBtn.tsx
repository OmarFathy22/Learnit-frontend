import * as React from 'react';

export interface IAppProps {
  questionIndex: number;
  handleBack: () => void;
}

export default function App ({questionIndex , handleBack}: IAppProps) {
  return (
    <button
    onClick={() => handleBack()}
    className={`${
      questionIndex ? "gradient-bg" : "bg-[#222] bg-opacity-[0.7]"
    } px-10 py-2 rounded-md`}
  >
    Back
  </button>
  );
}
