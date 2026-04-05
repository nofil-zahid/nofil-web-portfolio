import { ChildrenProps } from '@/types/components';
import NavigatorStatus from '../layout/NavigatorStatus';
import { LoadingProvider } from './LoadingProvider';
import { EventsInterceptor } from './EventsInterceptor';
import ServiceWorker from '../service-worker/ServiceWorker';
import TopLoader from './TopLoader';
import Toaster from './Toaster';
import VercelAnalytics from './VercelAnalytics';
import ClickSparkProvider from './CS-Provider';

export default function Providers({ children }: ChildrenProps) {
  return (
    <EventsInterceptor>
      <VercelAnalytics />
      <TopLoader />
      <Toaster />
      <LoadingProvider>
        <ClickSparkProvider>
          {children}
        </ClickSparkProvider>
        <ServiceWorker />
        <NavigatorStatus />
      </LoadingProvider>
    </EventsInterceptor>
  );
}
