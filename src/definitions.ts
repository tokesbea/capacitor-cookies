export interface CapacitorCookiesPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getCookies(options: { url: string}): Promise<{ cookie: string}>;
  setCookie(options: { url: string, key: string, value: string}): Promise<{ cookie: string}>;
  
}
