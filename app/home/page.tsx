import Success from "./components/sections/success";
import Master from "./components/sections/master";
import Recommended from "./components/sections/recommended";
import Ranking from "./components/sections/Ranking";
import Feedbacks from "./components/sections/feedbacks";
import Instructor from "./components/sections/instructor";
import { getData } from './actions'
export default async function Home() {
  const Courses = await getData();
  const repeatedCourses = Courses.concat(Courses).concat(Courses).concat(Courses).concat(Courses).concat(Courses);
  if(!Courses) return <h1>Something Went Wrong!</h1>
  return (
    <main className="">
      <Success Courses = {repeatedCourses} />
      <Master Courses = {repeatedCourses}/>
      <Recommended Courses = {repeatedCourses} />
      <Ranking />
      <Feedbacks />
      <Instructor />
    </main>
  );
}
