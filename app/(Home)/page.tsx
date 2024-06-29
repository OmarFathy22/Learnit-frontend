import Image from "next/image";
import GetToKnowUs from "../home/components/sections/GetToKnowUs";
import LearnersAreViewing from "./components/LearnersAreViewing";
import Master from "../home/components/sections/master";
import Ranking from "../home/components/sections/Ranking";
import Feedbacks from "../home/components/sections/feedbacks";
import Instructor from "../home/components/sections/instructor";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import { getData } from '@/app/home/actions'
import {  ICourses } from '@/app/community/interfaces/post';

export default async function Home() {
  const Courses = await getData();
  const repeatedCourses = Courses.concat(Courses).concat(Courses).concat(Courses).concat(Courses).concat(Courses);

  return (
    <main className="">
      <GetToKnowUs />
      <LearnersAreViewing Courses = {repeatedCourses} />
      <Feedbacks />
      <Ranking />
      <Master Courses={repeatedCourses} />
      <Instructor />
    </main>
  );
}
