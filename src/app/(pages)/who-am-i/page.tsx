import WhoAmI from '@/components/pages/WhoAmI-Page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nofil | Who Am I',
};

export default function WhoAmIPage() {
  return <WhoAmI />;
}
