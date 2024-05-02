import Image from "next/image";
import GetToKnowUs from '../home/components/sections/GetToKnowUs'
import Success from '../home/components/sections/success'
import Master from "../home/components/sections/master";
import Recommended from "../home/components/sections/recommended";
import Ranking from "../home/components/sections/Ranking";
import Feedbacks from "../home/components/sections/feedbacks";
import Instructor from "../home/components/sections/instructor";

export default function Home() {
  return <main className="">
    <GetToKnowUs />
    <Success />
    <Master/>
    <Recommended/>
    <Ranking/>
    <Feedbacks/>
    <Instructor/>
  </main>;
}
