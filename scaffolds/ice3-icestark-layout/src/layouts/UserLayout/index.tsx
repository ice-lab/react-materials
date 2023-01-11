import type { ReactNode } from 'react';

export default function UserLayout({ children, pathname }: {
  children: ReactNode;
  pathname?: string;
}) {
  return (
    <div className="user-layout">
      {children}
    </div>
  );
}
