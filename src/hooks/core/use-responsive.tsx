import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@/constants/screen-breakpoints';
import { useScreenSize } from './use-screen-size';

export const useResponsive = () => {
  const { width, height } = useScreenSize();
  return {
    width,
    height,
    isMobile: width < MOBILE_BREAKPOINT,
    isTablet: width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT,
    isDesktop: width >= TABLET_BREAKPOINT,
  };
};
