'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';

type TopbarProps = {
  username: string;
  onMenuClick?: () => void;
  //onSettingsClick?: () => void;
  //onLogoutClick?: () => void;
};

export default function Sidebar({ username, onMenuClick }: TopbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    console.log('Logging out...');
    // Logout logic
  };

  const handleSettings = () => {
    console.log('Navigating to settings...');
    // If it will be settings
  };

  return (
    <header className='flex justify-between h-14 p-2 bg-gray-600 shadow-md'>
      {/*
        flex → sets display: flex;, enabling a flexible layout.

        justify-between → places flex items on opposite sides (left and right) with space in between (justify-content: space-between;).
        w-full → width: 100% (takes the full width of the parent).
        h-14 → height: 3.5rem (14 × 0.25rem = 56px).
        p-2 → padding: 0.5rem (8px) on all sides (top, right, bottom, left).
        bg-white → background color is white.
        shadow-md → applies a medium box-shadow (gives a subtle elevation effect).
      */}

      <div className='flex justify-start gap-1'>
        {/* Mobile menu button */}
        <button className='p-2 rounded-lg bg-neutral-700 active:bg-green-600 md:hidden' onClick={onMenuClick}>
          <Menu className='w-6 h-6' />
        </button>
        {/*
        rounded-lg → gives the button rounded corners (border-radius: 0.5rem ≈ 8px).
        hover:bg-... → when the user hovers (with mouse) over the button, its background becomes this color
        active:bg-... → user activity over the button, its background becomes this color
        md:hidden → hides the button on medium screens and larger (>=768px). It will only show on mobile/small screens.
        */}
      </div>

      <div className='flex justify-end gap-1'>
        {/* User name */}
        <div className='inline-block space-y-0.5'>
          <button
            className='rounded-md border h-10 shadow-md px-4 py-2 border-white  bg-neutral-700  text-sm font-medium text-white focus:outline-none hover:bg-neutral-800'
            onClick={toggleMenu}
          >
            {username}
          </button>

          {isOpen && (
            <div className='rounded-md border shadow-lg border-white  bg-neutral-700'>
              {/*settings*/}
              <button
                className='block rounded-md w-full p-2 text-left text-sm text-white  active:bg-pink-800 hover:bg-neutral-800'
                onClick={handleSettings}
              >
                Settings
              </button>

              {/*logout*/}
              <button
                className='block rounded-md w-full p-2 text-left text-sm text-white  active:bg-pink-800 hover:bg-neutral-800'
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
