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
    <div className="bg-background-secondary border-border-glow fixed top-0 right-0 left-[clamp(60px,6vw,90px)] z-40 hidden h-[clamp(60px,8vw,70px)] items-end justify-between border-b px-[clamp(1rem,2.5vw,2.5rem)] backdrop-blur-md md:flex">
      <div className="mb-3.5 block min-w-0 shrink">
        <Breadcrumb />
      </div>
      <div className="flex shrink-0 items-end gap-1">
        <Navbar />

        <div className="mb-2 ml-1.5 flex items-center gap-1.5 sm:ml-2 sm:gap-2 lg:ml-4 lg:gap-3 xl:ml-6 xl:gap-4">
          <div className="bg-border-glow h-3.5 w-px lg:h-4" />
          <Button
            onClick={handleHireMe}
            customClass="h-[clamp(26px,2.2vw,32px)] text-[clamp(9px,0.75vw,11px)] sm:text-[clamp(9px,0.75vw,11px)] uppercase tracking-wider lg:tracking-widest px-[clamp(8px,1vw,16px)] sm:px-[clamp(8px,1vw,16px)] min-w-0 sm:min-w-0 py-0 sm:py-0 font-mono"
          >
            <span>./hire_me</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
