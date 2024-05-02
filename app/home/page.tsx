import Image from "next/image";
import GetToKnowUs from './components/sections/GetToKnowUs'
import Success from './components/sections/success'
import Master from "./components/sections/master";
import Recommended from "./components/sections/recommended";
import Ranking from "./components/sections/Ranking";
import Feedbacks from "./components/sections/feedbacks";
import Instructor from "./components/sections/instructor";

export default function Home() {
  return <main className="">
    {/* <GetToKnowUs /> */}
    <Success />
    <Master/>
    <Recommended/>
    <Ranking/>
    <Feedbacks/>
    <Instructor/>
  </main>;
}
