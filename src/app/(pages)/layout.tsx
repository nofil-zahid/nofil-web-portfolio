import { ChildrenProps } from '@/types/components';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import Outlet from '@/components/layout/Outlet';

export default function PageLayout({ children }: ChildrenProps) {
  return (
    <div className="bg-black-400 min-h-dvh md:bg-[linear-gradient(135deg,var(--color-background-secondary)_0%,var(--color-background-primary)_35%,var(--color-background-primary)_65%,var(--color-background-secondary)_100%)]">
      <Sidebar />
      <div className="ml-0 w-full md:ml-[clamp(60px,6vw,90px)] md:w-[calc(100%-clamp(60px,6vw,90px))]">
        <Topbar />
        <main
          id="main-content"
          tabIndex={-1}
          className="w-full p-[clamp(1.2rem,3vw,2.5rem)] pt-[clamp(60px,8vw,70px)] focus:outline-none md:pt-[clamp(70px,8vw,80px)]"
        >
          <Outlet>{children}</Outlet>
        </main>
      </div>
    </div>
  );
}
