export interface CapacitorCookiesPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
