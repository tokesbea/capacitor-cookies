import { WebPlugin } from '@capacitor/core';

import type { CapacitorCookiesPlugin } from './definitions';

export class CapacitorCookiesWeb extends WebPlugin implements CapacitorCookiesPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
