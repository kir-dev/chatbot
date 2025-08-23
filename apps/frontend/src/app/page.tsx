'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleLogin = () => {
    if (!username.trim()) {
      alert('Please enter a username');
      return;
    }

    fetch(`http://localhost:3001/user/login?username=${encodeURIComponent(username)}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Login failed');
      })
      .then(() => {
        window.location.href = `/chat?username=${encodeURIComponent(username)}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Login failed: ' + error.message);
      })

  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black'>
      <div className='relative bg-gray-800/50 p-8 rounded-2xl w-full max-w-md backdrop-blur-sm border border-gray-700 shadow-2xl transition-all duration-300 hover:shadow-emerald-500/10'>
        <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-600 opacity-20 blur-sm transition-all duration-500'/>
        <div className='relative z-10 space-y-6'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-2'>
              Welcome
            </h1>
            <p className='text-gray-400'>Enter your username to continue</p>
          </div>

          <div>
            <label htmlFor='username' className='block text-sm font-medium text-gray-300 mb-2'>
              Username
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border ${isFocused ? 'border-emerald-500 shadow-md shadow-emerald-500/20' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200`}
              placeholder='Enter your username'
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>

          <button
            onClick={handleLogin}
            className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
