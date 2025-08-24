'use client';

import Topbar from '@/components/topbar';

export default function ChatPage() {
  const handleSidebarOpen = () => {
    console.log('Sidebar open');
  };
  return (
    <>
      <div>
        <Topbar username='User Name' onMenuClick={handleSidebarOpen} />
        {/* */}
      </div>
      <div className='flex items-center bg-center justify-center min-h-screen text-5xl'>Chat Page</div>
    </>
  );
}
