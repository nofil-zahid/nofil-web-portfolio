import { Loader2 } from 'lucide-react';
import { ButtonProps } from '@/types/components';
import { cn } from '@/styles/tailwind-utils';

const Button = ({
  children,
  isLoading = false,
  loadingText,
  disabled,
  customClass = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'group border-accent bg-accent text-background-primary hover:bg-background-primary hover:text-accent focus-visible:ring-offset-background-primary relative flex min-w-35 items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-bold whitespace-nowrap transition-all hover:shadow-[0_0_20px_rgba(13,242,89,0.35)] focus-visible:ring-2 focus-visible:ring-[#00FF66] focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-60 disabled:hover:shadow-none sm:min-w-27.5 sm:px-6 sm:py-3 sm:text-base',
        customClass,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      <span
        className={cn(
          'flex items-center justify-center gap-1.5 text-current sm:gap-2',
          isLoading && 'invisible',
        )}
      >
        {children}
      </span>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center gap-2 text-current">
          <Loader2 className="h-5 w-5 shrink-0 animate-spin" />
          {loadingText && <span>{loadingText}</span>}
        </div>
      )}
    </button>
  );
};

export default Button;
