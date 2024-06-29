"use client";
import * as React from "react";
import Description from "./description";
import Reviews from "./reviews";
import Content from "./content";
import { useEffect } from "react";
import { UserContext } from "@/hooks/useUser";
import { getUserProgress } from "@/app/profile/actions";
import { EnrollInCourse } from "../../actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export interface IAppProps {
  refreshVideo: () => void;
  changeLesson: (lesson: any) => void;
  course: any;
}

export default function App({ refreshVideo,changeLesson, course }: IAppProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("description");
  const { user } = React.useContext(UserContext);
  const [progress, setProgress] = React.useState<any>(null);
  const [refetchTrigger, setRefetchTrigger] = React.useState(false);

  useEffect(() => {
    const getData = async () => {
      if (user?._id) {
        const UserPoints = await getUserProgress(user._id);
        setProgress(UserPoints);
      }
    };
    getData();
  }, [user?._id, refetchTrigger]);

  const handleTab = (tab: string) => (
    event: React.MouseEvent<HTMLHeadingElement>
  ) => {
    setActiveTab(tab);
  };

  // Method to trigger refetch
  const refetchData = () => {
    setRefetchTrigger((prev: any) => !prev); // Toggle or increment to trigger useEffect
  };

  const handleEnroll = async () => {
    const res = await EnrollInCourse(user?._id, course?._id);
    if (res != null) {
      toast.success("Enrolled Successfully");
      refetchData();
    } else {
      toast.error("Enrollment Failed");
    }

  };
  return (
    <div className="w-[500px] max-1000:w-full h-[calc(100vh-80px)] !overflow-auto relative custom-scrollbar">
      <div className="w-full relative ">
        <div className="flex items-center justify-between p-3 px-10 ">
          <button
            onClick={handleEnroll}
            disabled={
              progress?.points < course?.pointsToUnlock ||
              progress?.coursesInProgress?.some(
                (progressCourse: { _id: any }) =>
                  progressCourse?._id == course?._id
              )
            }
            className=" disabled:bg-[--bg-tertiary] disabled:z-[0] bg-orange-500 text-white z-[100]  py-2 px-10 rounded-md"
          >
            {progress?.coursesInProgress?.some(
              (progressCourse: { _id: any }) =>
                progressCourse?._id == course?._id
            )
              ? "Enrolled"
              : "Enroll"}
          </button>
          <div className="flex gap-3 items-center">
            <h1 className="text-[15px] font-bold ">points to unlock</h1>
            <div className="bg-[--bg-tertiary] py-2 px-2 rounded-md flex gap-1">
              <h1>{progress?.points || '0'}</h1>
              <h1>/</h1>
              <h1 className="gradient-text">{course?.pointsToUnlock}</h1>
            </div>
          </div>
        </div>
        <div
          style={{
            width: `${(progress?.points * 100) / course?.pointsToUnlock}%`,
          }}
          className={`gradient-bg-opacity  absolute top-0 bottom-0 left-0 right-0 `}
        />
      </div>
      <div className="bg-[--bg-secondary] flex justify-between px-10 items-center text-[16px] py-2 border-b-[1px] sticky z-10 right-0 left-0 top-0  border-b-[#474747]">
        <h1
          onClick={handleTab("description")}
          className={`cursor-pointer ${
            activeTab == "description" ? "gradient-text" : ""
          }`}
        >
          Description
        </h1>
        <h1
          onClick={handleTab("reviews")}
          className={`cursor-pointer ${
            activeTab == "reviews" ? "gradient-text" : ""
          }`}
        >
          Reviews
        </h1>
        <h1
          onClick={handleTab("content")}
          className={`cursor-pointer ${
            activeTab == "content" ? "gradient-text" : ""
          }`}
        >
          Content
        </h1>
      </div>
      {activeTab === "description" && <Description course={course} />}
      {activeTab === "reviews" && <Reviews />}
      {activeTab === "content" && (
        <Content
          sections={course?.courseSections}
          refreshVideo={refreshVideo}
          changeLesson={changeLesson}
        />
      )}
    </div>
  );
}
