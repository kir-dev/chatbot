'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';

type TopbarProps = {
  username: string;
  onMenuClick?: () => void;
  //onSettingsClick?: () => void;
  //onLogoutClick?: () => void;
};

export default function Topbar({ username, onMenuClick }: TopbarProps) {
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
    <header className='w-full h-14 flex items-center px-4 bg-white shadow-md'>
      {/*
        w-full → width: 100% (takes the full width of the parent).
        h-14 → height: 3.5rem (14 × 0.25rem = 56px).
        flex → sets display: flex;, enabling a flexible layout.
        items-center → vertically centers the flex items (align-items: center;).
        justify-between → places flex items on opposite sides (left and right) with space in between (justify-content: space-between;).
        px-4 → horizontal padding = 1rem (16px) on left and right.
        bg-white → background color is white.
        shadow-md → applies a medium box-shadow (gives a subtle elevation effect).
      */}
      {/* Mobile menu button */}
      <button
        className='absolute left-4 p-2 rounded-lg bg-neutral-700 active:bg-green-600 md:hidden'
        onClick={onMenuClick}
      >
        <Menu className='w-6 h-6' />
      </button>
      {/*
        p-2 → padding: 0.5rem (8px) on all sides (top, right, bottom, left).
        rounded-lg → gives the button rounded corners (border-radius: 0.5rem ≈ 8px).
        hover:bg-... → when the user hovers (with mouse) over the button, its background becomes this color
        active:bg-... → user activity over the button, its background becomes this color
        md:hidden → hides the button on medium screens and larger (>=768px). It will only show on mobile/small screens.
      */}
      {/* User name */}
      <div className='inline-block absolute right-4'>
        <button
          className='inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-neutral-700  text-sm font-medium text-white focus:outline-none'
          onClick={toggleMenu}
        >
          {username}
        </button>

        {isOpen && (
          <div className='origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
            <div className='py-1'>
              {/*settings*/}
              <button
                className='block px-4 py-2 text-sm text-gray-700  active:bg-green-200 w-full text-left'
                onClick={handleSettings}
              >
                Settings
              </button>
              {/*logout*/}
              <button
                className='block px-4 py-2 text-sm text-gray-700  active:bg-green-200 w-full text-left'
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
      );
    </header>
  );
}
