import Success from "./components/sections/success";
import Master from "./components/sections/master";
import Recommended from "./components/sections/recommended";
import Ranking from "./components/sections/Ranking";
import Feedbacks from "./components/sections/feedbacks";
import Instructor from "./components/sections/instructor";
import { getData } from './actions'
export default async function Home() {
  const Courses = await getData();
  console.log(Courses);
  return (
    <main className="">
      <Success Courses = {Courses} />
      <Master />
      <Recommended />
      <Ranking />
      <Feedbacks />
      <Instructor />
    </main>
  );
}
