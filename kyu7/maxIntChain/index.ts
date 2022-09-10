// Link: https://www.codewars.com/kata/631082840289bf000e95a334

export function maxIntChain(n: number): number {
  if (n < 5) return -1;
  const half = n / 2;
  const isEven = n % 2 === 0;

  if (isEven) {
    return (half + 1) * (half - 1);
  }
  return Math.ceil(half) * Math.floor(half);
}
