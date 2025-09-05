'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ChatField from '../components/chat-field';
import useUser from '../hooks/useUser';

export default function ChatPage() {
  const searchParams = useSearchParams();
  const userId = Number(searchParams.get('userid'));
  const chatIdParam = Number(searchParams.get('chatid'));
  const { data: user, mutate: mutateChat } = useUser(userId);
  const [chatId, setChatId] = useState(chatIdParam);
  useEffect(() => {
    fetch(`http://localhost:3001/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userId,
        message: 'test message',
      }),
    }).then(mutateChat);
  }, []);
  console.log(user);
  return (
    <div className='h-screen w-screen  bg-gray-800'>
      <div className='w-full h-full'>{user?.chats && <ChatField chat={user.chats[0]} />}</div>
    </div>
  );
}
