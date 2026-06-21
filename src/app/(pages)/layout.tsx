import { ChildrenProps } from '@/types/components';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Topbar';
import Outlet from '@/components/layout/Outlet';

export default function PageLayout({ children }: ChildrenProps) {
  return (
    <div className="bg-black-400 min-h-[100dvh] md:bg-[linear-gradient(135deg,var(--color-background-secondary)_0%,var(--color-background-primary)_35%,var(--color-background-primary)_65%,var(--color-background-secondary)_100%)]">
      <Sidebar />
      <main className="ml-0 w-full p-[clamp(1.2rem,3vw,2.5rem)] pt-[clamp(60px,8vw,70px)] md:ml-[clamp(60px,6vw,90px)] md:w-[calc(100%-clamp(60px,6vw,90px))]">
        <Navbar />
        <Outlet>{children}</Outlet>
      </main>
    </div>
  );
}
