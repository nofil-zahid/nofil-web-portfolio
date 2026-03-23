'use client'
import Breadcrumb from "./Breadcrumb";
import { useInitialLoading } from "@/hooks/context/loading";
import { showToast } from "@/utils/toaster";
import { Navbar } from "./Navbar";
import Button from "../core/Button";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

const Topbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { hasLoaded } = useInitialLoading();
  if (!hasLoaded) return null;

  const handleHireMe = () => {
    if (pathname === routes.ui.contact) {
      showToast({ type: 'info', text: 'Please fill the form to hire me.' });
      return;
    }
    router.push(routes.ui.contact);
  }

  return (
    <div className="hidden md:flex fixed top-0 left-[clamp(60px,6vw,90px)] right-0 z-40 h-[clamp(60px,8vw,70px)] bg-background-secondary backdrop-blur-md border-b border-border-glow items-end px-[clamp(1.5rem,3vw,2.5rem)] justify-between">
      <div className="mb-4">
        <Breadcrumb />
      </div>
      <div className="flex items-end gap-1">
        <Navbar />

        <div className="flex items-center gap-4 mb-2 ml-6">
          <div className="h-4 w-px bg-border-glow" />
          <Button onClick={handleHireMe} customClass="h-8 text-[10px] uppercase tracking-widest px-4">
            <span>./hire_me</span>
          </Button> 
        </div>
      </div>
    </div>
  );
};

export default Topbar;
