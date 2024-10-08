import { registerPlugin } from '@capacitor/core';

import type { CapacitorCookiesPlugin } from './definitions';

const CapacitorCookies = registerPlugin<CapacitorCookiesPlugin>('CapacitorCookies', {
  web: () => import('./web').then((m) => new m.CapacitorCookiesWeb()),
});

export * from './definitions';
export { CapacitorCookies };
