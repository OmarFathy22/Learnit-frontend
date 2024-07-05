import * as React from 'react';
import Feed from './feed'
import Dialog from './joinDialog'
import AddPost from './addPost'
import { IPost } from '../interfaces/post';
import { getPolls } from '../actions';

export interface IAppProps {
  Posts: IPost[];
}

export default async function App ({Posts}: IAppProps) {
  const Polls = await getPolls();
  if(!Polls) return <h1>Something Went Wrong!</h1>

  // Polls.reverse()

  return (
    <div className='max-1000:hidden px-[40px] flex gap-[20px] justify-between py-5 pb-10  '>
    <div className='max-1300:hidden '>
      <AddPost />
    </div>
    <Feed Posts={Posts} Polls = {Polls} />
    <div className=''>
      <Dialog />
    </div>
  </div>
  );
}
