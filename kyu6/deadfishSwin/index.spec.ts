import { deadfishSwim } from '.';

describe('deadfishSwim', () => {
  it('should return the correct values', () => {
    expect(deadfishSwim('iiisdoso')).toEqual([8, 64]);
    expect(deadfishSwim('iiisxxxdoso')).toEqual([8, 64]);
    expect(deadfishSwim('iiisdosodddddiso')).toEqual([8, 64, 3600]);
  });
});
