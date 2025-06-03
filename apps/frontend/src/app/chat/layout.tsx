import React from 'react';

type ChatLayoutProps = {
  children: React.ReactNode;
};

export default function ChatLayout({ children }: ChatLayoutProps) {
  return <div>{children}</div>;
}
