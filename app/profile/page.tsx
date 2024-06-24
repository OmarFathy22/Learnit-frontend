'use client'
import * as React from 'react';
import LeftSide from './components/leftSide';
import RightSide from './components/rightSide';
import { useEffect } from 'react';
import { UserContext } from '@/hooks/useUser';
import { getUserProgress} from './actions'

export interface IAppProps {
}

export default function App (props: IAppProps) {
  const { user} = React.useContext(UserContext);
  const [progress, setProgress] = React.useState<any>(null);

  useEffect(() => {
    const getData = async() => {
      if(user?._id){
        const data = await getUserProgress(user._id);
        setProgress(data)
      }
    }
    getData();
  }, [user?._id]);
  return (
  <div>
      <div className='min-1400:grid min-1400:grid-cols-4  '>
        <div className='max-1400:!bg-[--bg-tertiary]'>
          <LeftSide userProgress={progress}/>
        </div>
        <div className='min-1400:col-span-3 p-5 pb-20 px-10 min-1400:min-h-[100vh] bg-[--bg-tertiary] min-1400:left-[400px]'>
          <RightSide userProgress={progress}/>
        </div>
      </div>
  </div>
  );
}
