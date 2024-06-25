'use client'
import * as React from 'react';
import LeftSide from '../components/leftSide';
import EditInfo from '../components/EditInfo';
import { useEffect } from 'react';
import { UserContext } from '@/hooks/useUser';
import { getUserProgress} from '../actions'

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
    <div className='relative  min-1300:grid grid-cols-4  '>
    <div className='max-1300:hidden'>
        <LeftSide userProgress={progress}/>
    </div>
      <div className='col-span-3 p-5 pb-20 px-10 min-h-[100vh] bg-[--bg-tertiary] left-[400px]'>
        <EditInfo/>
      </div>
    </div>
  );
}
