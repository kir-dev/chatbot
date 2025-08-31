'use client';

import clsx from 'clsx';

interface SidebarProps {
  chats: string[];
  isOpen: boolean;
  onClose: () => void;
  onSelectChat: (chatId: string) => void;
}

export default function Sidebar({ chats, isOpen, onClose, onSelectChat }: SidebarProps) {
  return (
    <div
      className={clsx(
        'h-screen w-64 bg-gray-900 text-white flex flex-col transition-transform duration-300 z-40 max-md:hidden',
        {
          '-translate-x-full md:translate-x-0': !isOpen,
          'translate-x-0': isOpen,
        }
      )}
    >
      {/* max-md hidden means in mobile view is unvisitable*/}
      {/* Új chat gomb */}
      <div className='p-2 border-b border-gray-700'>
        <button
          className='w-full bg-blue-600 hover:bg-blue-700 py-2 rounded'
          onClick={() => alert('Új chat indítása (logika később kerül ide)')}
        >
          Új Chat
        </button>
      </div>

      {/* Chat lista */}
      {/*chat, után kell még index, key= index ki kell még találni*/}
      <div className='flex-1 overflow-y-auto p-4 space-y-2'>
        {chats.length > 0 ? (
          chats.map((chat) => (
            <button
              key={1}
              onClick={() => onSelectChat(chat)}
              className='w-full text-left px-3 py-2 rounded hover:bg-gray-700 transition'
            >
              {chat}
            </button>
          ))
        ) : (
          <p className='text-gray-400'>Nincsenek korábbi chatek</p>
        )}
      </div>

      {/* Csak mobilon látszó bezárás gomb */}
      <div className='p-4 md:hidden border-t border-gray-700'>
        <button className='w-full bg-red-600 hover:bg-red-700 py-2 rounded' onClick={onClose}>
          Bezárás
        </button>
      </div>
    </div>
  );
}
