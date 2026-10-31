import ContactPage from '@/components/pages/ContactPage';
import { Metadata } from 'next';
import { pageMetadata } from '@/constants/seo-metadata';
import { routes } from '@/constants/routes';

export const metadata: Metadata = pageMetadata[routes.ui.contact];

export default function ContactMePage() {
  return <ContactPage />;
}
