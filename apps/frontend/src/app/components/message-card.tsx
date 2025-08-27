import { Message, SentBy } from '../types/message';

export default function MessageCard({ message }: { message: Message }) {
  return (
    <div className={`flex ${message.sentBy == SentBy.USER ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className='flex-1 min-w-1/4'></div>
      <div className={`m-2 p-2 rounded-2xl ${message.sentBy == SentBy.USER ? 'bg-green-400 text-black' : 'text-white'}`}>
        <p className=''>{message.message}</p>
      </div>
    </div>
  );
}
