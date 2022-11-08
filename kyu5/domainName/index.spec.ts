import { domainName } from '.';

describe('domainName', () => {
  it('should return domain name', () => {
    expect(domainName('http://google.com')).toBe('google');
    expect(domainName('http://google.co.jp')).toBe('google');
    expect(domainName('www.xakep.ru')).toBe('xakep');
    expect(domainName('https://youtube.com')).toBe('youtube');
  });
});
