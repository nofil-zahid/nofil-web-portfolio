import { TExpertiseCategory, TExpertiseName } from '@/constants/expertise';
import {
  ArrowLeftRight,
  Boxes,
  Code2,
  Cpu,
  CreditCard,
  Database,
  Layers,
  Layout,
  Network,
  Palette,
  Server,
  Terminal,
  Type,
  Wrench,
  Zap,
} from 'lucide-react';

export const CategoryIcon = ({ category }: { category: TExpertiseCategory }) => {
  let Icon = Terminal;
  if (category === 'frontend') Icon = Layout;
  if (category === 'backend') Icon = Server;
  if (category === 'databases') Icon = Database;
  if (category === 'architecture') Icon = Network;
  if (category === 'containerization') Icon = Boxes;
  if (category === 'payment_integrations') Icon = CreditCard;
  if (category === 'third_party_tools') Icon = Wrench;
  return <Icon size={50} className="text-accent" />;
};

export const SkillIcons = ({ name }: { name: TExpertiseName }) => {
  const n = name.toLowerCase().replaceAll(' ', '-');
  let Icon = Terminal;
  if (n.includes('react')) Icon = Zap;
  if (n.includes('next')) Icon = Layers;
  if (n.includes('typescript') || n.includes('js')) Icon = Code2;
  if (n.includes('tailwind') || n.includes('css')) Icon = Palette;
  if (n.includes('redux') || n.includes('state')) Icon = Cpu;
  if (n.includes('slate')) Icon = Type;
  if (n.includes('rest') || n.includes('api')) Icon = Code2;
  if (n.includes('websocket') || n.includes('web-sockets') || n.includes('websocket')) Icon = ArrowLeftRight;
  if (
    n.includes('multi-tenant') ||
    n.includes('monolith') ||
    n.includes('micro') ||
    n.includes('scalable') ||
    n.includes('architecture')
  )
    Icon = Server;
  return <Icon size={14} className="text-accent" />;
};
