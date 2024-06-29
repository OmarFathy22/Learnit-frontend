'use client';
import React, { SyntheticEvent, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { RiSendPlaneFill } from "react-icons/ri";
import Loader from './components/loader';
import { usePathname } from 'next/navigation';

const AiChatbot = () => {
  const pathname = usePathname();
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([
    { text: 'Hello! I am LearnItBuddy, your AI chatbot. Ask me anything!', isUser: false }
  ]);
  const API_KEY = process.env.NEXT_PUBLIC_GIMINI_API_KEY as string;

  const genAI = new GoogleGenerativeAI(API_KEY);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setConversation([...conversation, { text: userInput, isUser: true }]);
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(userInput);
      const response = await result.response;
      const text = await response.text();
      setResponse(text);
      setConversation([...conversation, { text: userInput, isUser: true }, { text, isUser: false }]);
    } catch (error) {
      console.error('Error generating content:', error);
      setResponse('Sorry, something went wrong. Please try again.');
      setConversation([...conversation, { text: userInput, isUser: true }, { text: 'Sorry, something went wrong. Please try again.', isUser: false }]);
    }
    setIsLoading(false);
    setUserInput('');
  };

  return (
    <div className='mx-auto flex  flex-col'>
      <div className='flex items-center justify-center '>
        <h1 className='gradient-text text-[30px] py-4'>LearnItBuddy</h1>
      </div>
      <div className='p-4 px-1 pb-[100px] flex flex-col '>
        {conversation.map((msg, index) => (
          <div
            key={index}
            style={{wordWrap:"break-word"}}
            className={`py-2 px-3 rounded-lg m-2  max-w-[50%] break-all  ${
              msg.isUser
                ? 'bg-[#555] text-white flex self-end rounded-ee-none'
                : 'gradient-bg text-white rounded-es-none self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className='py-2 px-3 rounded-lg m-2 gradient-bg text-white w-fit max-w-[50%]'>
            <Loader />
          </div>
        )}
      </div>
      <div className={`bg-[--bg-primary] fixed bottom-0 ${pathname == '/chatbot' && "max-600:!bottom-[50px]"} right-0 left-0`}>
        <form onSubmit={handleSubmit} className=' flex px-4 gap-4 bg-[--bg-tertiary] p-2 mx-4 mb-2 rounded-full'>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask something..."
            required
            className='w-full p-2 bg-transparent'
          />
          <button type="submit" disabled={isLoading}><RiSendPlaneFill size={25} /></button>
        </form>
      </div>
    </div>
  );
};

export default AiChatbot;
