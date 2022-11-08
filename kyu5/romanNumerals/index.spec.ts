import { romaNumerals } from '.';

describe('romaNumerals', () => {
  it('should return the correct number', () => {
    expect(romaNumerals('I')).toBe(1);
    expect(romaNumerals('IV')).toBe(4);
    expect(romaNumerals('MMVIII')).toBe(2008);
    expect(romaNumerals('MDCLXVI')).toBe(1666);
  });
});
