import { ChildrenProps } from '@/types/components';
import NavigatorStatus from '../layout/NavigatorStatus';
import { EventsInterceptor } from './EventsInterceptor';
import ServiceWorker from '../service-worker/ServiceWorker';
import TopLoader from './TopLoader';
import Toaster from './Toaster';
import VercelAnalytics from './VercelAnalytics';
import ClickSparkProvider from './CS-Provider';
import { TerminalProvider } from './TerminalProvider';

export default function Providers({ children }: ChildrenProps) {
  return (
    <EventsInterceptor>
      <VercelAnalytics />
      <TopLoader />
      <Toaster />
      <TerminalProvider>
        <ClickSparkProvider>{children}</ClickSparkProvider>
      </TerminalProvider>
      <ServiceWorker />
      <NavigatorStatus />
    </EventsInterceptor>
  );
}
