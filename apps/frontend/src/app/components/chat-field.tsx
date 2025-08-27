import { Chat } from '../types/chat';
import MessageCard from './message-card';

export default function ChatField({ chat }: { chat: Chat }) {
  return (
    <div className='h-full w-full flex flex-col'>
      <div className='flex-1'></div>
      {chat.messages
        .sort((a, b) => a.index - b.index)
        .map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
    </div>
  );
}
