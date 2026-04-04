import { envVars } from '@/config/env';
import { Analytics } from '@vercel/analytics/next';

export default function VercelAnalytics() {
  if (envVars.NEXT_PUBLIC_NODE_ENV === 'development') return null;
  return <Analytics />;
}
