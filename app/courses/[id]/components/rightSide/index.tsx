'use client'
import * as React from 'react';
import Description from './description'
import Reviews from './reviews'
import Content from './content'

export interface IAppProps {
}

export default function App (props: IAppProps) {
   const [activeTab, setActiveTab] = React.useState('description')
   const [activeColor, setActiveColor] = React.useState('text-[#FFF')
   const handleTab = (tab: string) => (event: React.MouseEvent<HTMLHeadingElement>) => {
    setActiveTab(tab);
    setActiveColor('gradient-text')
  };
  return (
    <div className='w-[500px] h-[calc(100vh-200px)] overflow-auto relative custom-scrollbar'>
      <div className='bg-[--bg-secondary] flex justify-around items-center text-[16px] py-2 border-b-[1px] sticky z-10 right-0 left-0 top-0  border-b-[#474747]'>
      <h1 onClick={handleTab('description')} className={`cursor-pointer ${activeTab == "description" ? "gradient-text": ""}`}>Description</h1>
      <h1 onClick={handleTab('reviews')} className={`cursor-pointer ${activeTab == "reviews" ? "gradient-text": ""}`}>Reviews</h1>
      <h1 onClick={handleTab('content')} className={`cursor-pointer ${activeTab == "content" ? "gradient-text": ""}`}>Content</h1>
      </div>
      {activeTab === 'description' && <Description/>}
      {activeTab === 'reviews' && <Reviews/>}
      {activeTab === 'content' && <Content/>}
    </div>
  );
}
