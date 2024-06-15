'use client'
import { useEffect, useState } from 'react';
import Section from './sections';
import { useParams } from "next/navigation";
import { getSections , getLessons } from "@/app/home/actions";
export interface IAppProps {
  refreshVideo: () => void;
}

export default function App({refreshVideo}: IAppProps) {
  const [sections, setSections] = useState([]);
  const params = useParams();
  useEffect(() => {
    if (params?.id && typeof params.id === "string") {
      console.log("id", params.id);
      getSections(params.id).then((data) => {
        setSections(data);
      });
    } else if (Array.isArray(params?.id)) {
      getSections(params.id[0]).then((data) => {
        setSections(data);
      });
    }
  }, [params.id]);
  return (
    <ul>
      {sections.map((section, i) => (
        <li key={i}>
          <Section section={section} refreshVideo={refreshVideo} />
        </li>
      ))}
    </ul>
  );
}
