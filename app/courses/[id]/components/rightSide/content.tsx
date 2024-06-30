"use client";
import { SyntheticEvent, useEffect, useState } from "react";
import Section from "./sections";
import { useParams } from "next/navigation";
import { getSections, getLessons } from "@/app/home/actions";
import { Collapse } from "react-collapse";
import toast from "react-hot-toast";
export interface IAppProps {
  refreshVideo: () => void;
  changeLesson: (lesson: any) => void;
  sections: any;
  isEnrolled: boolean;
}

export default function App({
  refreshVideo,
  changeLesson,
  sections,
  isEnrolled,
}: IAppProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  const handleSubmitProject = (e:SyntheticEvent) => {
    e.preventDefault();
    setTimeout(() => {
      toast.success("Project Submitted Successfully");
      location.reload();
    }, 700);
  };
  return (
    <div>
      {isEnrolled ? (
        <ul>
          {sections?.map((section: any, i: number) => (
            <li key={i}>
              <Section
                section={section}
                refreshVideo={refreshVideo}
                changeLesson={changeLesson}
              />
            </li>
          ))}
          <div
            onClick={handleOpen}
            className="px-10 py-3 cursor-pointer flex items-center justify-between border-b-[1px] border-b-[#474747]"
          >
            <h1
              className={`${
                isOpened ? "gradient-text" : "text-[#FFF]"
              } font-bold text-[20px]`}
            >
              Final Project: Task Tracker Application
            </h1>
          </div>
          <Collapse isOpened={isOpened} theme={{ collapse: "custom-collapse" }}>
            <li className="gap-5 flex flex-col items-start px-10 py-3 border-b-[1px] border-b-[#474747]">
              <p className="text-gray-300 text-sm">
                Create a Task Tracker application using React to apply the
                fundamental concepts learned in the course.
              </p>
              <ul className="list-disc ml-5 text-gray-300 text-sm">
                <li>Home Page with a welcome message and app description</li>
                <li>
                  Task List displaying tasks with name, description, due date,
                  and status
                </li>
                <li>Form to add new tasks (controlled components)</li>
                <li>Edit existing tasks with pre-filled form data</li>
                <li>Delete tasks with a confirmation prompt</li>
                <li>Filter tasks by completion status</li>
                <li>Use React Router for navigation</li>
                <li>Apply basic, responsive styling</li>
              </ul>
              <p className="text-gray-300 text-sm">
                Optional (Extra Credit): Integrate with a mock API using
                `json-server`, and write basic tests using Jest and React
                Testing Library.
              </p>

              <form
                onSubmit={handleSubmitProject}
                className="w-full flex justify-between gap-3 mb-5"
              >
                <input
                  required
                  type="text"
                  placeholder="Submit Final Project URL"
                  className="flex-1 bg-[#2D2D2D] text-white px-3 py-1 rounded-md mt-3 "
                />
                <button
                  type="submit"
                  className="gradient-bg text-white px-3 py-1 rounded-md mt-3"
                >
                  Submit
                </button>
              </form>
            </li>
          </Collapse>
        </ul>
      ) : (
        <div className=" flex justify-center items-center">
          <h1 className="text-center pt-5 gradient-text font-bold h-full">
            Please enroll to view the content!
          </h1>
        </div>
      )}
    </div>
  );
}
