import ContactPage from '@/components/pages/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nofil | Contact Me',
};

export default function ContactMePage() {
  return <ContactPage />;
}
