'use client';

import Topbar from '@/components/topbar';
import Sidebar from '@/components/sidebar';
import { useState } from 'react';

export default function ChatPage() {
  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<string | null>(null);

  const chats = [
    'Chat #1',
    'Chat #2',
    'Chat #3',
    'Hosszabb névvel rendelkező chat példa',
    'Chat #4',
    'Chat #5',
    'Chat #6',
  ];

  return (
    <div className='relative flex h-full w-full flex-row'>
      {/*sidebar*/}
      <div className='relative flex h-full flex-col'>
        <Sidebar
          chats={chats}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onSelectChat={(chat) => setActiveChat(chat)}
        />
      </div>

      <div className='relative flex h-full max-w-full flex-1 flex-col'>
        {/*topbar*/}
        <div className='z-50'>
          <Topbar username='User Name' onMenuClick={handleSidebarOpen} />
        </div>

        {/*chatpage text*/}
        <div className='p-4 flex items-center bg-center justify-center text-5xl'>Chat Page</div>

        {/* Main content */}
        <div className='block p-4'>
          <h1 className='text-2xl font-bold mb-4'>Chat alkalmazás</h1>
          {activeChat ? (
            <div className='p-4 border rounded '>
              <p>{activeChat}</p>
            </div>
          ) : (
            <p>Nincs kiválasztott chat</p>
          )}
        </div>
      </div>
    </div>
  );
}
