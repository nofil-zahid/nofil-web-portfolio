import { WhoAmIPage as WhoAmI } from '@/components/pages';
import { Metadata } from 'next';
import { pageMetadata } from '@/constants/seo-metadata';
import { routes } from '@/constants/routes';

export const metadata: Metadata = pageMetadata[routes.ui.whoAmI];

export default function WhoAmIPage() {
  return <WhoAmI />;
}
