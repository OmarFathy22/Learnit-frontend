"use client";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "@/hooks/useUser";
import * as React from "react";
import { TiVideo } from "react-icons/ti";
import { RiArrowDownSLine } from "react-icons/ri";
import { Collapse } from "react-collapse";
import Quiz from "./Quiz";

export interface IAppProps {
  section: ISection;
  changeLesson: (lesson: any) => void;
  refreshVideo: () => void;
}
export interface ISection {
  _id: string;
  sectionName: string;
  courseID: string;
  lessons: any[]; // You can replace `any` with a more specific type if you have one for lessons
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export default function App({
  section,
  changeLesson,
  refreshVideo,
}: IAppProps) {
  const { user } = useContext(UserContext);
  const [openQuizzes, setOpenQuizzes] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenQuiz = (lessonId: any) => {
    setOpenQuizzes((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
    console.log(openQuizzes);
  };
  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        className="px-10 py-3 cursor-pointer flex items-center justify-between border-b-[1px] border-b-[#474747]"
      >
        <h1
          className={`${
            isOpened ? "gradient-text" : "text-[#FFF]"
          } font-bold text-[20px]`}
        >
          {section?.sectionName}
        </h1>
        <div className={`font-bold text-[22px] cursor-pointer`}>
          <div
            className={`transition-transform duration-500 ease-in-out transform ${
              isOpened ? "rotate-180" : ""
            }`}
          >
            {isOpened ? (
              <RiArrowDownSLine className=" text-orange-500" />
            ) : (
              <RiArrowDownSLine width="20" height="20" />
            )}
          </div>
        </div>
      </div>
      <Collapse isOpened={isOpened} theme={{ collapse: "custom-collapse" }}>
        <ul className="bg-[--bg-tertiary]">
          {section.lessons.map((lesson, i) => (
            <li
              key={i}
              className=" cursor-pointer flex items-center justify-between px-10 py-3 border-b-[1px] border-b-[#474747]"
            >
              <div onClick={() => changeLesson(lesson)}>
                <h1 className="gradient-text-green">
                  {i + 1}. {lesson?.title}
                </h1>
                <div className="flex items-center gap-1">
                  <h1 className="text-gray-300 text-[12px]">
                    <TiVideo />
                  </h1>
                  <h1 className="text-[12px] text-gray-300">
                    {lesson?.time} Min
                  </h1>
                  {/* <h1
                      onClick={() => refreshVideo()}
                      className="text-[12px] text-gray-300 underline cursor-pointer"
                    >
                      Start: 2.11
                    </h1>
                    <h1 className="text-[12px] text-gray-300 underline cursor-pointer">
                      End: 3.54
                    </h1> */}
                </div>
              </div>
              <button
                onClick={() => handleOpenQuiz(lesson?._id)}
                disabled={
                  i !== 0 &&
                  !section?.lessons[i - 1]?.quizID.solvedBy?.includes(user?._id)
                }
                className=" disabled:border-gray-400 disabled:text-gray-400 px-3 py-[2px] rounded-md border-[1px] cursor-pointer"
              >
                {lesson?.quizID?.solvedBy?.includes(user?._id)
                  ? "Solved"
                  : "Start Quiz"}
              </button>
              <Quiz
                quiz={lesson?.quizID}
                openQuiz={openQuizzes[lesson._id]}
                handleOpenQuiz={() => handleOpenQuiz(lesson._id)}
              />
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
}
