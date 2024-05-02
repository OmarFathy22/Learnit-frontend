import Image from "next/image";
import GetToKnowUs from '../home/components/sections/GetToKnowUs'
import LearnersAreViewing from './components/LearnersAreViewing'
import Master from "../home/components/sections/master";
import Ranking from "../home/components/sections/Ranking";
import Feedbacks from "../home/components/sections/feedbacks";
import Instructor from "../home/components/sections/instructor";

export default function Home() {
  return <main className="">
    <GetToKnowUs />
    <LearnersAreViewing />
    <Feedbacks/>
    <Ranking/>
    <Master/>
    <Instructor/>
  </main>;
}
