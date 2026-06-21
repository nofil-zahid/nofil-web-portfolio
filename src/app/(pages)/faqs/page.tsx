import FaqPage from '@/components/pages/FaqPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nofil | FAQs',
};

export default function FAQsPage() {
  return <FaqPage />;
}
