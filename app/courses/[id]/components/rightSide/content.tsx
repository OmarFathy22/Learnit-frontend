import Section from './sections';
export interface IAppProps {
}

export default function App(props: IAppProps) {
 const titles = ['Overview', 'Curriculum', 'Reviews', 'Q&A', 'Projects', 'Resources', 'Announcements', 'Instructors', 'FAQs', 'Stats']
  return (
    <ul>
      {titles.map((title, i) => (
        <li key={i}>
          <Section title={title} />
        </li>
      ))}
    </ul>
  );
}
