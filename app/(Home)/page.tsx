import Image from "next/image";
import Success from './components/sections/success'
import Master from "./components/sections/master";
import Recommended from "./components/sections/recommended";
import Ranking from "./components/sections/Ranking";
export default function Home() {
  return <main className="">
    <Success />
    <Master/>
    <Recommended/>
    <Ranking/>
  </main>;
}
