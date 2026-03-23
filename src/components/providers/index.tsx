import { ChildrenProps } from '@/types/components'
import NavigatorStatus from '../layout/NavigatorStatus'
import { LoadingProvider } from './LoadingProvider'
import { EventsInterceptor } from './EventsInterceptor'
import ServiceWorker from '../service-worker/ServiceWorker'
import TopLoader from './TopLoader'
import Toaster from './Toaster'

export default function Providers ({ children }: ChildrenProps) {
  return (
    <EventsInterceptor>
      <TopLoader />
      <Toaster />
      <LoadingProvider>
        {children}
        <ServiceWorker />
        <NavigatorStatus />
      </LoadingProvider>
    </EventsInterceptor>
  )
}
