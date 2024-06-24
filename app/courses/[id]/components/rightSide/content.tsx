'use client'
import { useEffect, useState } from 'react';
import Section from './sections';
import { useParams } from "next/navigation";
import { getSections , getLessons } from "@/app/home/actions";
export interface IAppProps {
  refreshVideo: () => void;
  changeLesson: (lesson: any) => void;
  sections: any;
}

export default function App({refreshVideo , changeLesson, sections}: IAppProps) {
  
  return (
    <ul>
      {sections?.map((section:any, i:number) => (
        <li key={i}>
          <Section section={section} refreshVideo={refreshVideo} changeLesson = {changeLesson} />
        </li>
      ))}
    </ul>
  );
}
