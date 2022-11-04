export function dirReduc(arr: string[]): string[] {
  const opposite = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };
  
  const test = arr.reduce((acc, dir) => {
    if (acc[acc.length - 1] === opposite[dir as keyof typeof opposite]) {
      acc.pop();
    } else {
      acc.push(dir);
    }
    return acc;
  }, [] as string[]);

  return test;
}
