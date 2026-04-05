import { Loader2 } from 'lucide-react';
import { ButtonProps } from '@/types/components';
import { cn } from '@/styles/tailwind-utils';

const Button = ({ children, isLoading, disabled, customClass = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`
        group relative
        flex items-center justify-center gap-2
        font-bold whitespace-nowrap transition-all
        rounded-lg border border-accent
        bg-accent text-background-primary
        hover:shadow-[0_0_20px_rgba(13,242,89,0.35)]
        active:scale-95
        disabled:opacity-60 disabled:pointer-events-none
        disabled:hover:shadow-none
        min-w-[140px]
        px-5 py-2.5
        text-sm
        sm:min-w-[110px]
        sm:px-6 sm:py-3
        sm:text-base
        ${customClass}
      `}
      type="button"
      disabled={disabled || isLoading}
      {...props}
    >
      <span className={cn('flex justify-center items-center gap-1.5 sm:gap-2', isLoading ? 'invisible' : 'visible')}>
        {children}
      </span>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin" />
        </div>
      )}
    </button>
  );
};

export default Button;
