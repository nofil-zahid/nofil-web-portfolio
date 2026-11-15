'use client';
import Button from '@/components/core/Button';
import { routes } from '@/constants/routes';
import { useBooleanToggle } from '@/hooks/core/use-boolean-toggle';
import { handleAsync, openAsBlobInNewTab } from '@/utils/api';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Actions() {
  const router = useRouter();
  const { state: isCvLoading, enable: startCvLoading, disable: stopCvLoading } = useBooleanToggle();

  const handleContactMe = () => {
    router.push(routes.ui.contact);
  };

  const handleDownloadCV = handleAsync(
    () => {
      startCvLoading();
      return openAsBlobInNewTab('/cv3-nofil.pdf');
    },
    {
      onError: (err) => {
        console.error('Error opening CV:', err);
      },
      onFinally: stopCvLoading,
    },
  );

  return (
    <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
      <Button onClick={handleDownloadCV} isLoading={isCvLoading} customClass="w-full sm:w-1/2 lg:w-auto">
        <ExternalLink size={16} className="group-hover:animate-bounce" />
        <span className="relative z-10">View CV</span>
      </Button>
      <Button onClick={handleContactMe} customClass="w-full sm:w-1/2 lg:w-auto">
        <MessageCircle size={16} className="transition-transform group-hover:scale-110" />
        <span className="relative z-10">Contact Me</span>
      </Button>
    </div>
  );
}
