import 'server-only';

import { headers } from 'next/headers';
import { userAgent } from 'next/server';

export const isMobileDevice = async (): Promise<boolean> => {
  const headersList = await headers();

  const { device } = userAgent({
    headers: headersList,
  } as Request);

  return device.type === 'mobile';
};
