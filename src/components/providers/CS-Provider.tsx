import { ChildrenProps } from '@/types/components';
import Cursor from '../shared/Cursor';

export default function CSProvider({ children }: ChildrenProps) {
  return <Cursor duration={400}>{children}</Cursor>;
}
