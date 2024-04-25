import * as React from 'react';

export interface IAppProps {
  openQuiz: boolean;
}
const answers = [
"1) JavaScript XML",
"2) JavaScript Syntax Extension",
"3) Java Syntax Extension",
"4) JavaScript Extensible Stylesheet"
]
export default function App ({openQuiz}: IAppProps) {
  return (
    <div className={`${!openQuiz && "hidden"} z-[1000]`}>
      <div className={`fixed bottom-0 right-0 left-0 top-0 w-[100vw] h-[100vh] bg-[#222] bg-opacity-[0.4] `}/>
      <div className='w-[600px] p-5'>
        <h1>It's Quiz Time</h1>
         <div className='w-full bg-white h-2 rounded-sm'>
           <div className='gradient-bg w-[30%]'/>
         </div>
         <h1>1: What is the JSX in React?</h1>
         <ul>
          {answers.map((answer, index) => (
            <li key={index} className='bg-[#F3F4F6] p-2 rounded-md my-2'>{answer}</li>
          ))}
         </ul>

         <div className='flex items-center justify-between'>
          <button className='gradient-bg'>Back</button>
          <button className='gradient-bg'>Next</button>
         </div>

      </div>
    </div>
  );
}
