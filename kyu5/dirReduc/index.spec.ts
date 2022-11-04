import { dirReduc } from '.';

describe('dirReduc', () => {
  it('should return the correct value for a few basic tests', () => {
    expect(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])).toEqual(['WEST']);
    expect(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])).toEqual(['NORTH', 'WEST', 'SOUTH', 'EAST']);
    expect(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])).toEqual([]);
  });
});