'use client';
import Breadcrumb from './Breadcrumb';
import { useInitialLoading } from '@/hooks/context/loading';
import { showToast } from '@/utils/toaster';
import { Navbar } from './Navbar';
import Button from '../core/Button';
import { usePathname, useRouter } from 'next/navigation';
import { routes } from '@/constants/routes';

const Topbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { hasLoaded } = useInitialLoading();
  if (!hasLoaded) return null;

  const handleHireMe = () => {
    if (pathname === routes.ui.contact) {
      showToast({
        type: 'info',
        text: 'You are already on the Contact page. Please contact me through the form to get in touch.',
      });
      return;
    }
    router.push(routes.ui.contact);
  };

  return (
    <div className="bg-background-secondary border-border-glow fixed top-0 right-0 left-[clamp(60px,6vw,90px)] z-40 hidden h-[clamp(60px,8vw,70px)] items-end justify-between border-b px-[clamp(1.5rem,3vw,2.5rem)] backdrop-blur-md md:flex">
      <div className="mb-4">
        <Breadcrumb />
      </div>
      <div className="flex items-end gap-1">
        <Navbar />

        <div className="mb-2 ml-6 flex items-center gap-4">
          <div className="bg-border-glow h-4 w-px" />
          <Button onClick={handleHireMe} customClass="h-8 text-[10px] uppercase tracking-widest px-4">
            <span>./hire_me</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
