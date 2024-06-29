'use client'
import * as React from 'react';
import { useState } from 'react';
import Vote from '@/components/svgs/UpvoteGrad'
import Voted from '@/components/svgs/VotedGrad'
export interface IAppProps {
}

export default function App (props: IAppProps) {
  const [upVote, setUpVote] = useState(false)
  const [downVote, setDownVote] = useState(false)
  const handleUpVote = () => {
    setUpVote((prev) => !prev)
    setDownVote(false)
  }
  const handleDownVote = () => {
    setDownVote((prev) => !prev)
    setUpVote(false)
  }
  return (
    <div className="flex gap-3">
    <div className="flex items-center gap-1">
      <button onClick={()=>handleUpVote()} className="rotate-180">
        {upVote ? <Voted/> : <Vote/>}
      </button>
      <h1>{0 + (upVote ? 1 : 0 )}</h1>
    </div>
    <div className="flex items-center gap-1">
      <button onClick={()=>handleDownVote()} >
        {downVote ? <Voted/> : <Vote/>}
      </button>
      <h1>{0 + (downVote ? 1 : 0 )}</h1>
    </div>
  </div>
  
  );
}
