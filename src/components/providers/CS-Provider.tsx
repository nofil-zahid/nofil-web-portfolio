import { ChildrenProps } from '@/types/components';
import ClickSpark from '../shared/ClickSpark';

export default function CSProvider({ children }: ChildrenProps) {
  return (
    <ClickSpark
      sparkColor="#0df259"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
      easing="ease-out"
      extraScale={1.0}
    >
      {children}
    </ClickSpark>
  );
}
