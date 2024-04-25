import Section from './sections';
export interface IAppProps {
  refreshVideo: () => void;
}

export default function App({refreshVideo}: IAppProps) {
 const titles = ['Overview', 'Curriculum', 'Curriculum','Curriculum','Reviews', 'Q&A', 'Projects', 'Resources', 'Announcements', 'Instructors', 'FAQs', 'Stats']
  return (
    <ul>
      {titles.map((title, i) => (
        <li key={i}>
          <Section title={title} refreshVideo={refreshVideo} />
        </li>
      ))}
    </ul>
  );
}
