import Image from "next/image";
import Success from './components/success'
import Master from "./components/master";
import Recommended from "./components/recommended";
export default function Home() {
  return <main className="">
    <Success />
    <Master/>
    <Recommended/>
  </main>;
}
