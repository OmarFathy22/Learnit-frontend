'use client'
import * as React from 'react';
import LeftSide from './components/leftSide';
import RightSide from './components/rightSide';
import { useEffect } from 'react';
import { UserContext } from '@/hooks/useUser';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  const { user} = React.useContext(UserContext);
  const [progress, setProgress] = React.useState<any>(null);

  useEffect(() => {
     const getData = async () => {
      const res = await fetch(`https://learnit-backend-woad.vercel.app/user-progress/${user?._id}`);
      const data = await res.json();
      setProgress(data);
    };
    if(user?._id)
    getData();

  }, [user?._id]);
  return (
  <div>
      <div className='min-1400:grid min-1400:grid-cols-4  '>
        <div className='max-1400:!bg-[--bg-tertiary]'>
          <LeftSide/>
        </div>
        <div className='min-1400:col-span-3 p-5 pb-20 px-10 min-1400:min-h-[100vh] bg-[--bg-tertiary] min-1400:left-[400px]'>
          <RightSide/>
        </div>
      </div>
  </div>
  );
}
