"use client";
import { useState } from "react";
import Select from "react-select";
import { selectStyles } from "@/utils/SelectStyles";
import { FaPlus } from "react-icons/fa";

export interface IAppProps {}
const countryOptions = [
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
];
const fieldOptions = [
  { value: "Software Development", label: "Software Development" },
  { value: "Business", label: "Business" },
  { value: "Design", label: "Design" },
  { value: "Personal Development", label: "Personal Development" },
];
const sectionsOptions = [{ value: "section1", label: "section1" }];

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [Sections, setSections] = useState([
    {
      value: "add New Section",
      label: "add New Section",
    },
  ]);
  const [Lectures, setLectures] = useState([
    {
      value: "add New Lecture",
      label: "add New Lecture",
    },
  ]);
  const [Questions, setQuestions] = useState([
    {
      value: "add New Question",
      label: "add New Question",
    },
  ]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const handleAddSection = () => {
    const newSection = {
      value: `section${Sections.length}`,
      label: `section${Sections.length}`,
    };
    setSections([...Sections, newSection]);
  };
  const handleAddLecture = () => {
    const newLecture = {
      value: `lecture${Lectures.length}`,
      label: `lecture${Lectures.length}`,
    };
    setLectures([...Lectures, newLecture]);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      value: `question${Questions.length}`,
      label: `question${Questions.length}`,
    };
    setQuestions([...Questions, newQuestion]);
  };
  const handleCorrectAnswer = (index: number) => {
    setCorrectAnswerIndex(index);
  };
  return (
    <div className="bg-[--bg-primary] rounded-md  p-[30px] mt-2  flex flex-col items-center gap-5">
      <div className="flex items-center gap-3 w-full ">
        <div className="flex-1">
          <label className="mb-1 block">Sections</label>
          <Select
            options={Sections}
            styles={selectStyles}
            formatOptionLabel={({ value, label }) =>
              value === "add New Section" ? (
                <button
                  onClick={handleAddSection}
                  className="text-white rounded bg-[--bg-secondary] w-full h-full p-2 active:scale[.95] transition-all"
                >
                  {label}
                  <FaPlus size={10} className="inline ml-1" />
                </button>
              ) : (
                label
              )
            }
            isOptionDisabled={(option) => option.value === "add New Section"}
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 block">Section Name</label>
          <input
            placeholder="Section Name"
            type="text"
            className="w-full bg-transparent border border-[#46464C] rounded-[4px] p-3  "
          />
        </div>
      </div>

      <div className="flex items-center gap-3 w-full ">
        <div className="flex-1">
          <label className="mb-1 block">Section Lectures</label>
          <Select
            options={Lectures}
            styles={selectStyles}
            formatOptionLabel={({ value, label }) =>
              value === "add New Lecture" ? (
                <button
                  onClick={handleAddLecture}
                  className="text-white rounded bg-[--bg-secondary] w-full h-full p-2 active:scale[.95] transition-all"
                >
                  {label}
                  <FaPlus size={10} className="inline ml-1" />
                </button>
              ) : (
                label
              )
            }
            isOptionDisabled={(option) => option.value === "add New Lecture"}
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 block">Lecture Name</label>
          <input
            placeholder="Lecture Name"
            type="text"
            className="w-full bg-transparent border border-[#46464C] rounded-[4px] p-3  "
          />
        </div>
      </div>

      <div className="w-full">
        <label htmlFor="displayName" className="mb-1 block">
          Lecture Video Link
        </label>
        <input
          placeholder="ex. https://youtu.be/example"
          type="text"
          className="w-full bg-transparent border border-[#46464C] rounded-[4px] p-3  "
        />
      </div>

      <div className="flex items-center gap-3 w-full ">
        <div className="flex-1">
          <label className="mb-1 block">Lecture Quiz</label>
          <Select
            options={Questions}
            styles={selectStyles}
            formatOptionLabel={({ value, label }) =>
              value === "add New Question" ? (
                <button
                  onClick={handleAddQuestion}
                  className="text-white rounded bg-[--bg-secondary] w-full h-full p-2 active:scale[.95] transition-all"
                >
                  {label}
                  <FaPlus size={10} className="inline ml-1" />
                </button>
              ) : (
                label
              )
            }
            isOptionDisabled={(option) => option.value === "add New Question"}
          />
        </div>
        <div className="flex-[2]">
          <label className="mb-1 block">Question</label>
          <input
            placeholder="Question"
            type="text"
            className="w-full bg-transparent border border-[#46464C] rounded-[4px] p-3  "
          />
        </div>
      </div>

      <div className="w-full">
        <div>
          <div className="flex justify-between mb-2">
            <h1 className="">Answers</h1>
            <h1 className="w-[150px] text-center">Correct Answer</h1>
          </div>
          <ul className="flex flex-col gap-2">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <li
                  key={index}
                  className={`flex items-center ${
                    index != 1
                      ? "brorder border-red-500"
                      : "brorderborder-green-500"
                  }`}
                >
                  <div className="flex-1">
                    <input
                      placeholder="ex. https://youtu.be/example"
                      type="text"
                      className={`w-full bg-transparent border-[2px]  rounded-md p-3 mt-1  ${
                        index != correctAnswerIndex
                          ? " !border-red-500"
                          : " !border-green-500"
                      }`}
                    />
                  </div>
                  <div className="w-[150px] flex justify-center">
                    <button
                      onClick={() => handleCorrectAnswer(index)}
                      className=" p-1 rounded-full w-[20px] h-[20px] border-[2px] border-[#46464C] flex items-center justify-center"
                    >
                      <div
                        className={`w-full h-full rounded-full bg-gradient-to-b from-[#1FDB00] to-[#107500] ${
                          index != correctAnswerIndex && "hidden"
                        }`}
                      ></div>
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <button className="w-full bg-[--bg-secondary] px-10 py-3 rounded-md font-bold hover:opacity-[0.95] active:scale-[.95] transition-all">
        Submit
      </button>
    </div>
  );
}
