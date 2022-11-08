export function domainName(url: string): string {
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0];
}
