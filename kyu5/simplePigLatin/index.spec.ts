import { pigIt } from './index';

describe('pigIt', () => {
  it('should move the first letter of each word to the end of it', () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
    expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay');
  });
});

