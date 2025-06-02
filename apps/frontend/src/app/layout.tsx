import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chatbot',
  description: 'A simple chatbot application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='hu'>
      <body className={inter.className}>
        <div className="w-full min-h-screen h-full bg-[#222222] text-white">
            {children}
        </div>
      </body>
    </html>
  );
}
