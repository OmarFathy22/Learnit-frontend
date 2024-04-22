import * as React from 'react';
import Feed from './components/feed'
import Dialog from './components/joinDialog'
import AddPost from './components/addPost'
export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='px-[70px] flex gap-[20px] justify-between py-10 pt-5 '>
      <AddPost />
      <Feed />
      <Dialog />
    </div>
  );
}
