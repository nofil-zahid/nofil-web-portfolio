import FaqPage from '@/components/pages/FaqPage';
import { Metadata } from 'next';
import { pageMetadata } from '@/constants/seo-metadata';
import { routes } from '@/constants/routes';

export const metadata: Metadata = pageMetadata[routes.ui.faqs];

export default function FAQsPage() {
  return <FaqPage />;
}
