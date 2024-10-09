import { WebPlugin } from '@capacitor/core';

import type { CapacitorCookiesPlugin } from './definitions';

export class CapacitorCookiesWeb extends WebPlugin implements CapacitorCookiesPlugin {
  async getCookies(options: { url: string; }): Promise<{ cookie: string }> {
    console.log('get cookies: ' + options);
    return { cookie: document.cookie};
  }
  async setCookie(options:  { url: string, value: string, key: string}): Promise<{ cookie: string}> {
    console.log('set cookies: ' + options);
    return { cookie: document.cookie};
  }
}
