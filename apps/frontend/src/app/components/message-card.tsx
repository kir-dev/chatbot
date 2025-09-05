import { LuMessageSquare } from 'react-icons/lu';
import { Message } from '../types/message';

export default function MessageCard({ message }: { message: Message }) {
  return (
    <div className={`flex ${!message.sentByBot ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className='flex-1 min-w-1/6' />
      <div className={`flex flex-row p-2 rounded-lg ${!message.sentByBot ? 'bg-green-400 text-black' : 'text-white'}`}>
        {message.sentByBot && <LuMessageSquare size={48} className='min-w-12 mr-2 text-green-400' />}
        <p className=''>{message.message}</p>
      </div>
    </div>
  );
}
