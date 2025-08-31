import { Chat } from '../types/chat';
import MessageCard from './message-card';

export default function ChatField({ chat }: { chat: Chat }) {
  return (
    <div className='h-full w-full flex flex-col px-10 overflow-y-scroll'>
      <div className='flex-1' />
      <div className='space-y-5'>
        {chat.messages
          .sort((a, b) => a.index - b.index)
          .map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
      </div>
    </div>
  );
}
