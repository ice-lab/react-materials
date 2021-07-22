export default function UserLayout({ children, pathname }: {
  children: React.ReactNode;
  pathname?: string;
}) {
  return (
    <div className="user-layout">
      {children}
    </div>
  );
}
